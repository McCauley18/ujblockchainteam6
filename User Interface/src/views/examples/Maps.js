/*!
=========================================================
* Argon Dashboard React - Improved Leaflet Map
=========================================================
*/

import React from "react";
import { Card, Container, Row } from "reactstrap";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import Header from "components/Headers/Header.js";

// Custom green marker icon
const agrimarkIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/green.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

// AgriMark South Africa (example: Cape Town branch)
const AGRIMARK_COORDS = [-30.603369, 18.689977];

const MapWrapper = () => {
  return (
    <MapContainer
      center={AGRIMARK_COORDS}   // Center map on South Africa
      zoom={12}
      style={{ height: "600px", width: "100%", borderRadius: "12px" }}
      scrollWheelZoom={true}
    >
      {/* Better, clean tile layer styling */}
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      {/* AgriMark Marker */}
      <Marker position={AGRIMARK_COORDS} icon={agrimarkIcon}>
        <Popup>
          <strong>AgriMark South Africa</strong> <br />
          (Cape Town Branch)
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const Maps = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <MapWrapper />
            </Card>
          </div>
        </Row> 
      </Container>
    </>
  );
};

export default Maps; 
