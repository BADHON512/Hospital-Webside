import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import picture from '../../../images/people-1.png'
import picture3 from '../../../images/people-3.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Ourblog.css'
const Ourblog = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className=' w-75 mt-5'>
                <div className='text-center'>
                    <h3 style={{ color: 'green' }}>Our Blog</h3>
                    <br />
                    <h1>From our blog News</h1>
                </div>
                <div>
                    <div className='row mt-5'>
                        <div className="col-md-4">
                            <Card className= 'secondary bg-info' sx={{ maxWidth: 345 }}>
                                <CardHeader

                                  
                                    title="Dr.Coudi"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography>
                                        <h6>lorem ipsum dolor elit. Ipsum, labore.</h6>
                                    </Typography>
                                    <br />
                                            <ArrowForwardIcon></ArrowForwardIcon>
                                </CardContent>
                                <Collapse >
                                </Collapse>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            <img className='img-fluid' src={picture3} alt="" />
                                        </Avatar>
                                    }
                                  
                                    title="Dr.Coudi"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography>
                                        <h6>lorem ipsum dolor elit. Ipsum, labore.</h6>
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <Collapse >
                                </Collapse>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            <img className='img-fluid' src={picture} alt="" />
                                        </Avatar>
                                    }
                                   
                                    title="Dr.Coudi"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography>
                                        <h6>lorem ipsum dolor elit. Ipsum, labore.</h6>
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <Collapse >
                                </Collapse>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourblog;