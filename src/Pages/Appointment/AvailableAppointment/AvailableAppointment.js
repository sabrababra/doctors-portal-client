import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({selectDate}) => {
    //const [data,setData]=useState([]);
    const [treatment,setTreatment]=useState(null);
    const date=format(selectDate,'PP');
    
    const {data:data=[]}=useQuery({
        queryKey:['appointmentOptions',date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    })
    

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectDate,'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
                {
                    data.map(option=><AppointmentOptions
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
           { 
           treatment &&
           <BookingModal
           setTreatment={setTreatment}
            treatment={treatment}
            selectDate={selectDate}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;