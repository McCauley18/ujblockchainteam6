/*!
=========================================================
* Argon Dashboard React - FREE Leaflet Map Version
=========================================================
*/

import React from "react";
import { Card, Container, Row } from "reactstrap";

// leaflet + react-leaflet components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// core components
import Header from "components/Headers/Header.js";

// Fix default Leaflet marker icons not showing in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapWrapper = () => {
  return (
    <MapContainer
      center={[40.748817, -73.985428]}   // NYC
      zoom={13}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={false}
    >
      {/* OpenStreetMap FREE tiles */}
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />

      {/* Marker */}
      <Marker position={[40.748817, -73.985428]}>
        <Popup>
          Argon Dashboard React • Leaflet Map <br /> Fully Free!
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
