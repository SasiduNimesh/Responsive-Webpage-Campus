import React from 'react'
import './contact.css'
import megIcon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={megIcon} alt='' /></h3>
            <p></p>
            <ul>
                <li><img src={mail_icon} alt='' />example@gmail.com</li>
                <li><img src={phone_icon} alt='' />+94 753242355</li>
                <li><img src={location_icon} alt='' />No:08 , Jayawaththa Road , Colombo</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your Mobile Number' required/>
                <label>Write Your Message</label>
                <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn drak-btn'>Submit Now<img src={white_arrow} alt='' /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact