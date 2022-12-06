import React from 'react';
import treatment from '../../../assets/images/treatment.png';
const ExtraSection = () => {
    return (
        <div className="hero mt-40">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment}className="lg:w-1/2 md:h-[576px] rounded-lg shadow-2xl" />
                <div className='lg:ml-28'>
                    <h1 className="  text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn 
                    btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;