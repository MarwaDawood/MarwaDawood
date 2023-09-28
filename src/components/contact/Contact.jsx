import { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () =>  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62l66w3', 'template_rgem5ly', form.current, 'fgrOukY4YYEoV6gOe')
     .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.log('Email send failed:', error.text);
        }
      );

    e.target.reset()
    
  };


  return (
    <section id="contact" className="relative">
       
       <div className="mt-5 font-display text-5xl flex justify-center">
       <h1> CONTA<span class="decoration-solid decoration-mainblue underline">CT ME</span> </h1>
       </div>

         
      <div className="w-full flex justify-center mt-12 pb-10">
      <form ref={form} onSubmit={sendEmail} clasName="flex flex-col gap-4 w-3/4"> 
      <input type='text' name='name' placeholder='Your Full Name' required  className="w-full p-6 rounded-xl bg-white border-2 border-mainblue resize-none my-5 transition-transform transform hover:scale-105"/> 
      <input type='email' name='email' placeholder='Your Email' required className="w-full p-6 rounded-xl bg-white border-4 border-mainblue resize-none my-5 transition-transform transform hover:scale-105"/>
      <textarea name='message' placeholder='Your Message' rows='7' required className="w-full p-6 rounded-xl bg-white border-8 border-mainblue resize-none my-5 transition-transform transform hover:scale-105"></textarea>
      <button type='submit' className="inline-block px-10 py-2 text-2xl font-normal text-display cursor-pointer text-black bg-white border-[1.5px] border-mainblue rounded-md transition-transform transform hover:scale-105 shadow-slate-700 drop-shadow-lg ml-[38%]"> Send Message </button>
      </form>
      </div>
      </section>
  )
}

export default Contact;

