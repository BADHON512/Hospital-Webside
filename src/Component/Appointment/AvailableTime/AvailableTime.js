import React from 'react';
import AvailableTimeCustom from '../AvailableTimeCustom/AvailableTimeCustom';
import './AvailableTime.css'


const AvailableTime = ({ date }) => {
    console.log(date)
    const time = [
        {
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            available: ' 9 SPACES AVAILABLE',
            id: 1

        },
        {
            title: 'Cosmetic Dentistry',
            time: '7:00 AM - 10:00 AM',
            available: ' 4 SPACES AVAILABLE',
            id: 2
        },
        {
            title: 'Teeth Cleaning',
            time: '4:00 AM - 5:00 AM',
            available: ' 5 SPACES AVAILABLE',
            id: 3
        },
        {
            title: 'Cavity Protection',
            time: '11:00 AM - 12:00 AM',
            available: ' 2 SPACES AVAILABLE',
            id: 4
        },
        {
            title: 'Teeth Orthodontics',
            time: '6:00 AM - 7:00 AM',
            available: ' 15 SPACES AVAILABLE',
            id: 5
        },
        {
            title: 'Dental checking',
            time: '8:00 AM - 9:00 AM',
            available: ' 1 SPACES AVAILABLE',
            id: 6
        },
    ]
    return (
        <div className='available'>
            <div>
                <h1 className='text-center' style={{ color: '#25df34' }}>Available Appointments on {date.toDateString()}</h1>

            </div>
            <div className="hlfd bbl d-flex justify-content-center">
                <div className="  w-75 row">
                    {
                        time.map(data => <AvailableTimeCustom key={data.id} avai={data} date={date}></AvailableTimeCustom>)

                    }
                </div>
            </div>

        </div>
    );
};

export default AvailableTime;