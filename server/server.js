import express from 'express'
import distanceRoutes from './api/v1/distance.js'


// create express app
const app = express()

// instantiate router feature and add it to the express app
const router = express.Router()
app.use(router)
app.use(express.json())

// using the routes for a specific api
app.use('/api/v1/distance', distanceRoutes)



app.listen(5000, () =>
    console.log('app listening on port 5000')
)


export default app