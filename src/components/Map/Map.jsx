import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab'

import useStyles from './styles'
import { Rating } from '@material-ui/lab';

const Map = ({ coords, setCoords, setBounds, places, setChildClicked }) => {
    console.log(" this is coord", coords);
    console.log("this is setcoord", setCoords);
    console.log("this is setBound", setBounds);

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
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
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color='primary' fontSize='large' />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}

            </GoogleMapReact>

        </div>
    )
}

export default Map