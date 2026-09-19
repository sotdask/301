import React from "react";
import Hero from "../components/contact/Hero";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";

function Contact() {
  return (
    <main id="main-content">
      <Hero />
      <ContactInfo />
      <Form/>
    </main>
  );
}

export default Contact;
