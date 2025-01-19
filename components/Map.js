import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
    import 'leaflet/dist/leaflet.css'
    import L from 'leaflet'

    // Fix for default marker icons
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/marker-icon-2x.png',
      iconUrl: '/marker-icon.png',
      shadowUrl: '/marker-shadow.png'
    })

    export default function Map({ center, zoom, onClick, markerPosition }) {
      const MapClickHandler = () => {
        useMapEvents({
          click: (e) => {
            onClick(e.latlng)
          }
        })
        return null
      }

      return (
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markerPosition && (
            <Marker position={[markerPosition.lat, markerPosition.lng]} />
          )}
          <MapClickHandler />
        </MapContainer>
      )
    }
