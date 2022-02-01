import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Button, Input } from '@mui/material';
import { InputGroup } from 'react-bootstrap';
import './BookingModal.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#9a9a9'

  },
};
Modal.setAppElement('#root');
const BookingModal = ({ closeModal, afterOpenModal, modalIsOpen, avai, subtitle, date }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(avai.title)

  const onSubmit = data => {
    data.service = avai.title
    data.selectTime = date.toDateString()
    data.submitTime = new Date()
    fetch('http://localhost:4000/addappointment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)

    })
      .then(res => res.json())
      .then(result => {
        if(result){

          console.log('homba')
        }


      })
  
alert('Appointment Received by Badhon')
    closeModal()
  };
//   const alart = () => {
//     <Stack sx={{ width: '100%' }} spacing={2}>

//       <Alert severity="success">This is a success alert — check it out!</Alert>
//     </Stack>
//   }

// alart()

  /////////////////////////////////////




  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-center text-info' ref={(_subtitle) => (subtitle = _subtitle)}>{avai.title}</h2>
        <p className='text-center'>Your Appointment Received on {date.toDateString()}</p>

        <form className='cente' onSubmit={handleSubmit(onSubmit)}>
          <div className="cente">
            <Box

              sx={{
                width: 500,
                maxWidth: '100%',



              }}

            >

              <div className="mai text-center">
                <TextField fullWidth label="Your name" placeholder=' enter your namr' id="fullWidth" name='name' required {...register("name")} />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <div className="mai">
                <TextField type='email' fullWidth label="Email" placeholder='Enter Your email' id="fullWidth" name='email' required {...register("email")} />
              </div>

              <div className="mai">
                <TextField type='number' fullWidth label="Phone number" placeholder=' Your Phone number' id="fullWidth" name='number' required {...register("mobileNumber")} />
              </div>
              <div className="mai">

              </div>

            </Box>
            <div className="row">
              <div className="col-md-3">
                <div class="input-group mb-3">

                  <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon" required {...register("Gender")} >
                    <option selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                  </select>
                </div>
              </div>
              <div className="col-md-4 bbv">
                <TextField size="small" type='number' fullWidth label="Weight" placeholder=' Weight' id="fullWidth" name='Weight' required {...register("Weight")} />
              </div>
              <div className="col-md-3">
                <TextField size="small" type='number' fullWidth label="Age" placeholder=' Age' id="fullWidth" name='Weight' required {...register("Age")} />
              </div>
            </div>



            <div className="uto">
              <Button variant='contained' color='info' type="submit" >Submit</Button>
            </div>
          </div>

        </form>
      </Modal>
    </div>
  );
};

export default BookingModal;