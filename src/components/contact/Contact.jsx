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
    <section id="contact">
       
       <div className="mt-10 font-display lg:text-5xl md:text-3xl text-xl text-center">
       <h1 className="lines"> CONTA<span class="lines decoration-solid decoration-mainyellow underline">CT ME</span> </h1>
       </div>

         
      <div className="lg:mt-12 mt-4 pb-10 md:m-10 m-5">
      <form ref={form} onSubmit={sendEmail}> 
      <input type='text' name='name' placeholder='Your Full Name' required  className="contactme w-full lg:p-6 p-3 rounded-xl bg-white border-2 border-mainyellow resize-none lg:my-5 my-3 transition-transform transform hover:scale-105"/> 

      <input type='email' name='email' placeholder='Your Email' required className="contactme w-full lg:p-6 p-3 rounded-xl bg-white border-4 border-mainyellow resize-none lg:my-5 my-3 transition-transform transform hover:scale-105"/>

      <textarea name='message' placeholder='Your Message' rows='7' required className="contactme w-full lg:p-6 p-3 rounded-xl bg-white border-8 border-mainyellow resize-y lg:my-5 my-3 transition-transform transform hover:scale-105 lg:mb-10"></textarea>


      <button type='submit' className="shadow-right-bottom inline-block lg:px-10 px-5 py-2 text-lg lg:text-2xl font-medium text-display cursor-pointer text-black bg-white border-2 border-black rounded-md transition-transform transform hover:scale-105 ml-[28%] md:ml-[38%]"> Send Message </button>
      </form>
      </div>
      </section>
  )
}

export default Contact;



