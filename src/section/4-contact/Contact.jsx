import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactAnimation from "../../components/ConactAnimation/ConactAnimation";
import ContactHead from "../../components/ContactHead/ContactHead";
const Contact = () => {
  return (
    <div className= "contact">
      <ContactHead />
      <div className="boxContact">
        <ContactForm />
        <ContactAnimation />
      </div>
    </div>
  );
};

export default Contact;
