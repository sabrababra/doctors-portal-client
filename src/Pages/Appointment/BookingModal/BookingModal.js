import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ treatment, selectDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectDate, 'PP');
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const from = event.target;
        const slot = from.slot.value;
        const pname = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: pname,
            slot,
            email,
            phone

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged
                ) {
                    setTreatment(null);
                    toast.success('Booking confirm');
                }

            })
        //console.log(booking);

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-10' >
                        <input type="text"
                            value={date}
                            disabled
                            className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot} >{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Your name" className="input w-full input-bordered" />
                        <input name='phone' type="number" placeholder="your phone number" className="input w-full input-bordered" />
                        <input name='email' type="email"
                            defaultValue={user?.email} disabled
                            placeholder="your email" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;