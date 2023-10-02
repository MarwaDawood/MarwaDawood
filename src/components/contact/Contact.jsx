import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ylpfkdg', 'template_m6ofeqa', form.current, 'fgrOukY4YYEoV6gOe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contact">
       
       <div className="mt-10 font-display lg:text-5xl md:text-3xl text-2xl text-center">
       <h1 className="lines"> CONTA<span class="lines decoration-solid decoration-4 lg:decoration-8 decoration-[#82A047] underline-offset-8 underline">CT ME</span> </h1>
       </div>

         
      <div className="lg:mt-10 mt-4 pb-10 md:m-10 m-5">
      <form ref={form} onSubmit={sendEmail}> 

      <input type='text' name='name' placeholder='Your Full Name' required  className="contactme border-solid border-[4px] border-maingreen w-full lg:p-6 p-3 rounded-xl bg-white resize-none lg:my-5 my-3 transition-transform transform hover:scale-105"/> 

      <input type='email' name='email' placeholder='Your Email' required className="contactme w-full lg:p-6 p-3 rounded-xl resize-none lg:my-5 my-3 transition-transform transform hover:scale-105"/>

      <textarea name='message' placeholder='Your Message' rows='7' required className="contactme w-full lg:p-6 p-3 rounded-xl bg-white resize-y lg:my-5 my-3 transition-transform transform hover:scale-105 lg:mb-10"></textarea>


      <button type='submit' className="sendme shadow-md shadow-black inline-block lg:px-10 px-5 py-2 text-lg lg:text-2xl font-medium text-display cursor-pointer text-black bg-white border-2 border-[#82A047] rounded-md transition-transform transform hover:scale-105 ml-[28%] md:ml-[38%]"> Send Message </button>
      </form>
      </div>
      </section>
  )

  }

export default Contact;


