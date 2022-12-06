import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ExtraSection from '../ExtraSection/ExtraSection';
import MakeAppointemnt from '../MakeAppointemnt/MakeAppointemnt';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
          <ExtraSection></ExtraSection>
          <MakeAppointemnt></MakeAppointemnt>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;