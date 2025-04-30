import React, { useState } from 'react';
import { MdEmail} from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="bg-black dark:bg-slate-100 text-white py-12 px-4 font-poppins">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
            {/* IZQUIERDA: Info contacto */}
            <div className="md:w-1/2 ">
            <h2 className="text-5xl font-bold mb-6 dark:text-black">
                Mi <span className="text-red-800">Contacto!</span>
            </h2>

            <div className="mb-4 flex items-center gap-3 dark:text-black">
                <MdEmail className="text-red-800 text-2xl"/>
                <div>
                <h3 className="font-semibold text-2xl">Mail</h3>
                <p>matias.cruz0998@gmail.com</p>
                </div>
            </div>

            <div className="mb-6 flex items-center gap-3 dark:text-black">
                <IoLocationSharp className="text-red-800 text-2xl"/>
                <div>
                <h3 className="font-semibold text-2xl">Location</h3>
                <p>Santiago RM, Chile</p>
                </div>
            </div>
            </div>

            {/* DERECHA: Formulario */}
            <div className="md:w-1/2">
            <form className="flex flex-col gap-4 ">
                <input type="text" placeholder="Name" className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-800" required/> 
                
                <input type="email" placeholder="Email" className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800" required/>
                
                <textarea placeholder="Message" rows={5} className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800" required/>
                
                <button type="submit" className="border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all py-2 px-6 rounded-md w-fit">
                Submit
                </button>
            </form>
            </div>
        </div>
    </div>

  );
};

export default ContactForm;

