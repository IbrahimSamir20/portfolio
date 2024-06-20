import "./ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animation from "../../../public/Animation - 1709418491180.json";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvoernaj");

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputBox">
        <input type="text" id="email" name="email" />
        <label htmlFor="email">Email Address :</label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="inputBo">
        <label htmlFor="message">Your Message :</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      {state.succeeded && (
        <>
          <p style={{ marginTop: "2rem" }}>Your message has been sent successfully 😊✔</p>
          <Lottie
            loop={false}
            style={{ width: "100px", height: "100px" }}
            animationData={animation}
          />
        </>
      )}
    </form>
  );
};

export default ContactForm;
