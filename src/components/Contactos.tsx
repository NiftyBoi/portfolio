import React, { useState } from 'react';
import { MdEmail} from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="bg-black text-white py-12 px-4 font-poppins">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
            {/* IZQUIERDA: Info contacto */}
            <div className="md:w-1/2 ">
            <h2 className="text-5xl font-bold mb-6">
                Mi <span className="text-[#A52A2A]">Contacto!</span>
            </h2>

            <div className="mb-4 flex items-center gap-3">
                <MdEmail className="text-[#A52A2A] text-2xl"/>
                <div>
                <h3 className="font-semibold text-2xl">Mail</h3>
                <p>matias.cruz0998@gmail.com</p>
                </div>
            </div>

            <div className="mb-6 flex items-center gap-3">
                <IoLocationSharp className="text-[#A52A2A] text-2xl"/>
                <div>
                <h3 className="font-semibold text-2xl">Location</h3>
                <p>Santiago RM, Chile</p>
                </div>
            </div>
            </div>

            {/* DERECHA: Formulario */}
            <div className="md:w-1/2">
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="bg-zinc-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A52A2A]"/> 
                
                <input type="email" placeholder="Email" className="bg-zinc-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A52A2A]"/>
                
                <textarea placeholder="Message" rows={5} className="bg-zinc-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A52A2A]"/>
                
                <button type="submit" className="border border-[#A52A2A] text-[#A52A2A] hover:bg-[#A52A2A] hover:text-white transition-all py-2 px-6 rounded-md w-fit">
                Submit
                </button>
            </form>
            </div>
        </div>
    </div>

  );
};

export default ContactForm;

