import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

const schoolsData = [
  {
    name: "INDEPENDENCE MS",
    address: "1370 Dunstan Lane",
    zip: 23455,
    lat: 36.8529, // made-up coordinates for demonstration
    lon: -75.9780
  },
  {
    name: "CENTERVILLE ES",
    address: "2201 Centerville Turnpike",
    zip: 23464,
    lat: 36.8520, // made-up coordinates for demonstration
    lon: -75.9750
  },
  {
    name: "PRINCESS ANNE MS",
    address: "2509 Seaboard Road",
    zip: 23456,
    lat: 36.8535, // made-up coordinates for demonstration
    lon: -75.9770
  }
];

function Maps() {
    return (
      <div>
        <h2><Link to="/Data">Data</Link></h2>
        <MapContainer center={[36.85, -75.98]} zoom={12} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {schoolsData.map((school, index) => (
                <Marker key={index} position={[school.lat, school.lon]}>
                    <Popup>
                        {school.name} - {school.address}, {school.zip}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        </div>
    );

}


export default Maps
