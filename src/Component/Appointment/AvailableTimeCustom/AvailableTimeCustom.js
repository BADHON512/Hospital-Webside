import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AvailableTimeCustom.css'
import BookingModal from '../BookingModal/BookingModal';

const AvailableTimeCustom = ({ avai, date }) => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
  //for modal
  const [modalIsOpen, setIsOpen] = useState(false);
   let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div className='dds col-md-4 '>
            <Card className='hhm' sx={{ minWidth: 275 }}>
                <CardContent>

                    <Typography className='text-center kkg' component="div">
                        <h4>{avai.title}</h4>
                    </Typography>
                    <Typography className='text-center' sx={{ mb: 1.5 }} color="text.secondary">
                        <h6>{avai.time}</h6>
                    </Typography>

                    <Typography className='text-center'>
                        <small>{avai.available}</small>
                    </Typography>

                </CardContent>
                <CardActions className='kkd'>
                    <Button onClick={openModal} variant="contained">Book Appointment</Button>
                </CardActions>
                <BookingModal date={date} avai={avai} modalIsOpen={modalIsOpen} subtitle={subtitle} closeModal={closeModal} afterOpenModal={afterOpenModal} openModal={openModal}></BookingModal>
            </Card>
        </div>
    );
};

export default AvailableTimeCustom;