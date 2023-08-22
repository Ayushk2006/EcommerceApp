 import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_htls2ag', 'template_1sqyjso', form.current, 'Pz-EViRp3HM01xdFR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="p-4">
        <form ref={form} className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white'  onSubmit={sendEmail}>
         <label htmlFor='name'>Name</label>
        <input type={"text"}  name="user_name" className='bg-slate-200 p-1 my-1' />


        <label>Email</label>
        <input type={"email"}  name="user_email"  className='bg-slate-200 p-1 my-1' />
         
        
        <label htmlFor='message'>Message</label>
        <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none' name="message"  ></textarea>

        <input className='bg-blue-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow' type="submit" value="Send" />
      </form>
    </div>
  )
}
