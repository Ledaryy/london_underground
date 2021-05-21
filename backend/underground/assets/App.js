import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: null
        }
    }
    
    render() {
        return (
            <MapContainer></MapContainer>
        );
    }
    
}


