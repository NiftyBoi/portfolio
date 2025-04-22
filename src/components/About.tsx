import React from 'react';
import image from '../assets/fat-luffy.gif';



function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto px-4 h-full'>
      <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left">
        <img src="https://c.tenor.com/4XYAgRvDR2QAAAAd/tenor.gif" alt="Luffy" className='h-auto rounded-xl shadow-xl'/>
      </div>

      {/* Aquí centramos verticalmente el texto con justify-center */}
      <div className="md:w-1/2 items-center justify-center h-full ">
        <h1 className="text-3xl md:text-5xl mb-6 text-[#A52A2A] font-bold font-poppins ">About me</h1>
        <p className='text-lg text-white  text-justify min-h-[5px] font-poppins'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis, 
          felis quam eu aliquam nullam sodales netus tristique egestas, 
          mauris mi feugiat sem torquent viverra cursus ridiculus. 
          Inceptos mus luctus mattis curabitur risus tristique augue purus sem condimentum donec fringilla, 
          parturient quam natoque leo morbi etiam convallis taciti quisque feugiat libero. 
          Bibendum non semper aliquet consequat vel magnis sollicitudin diam, 
          arcu quam pulvinar vivamus cum nisi sodales.
        </p>
      </div>
    </div>
  );
}

export default About;