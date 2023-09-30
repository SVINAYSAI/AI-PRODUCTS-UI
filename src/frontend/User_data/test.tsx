import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; // Importing from 'emailjs-com'

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null); // Specify the type for form ref

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result: EmailJSResponseStatus = await emailjs.sendForm(
          'service_5m4mgbu',
          'template_uo4raep',
          form.current,
          '-vDEpNjpHom5GEqan'
        );

        console.log(result.text);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}; 
export default ContactUs;