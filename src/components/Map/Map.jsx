import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';

import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = ({ coords, setCoords, setBounds }) => {
    console.log(" this is coord", coords);
    console.log("this is setcoord", setCoords);
    console.log("this is setBound", setBounds);

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    // const coords = { lat: 0, lng: 0 }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                boostrapURLKeys={{ key: 'AIzaSyDQlJb8S6DpwRt74Bda8dl_xkfiCNRkToE' }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}

export default Map