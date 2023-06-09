import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactPage.module.css";

export default function ContactPage() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false)

  const sendEmail = (e:any) => {
    e.preventDefault();
    setEmailSent(true)

    emailjs
      .sendForm(
        "service_gsg8osf",
        "template_v6dj69t",
        e.target,
        "r8xP1LzbLHEFUN7x4"
      )
      .then(
        (result:any) => {
          console.log(result.text);
        },
        (error:any) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className={styles.ContactPageContainer}>
      <h1>Contact</h1>
      {!emailSent && <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required={true}></input>
        <label>Email</label>
        <input type="email" name="email" required={true}></input>
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value={"Send"} className={styles.Submit}/>
      </form>}
      {emailSent && <div className={styles.SentMessageContainer}>Your message has been sent! I will try to get back to you within 48 hours. Thank you!</div>}
    </section>
  );
}
