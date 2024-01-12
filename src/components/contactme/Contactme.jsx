import './contactme.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contactme = () => {

  const ref = useRef();
  const [error , setError] = useState(false);
  const [success , setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u1hllln', 'template_r9u5qp7', ref.current, '5yzl9utrUjMrASK92')
      .then((result) => {
          setSuccess(true);
      }, (error) => {
          setError(true);
      });
  };


  return (
    <div className="contact" >
        <div  className="textContainer">
        <h1 > Let's Work Together </h1>
        </div>
        <div className="formContainer">
        <form ref={ref}
        onSubmit={sendEmail}>
            <input type="text" required placeholder='Name' name='from_name' />
            <input type="email" required placeholder='Email' name='email'/>
            <textarea rows={8} placeholder='Message' name='message' />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
        </form>
        </div>
    </div>
  )
}

export default Contactme;