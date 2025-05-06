import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
      if (data.success) {
        alert("Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar el mensaje.");
    }
  };

  return (
    <div className="bg-black dark:bg-slate-100 text-white py-12 px-4 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* IZQUIERDA: Info contacto */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 dark:text-black">
            {t("contact.title")} <span className="text-red-800"> {t('contact.me')}</span>
          </h2>

          <div className="mb-4 flex items-center gap-3 dark:text-black">
            <MdEmail className="text-red-800 text-2xl" />
            <div>
              <h3 className="font-semibold text-2xl">{t("contact.email")}</h3>
              <p>matias.cruz0998@gmail.com</p>
            </div>
          </div>

          <div className="mb-6 flex items-center gap-3 dark:text-black">
            <IoLocationSharp className="text-red-800 text-2xl" />
            <div>
              <h3 className="font-semibold text-2xl">{t("contact.location")}</h3>
              <p>Santiago RM, Chile</p>
            </div>
          </div>
        </div>

        {/* DERECHA: Formulario */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all py-2 px-6 rounded-md w-fit"
            >
              {t("contact.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

