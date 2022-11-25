Entfernungsrechner Bahnhöfe

In Deutschland gibt es etwa 360 Bahnhöfe, die von ICs und ICEs angefahren werden. Jeder Bahnhof hat
einen eindeutigen zwei- bis sechstelligen Kurzbezeichner, den sogenannten DS100-Code. Die Liste aller
Bahnhöfe [1] stellt die DB Station&Service AG als CSV-Datei zur Verfügung. Die Bahnhöfe, die vom
Fernverkehr angefahren werden sind in der Spalte Verkehr mit FV ausgezeichnet. FV steht für Fernverkehr.


Aufgabenstellung

Zur besseren Orientierung soll ein Entfernungsrechner programmiert werden. Er berechnet die Luftlinie
zwischen zwei beliebigen Fernverkehrs-Bahnhöfen. In der CSV-Datei findest du zu jedem Bahnhof die
jeweiligen Längen- und Breitengrade.
Schreibe einen Web-Service, der eine REST-Schnittstelle bereitstellt. Um z.B. die Strecke zwischen
Frankfurt Main Hbf (FF) und Berlin Hbf (BLS) zu bestimmen, soll der Service folgende REST-Schnittstelle
anbieten:
GET /api/v1/distance/FF/BLS

Als Antwort erwarten wir folgende JSON-Response:
{
"from": "Frankfurt(Main)Hbf",
"to": "Berlin Hbf",
"distance": 423,
"unit": "km"
}

Der Wert im Feld distance soll auf ganze Kilometer gerundet sein.
Es steht dir frei, welche Programmiersprache oder welches Framework du verwendest. Wir verwenden gern
Java oder Kotlin mit Spring Boot.
Du kannst deinen Service auf z.B. Github ablegen, damit wir in einem Gespräch gemeinsam deine
Implementierung besprechen können.

[1] https://data.deutschebahn.com/dataset/data-haltestellen.html#