// import "./CSS/contact.css";
// import earth from "./Images/Earth.gif";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   function sendemail(e) {
//     e.preventDefault();
//     emailjs.sendForm(
//       "service_cteg5xs",
//       "template_lu363if",
//       e.target,
//       "c-olo1zpFuMwrfi00"
//     );
//   }
//   return (
//     <div className="contact">
//       <h2>REACH ME</h2>
//       <div className="content">
//         <img src={earth} alt="Earth" />
//         <form action="" className="Form" onSubmit={sendemail}>
//           <input type="text" placeholder="Name" name="name" required />
//           <input type="email" placeholder="Email" name="email" required />
//           <textarea placeholder="Message" name="body" required></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./CSS/contact.css";
import earth from "./Images/Earth.gif";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cteg5xs",
        "template_lu363if",
        e.target,
        "c-olo1zpFuMwrfi00"
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }

  return (
    <div className="contact">
      <h2>REACH ME</h2>
      <div className="content">
        <img src={earth} alt="Earth" />
        <form action="" className="Form" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            name="body"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
