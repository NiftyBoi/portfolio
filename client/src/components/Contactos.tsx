// Importa React y useState para manejar el estado local
import React, { useState } from 'react';

// Iconos para correo y ubicación
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

// Hook para traducción de textos
import { useTranslation } from 'react-i18next';

// Componente que probablemente muestra o descarga tu currículum
import Curriculum from './Curriculum';

// Componente principal del formulario de contacto
const ContactForm = () => {
  // Traducción de textos
  const { t } = useTranslation();

  // Estado del formulario: guarda nombre, email y mensaje
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    try {
      // Envía los datos del formulario a una API local
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      // Muestra una alerta según el resultado
      if (data.success) {
        alert("Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar el mensaje.");
    }
  };

  return (
    <div className=" dark:bg-slate-100 text-white py-12 px-4 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* IZQUIERDA: Información de contacto */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 dark:text-black">
            {t("contact.title")} <span className="text-red-800"> {t('contact.me')}</span>
          </h2>

          {/* Sección de correo electrónico */}
          <div className="mb-4 flex items-center gap-3 dark:text-black">
            <MdEmail className="text-red-800 text-2xl" />
            <div>
              <h3 className="font-semibold text-2xl">{t("contact.email")}</h3>
              <p>matias.cruz0998@gmail.com</p>
            </div>
          </div>

          {/* Sección de ubicación */}
          <div className="mb-6 flex items-center gap-3 dark:text-black">
            <IoLocationSharp className="text-red-800 text-2xl" />
            <div>
              <h3 className="font-semibold text-2xl">{t("contact.location")}</h3>
              <p>Santiago RM, Chile</p>
            </div>
          </div>

          {/* Botón o componente para ver/descargar el currículum */}
          <div className='flex ml-8'>
            <Curriculum />
          </div>
        </div>

        {/* DERECHA: Formulario de contacto */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Campo de nombre */}
            <input
              type="text"
              name="name"
              placeholder={t("contact.placeholders.name")}
              className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Campo de email */}
            <input
              type="email"
              name="email"
              placeholder={t("contact.placeholders.email")}
              className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Campo de mensaje */}
            <textarea
              name="message"
              placeholder={t("contact.placeholders.message")}
              rows={5}
              className="bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Botón de envío */}
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

// Exporta el componente para poder usarlo en otros archivos
export default ContactForm;

