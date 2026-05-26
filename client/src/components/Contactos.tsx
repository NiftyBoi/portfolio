import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import Curriculum from './Curriculum';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="dark:bg-slate-100 text-white py-12 px-4 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

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

          <div className='flex ml-8'>
            <Curriculum />
          </div>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label htmlFor="contact-name" className="sr-only">{t("contact.placeholders.name")}</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t("contact.placeholders.name")}
                className="w-full bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="sr-only">{t("contact.placeholders.email")}</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t("contact.placeholders.email")}
                className="w-full bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">{t("contact.placeholders.message")}</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={t("contact.placeholders.message")}
                rows={5}
                className="w-full bg-zinc-800 text-white dark:border dark:border-red-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all py-2 px-6 rounded-md w-fit disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? '...' : t("contact.button")}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm mt-2" role="alert">
                ✓ Mensaje enviado correctamente.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2" role="alert">
                ✗ Hubo un problema al enviar el mensaje. Intenta de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
