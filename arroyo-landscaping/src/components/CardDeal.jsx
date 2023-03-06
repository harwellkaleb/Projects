import styles, { layout } from "../style";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3h51822",
        "template_kidzl5v",
        form.current,
        "JergqtwcHkG9AMAx_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", name, email, phone, message);
    sendEmail(event);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    form.current.reset();
  };

  return (
    <section className="pt-40" id="contact">
      <div className="p-20 shadow-2xl "
        style={{
          paddingBottom: "5em",
          borderRadius: "80px",

          
          
        }}
      >
        <h2 className={`${styles.heading2} text-center mt-10 mb-10 `}>Contact Form</h2>
        <form className={`${styles.flex} flex-col flex justify-center items-center`}ref={form} >
          <div style={{ width: 'calc(80% - 1rem)'}} className="m-5">
            <label
              htmlFor="name"
              className={`${styles.label} block mb-2`}
              style={{ color: "#fff" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className={`${styles.input} w-full p-2`}
              style={{ borderRadius: "10px" }}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div style={{ width: 'calc(80% - 1rem)'}} className="m-5">
            <label
              htmlFor="email"
              className={`${styles.label} block mb-2`}
              style={{ color: "#fff" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className={`${styles.input} w-full p-2`}
              style={{ borderRadius: "10px" }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div style={{ width: 'calc(80% - 1rem)'}} className="m-5">
            <label
              htmlFor="phone"
              className={`${styles.label} block mb-2`}
              style={{ color: "#fff" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              className={`${styles.input} w-full p-2`}
              style={{ borderRadius: "10px" }}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div  style={{ width: 'calc(80% - 1rem)'}} className="m-5">
            <label
              htmlFor="message"
              className={`${styles.label} block mb-2`}
              style={{ color: "#fff" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${styles.input} w-full p-2 h-32`}
              style={{ borderRadius: "10px" }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`py-4 px-6 font-poppins flex items-center flex-col text-center justify-center font-medium text-[18px] text-primary mt-20 bg-blue-gradient rounded-[10px] outline-none`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>


    </section>
  );
};

export default ContactForm;
