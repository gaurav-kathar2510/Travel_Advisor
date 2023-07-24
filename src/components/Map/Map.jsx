import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';

import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinate = { lat: 0, lng: 0 }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                boostrapURLKeys={{ key: 'AIzaSyDQlJb8S6DpwRt74Bda8dl_xkfiCNRkToE' }}
                defaultCenter={coordinate}
                center={coordinate}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}

export default Map