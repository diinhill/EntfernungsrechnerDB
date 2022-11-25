import { Router } from 'express'
import csv from 'csvtojson'
import { computeDistance, formatDecimal } from '../../utils.js'

const router = Router()


//// get distance between two FV stations ////

router.get('/:from/:to', async (req, res) => {
    const { from, to } = req.params
    try {
        let station1, station2 = null

        // make csv.file readable by converting csv to json
        csv({ delimiter: ';' })
            .fromFile('./data/D_Bahnhof_2020_alle.csv')
            .then((json) => {

                // find respective FV stations for query parameters: from, to
                json.forEach(station => {
                    if (station.DS100 === from && station.Verkehr === 'FV') {
                        station1 = station
                    } else if (station.DS100 === to && station.Verkehr === 'FV') {
                        station2 = station
                    }
                })

                console.log('station1', station1)
                console.log('station2', station2)

                if (station1, station2 != null) {
                    // use helper functions to calculate the distance between station1 and station2
                    const distance = computeDistance(formatDecimal(station1.Breite), formatDecimal(station1.Laenge), formatDecimal(station2.Breite), formatDecimal(station2.Laenge), 'K')
                    console.log('distance', distance)
                    res.send({
                        from: station1.NAME,
                        to: station2.NAME,
                        distance: Math.round(distance),
                        'unit': 'km'
                    })
                }
            })

    } catch (error) {
        res.send(error)
    }
})

////////


//// get all stations where Verkehr:'FV' is true ////

router.get('/all', async (req, res) => {
    console.log('req:', req)
    try {
        let stations = null
        csv({ delimiter: ";" })
            .fromFile('./data/D_Bahnhof_2020_alle.csv')
            .then((json) => {
                // get only Fernverkehrsbahnhöfe
                stations = json.filter(station => station.Verkehr === 'FV')
                console.log('stations:', stations)
                res.send(stations)
            })
    } catch (error) {
        res.send(error)
    }
})

////////


export default router