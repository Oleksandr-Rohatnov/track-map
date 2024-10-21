import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { observer } from 'mobx-react-lite';
import store from '../../store'
import classes from './Map.module.scss';

const Map = observer(() => {
  const { objectStore} = store;
  const position: LatLngTuple = [50.4501, 30.5234];
  return (
    <MapContainer className={classes.map} center={position} zoom={13} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {objectStore.objects?.map((item) => {
        const coordinates = item.coordinates;
        return (
          <Marker key={item.id} position={item.coordinates}>
            <Popup>
              This is Kyiv
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
});

export default Map;
