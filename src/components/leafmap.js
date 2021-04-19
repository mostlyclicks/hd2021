import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Marker from 'react-leaflet-animated-marker';
import './leafletmap.css'



class LeafMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [43.88199, -91.20889],
    zoom: 15,
    markerText: ""
  }

  render() {

      return (
        <MapContainer center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.markerText !== "" &&
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
          }
        </MapContainer>
      );
  }
}

export default LeafMap

//  const LeafMap = () => {

//   // static propTypes = {
//   //   /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
//   //   position: PropTypes.array,

//   //   /** Initial zoom level for the map (default 13) **/
//   //   zoom: PropTypes.number,

//   //   /** If set, will display a marker, which when clicked will display this text **/
//   //   markerText: PropTypes.string
//   // }

//   // static defaultProps = {
//   //   position: [43.88199, -91.20889],
//   //   zoom: 13,
//   //   markerText: ""
//   // }

 

//       return (
//         <MapContainer center={[43.88199, -91.20889]} zoom="4" scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//          <Marker position={[43.88199, -91.20889]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>


//         </MapContainer>
          
      
//       )
// }

//export default LeafMap






