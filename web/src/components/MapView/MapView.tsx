import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// This is a workaround for a bug in react-leaflet
// See this issue for more info: https://github.com/PaulLeCam/react-leaflet/issues/453
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const MapView = ({ parks, markerRef }) => {
  const parksWithFormattedCoordinate = parks?.map((park) => {
    return {
      ...park,
      position: [parseFloat(park?.lat), parseFloat(park?.lon)],
    }
  })

  const coordinatesOnly = parksWithFormattedCoordinate?.map((park) => {
    return park?.position
  })

  let centerPosition = {
    lat: 59.4377385,
    lng: 24.7330444,
  }
  if (coordinatesOnly?.length > 0) {
    const bounds = new L.LatLngBounds(coordinatesOnly)
    centerPosition = bounds.getCenter()
  }

  return (
    <MapContainer
      center={[centerPosition?.lat, centerPosition?.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parksWithFormattedCoordinate?.map((park, idx) => {
        return (
          <Marker
            key={`park-${park?.osm_id}`}
            position={park?.position}
            ref={(el) => (markerRef.current[idx] = el)}
          >
            <Popup>{park?.display_name}</Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default MapView
