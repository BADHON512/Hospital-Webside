import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


const Testinfo = ({ cartinfo }) => {



    return (

        <div className="col-md-4">
            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    component=''
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <p>{cartinfo.description}</p>
                    </Typography>
                </CardContent>


                <CardHeader


                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img className='img-fluid' src={cartinfo.img} alt="" />
                        </Avatar>
                    }
                    title={cartinfo.name}
                    subheader={cartinfo.city}



                />


            </Card>
        </div>

    );
};

export default Testinfo;