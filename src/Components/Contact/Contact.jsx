import React, { useState } from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import phone from '../../assets/phone.png'
import address from '../../assets/address.png'
import email from '../../assets/email.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "22ce2717-fbed-4be1-bdd5-9b5106407928");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    event.target.reset();
  }

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact 
          information below. Our virtual agent is available 24/7. Your feedback,
          questions, and suggestions are important to us as we strive to provide exceptional
          service to our valuable customers.
        </p>
        <ul>
          <li><img src={email} alt="" />Contact@uno.com</li>
          <li><img src={phone} alt="" />+1 123-456-7890</li>
          <li><img src={address} alt="" />77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>First Name</label>
          <input type="text" name='fst_name' placeholder='First Name' required/>
          <label>Last Name</label>
          <input type="text" name='lst_name' placeholder='Last Name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Mobile Number' required/>
          <label>Write Your Messages Here</label>
          <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact