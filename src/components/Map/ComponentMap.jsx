import React, {useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "../../styles/Map.css"
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import axios from 'axios';
import Divider from '@material-ui/core/Divider';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export function ComponentMap() {
    const [reports, setReports] = useState([])
      
    useEffect( () => {
      axios.get('https://covid-api.com/api/reports?date=2020-12-01')
        .then(res => setReports(res.data.data))
    }, [])

    const position = [43.728006, 7.419106]
    const zoom = 4
    
    return (    
        <MapContainer className="map__container" center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {
            reports.map( (report, index) => (
              <div key={index} className="map__marker">
                {( report.region.lat === null || report.region.long === null )
                ? 
                <div id="null"/>
                :
                <Marker position={[report.region.lat, report.region.long]}>
                  <Popup maxWidth={500}>
                    <h1>Country : <i>{report.region.name}</i></h1>
                    {report.region.province === "" ? <div id="null"/> : <h1>Province : <i>{report.region.province}</i></h1>}
                    <div>
                      <h2 className="map__container__title">Data</h2>
                      <Divider />
                      <div className="map__container__paragraph">
                        <p>Confirmed : <span>{report.confirmed}</span></p>
                        <p>Deaths : <span>{report.deaths}</span></p>
                        <p>Recovered : <span>{report.recovered}</span></p>
                      </div>
                    </div>
                  </Popup>
                </Marker>}
              </div>
            ))
          }
        </MapContainer>
    )
}