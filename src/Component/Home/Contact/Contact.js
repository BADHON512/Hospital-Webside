import React, { useState } from 'react';
import './Contact.css'
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const Contact = () => {
    const handleChange = (event) => {
        const [value, setValue] = useState

        setValue(event.target.value);
    };
    return (
        <div className='mar'>
            <div className=" zet dil text-center">

            </div>
            <div className=" d-flex justify-content-center">
                <div className="zet w-50">
                    <div className="text-center">
                        <h3 className='' style={{ color: '#3ada48', }}>CONTACT US</h3>
                        <h1 className='' style={{ color: 'black', }}>ALWAYS CONTACT WITH US</h1>
                    </div>
                    <br />
                    <Input type='text' className=' form-control' placeholder='Type your Email '></Input>

                    <div>
                        <br />
                        <Input type='text' className='form-control' placeholder='Subject'></Input>

                    </div>

                    <Box>
                        <br />
                        <TextField className='nnh'
                            id="outlined-multiline-flexible"
                            label="Type your Message"
                            multiline
                            maxRows={8}

                            onChange={handleChange}
                        />
                    </Box>
                    <br />
                    <div className="text-center">
                        <Button variant='contained' color='info'>SUBMIT</Button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Contact;