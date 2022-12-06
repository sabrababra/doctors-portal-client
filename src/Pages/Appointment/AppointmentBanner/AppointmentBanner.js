import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png';
const AppointmentBanner = ({selectDate,SetSelectDate}) => {
   
    return (
        <header className='my-6'
        style={{background:`url(${bg})`}}
        >
            <div className="hero ">
                <div className=" lg:w-1/2 hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className=" rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                    <DayPicker
                         mode='single'
                         selected={selectDate}
                         onSelect={SetSelectDate}       
                
                    />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;