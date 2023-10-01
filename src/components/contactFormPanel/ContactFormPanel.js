import { useState, useEffect, useRef, useReducer } from "react";

import { useMediaQuery } from "react-responsive";

import useDetailSpeller from "../../hooks/useDetailSpeller";

import emailjs from "emailjs-com";

import deskStyles from "./ContactFormPanel.module.css";
import phoneStyles from "./PhoneContactForm.module.css";

const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";

const templateId = "template_xhux42i";

const testTemplateId = "template_38pylf2";

const greeting =
  " Feel free to share as much, (or as little), information as you'd like here";

const initialPlaces = {
  nameSpot: 100,
  emailSpot: -100,
  phoneSpot: 100,
  contactInfo: 100,
};
const initialFormState = { name: "", email: "", message: "" };

const inputReducer = (state, action) => {
  if (action.type === "name") {
    return { ...state, name: action.name };
  } else if (action.type === "email") {
    return { ...state, email: action.email };
  } else if (action.type === "message") {
    return { ...state, message: action.message };
  } else {
    return initialFormState;
  }
};

const ContactFormPanel = () => {
  const [contactPanelPlace, setContactPanelPlace] = useState(100);
  const [inputPlaces, setInputPlaces] = useState(initialPlaces);

  const [foneNumber, setfoneNumber] = useState("");

  const [inputs, setInputDispatcher] = useReducer(
    inputReducer,
    initialFormState
  );

  const [emptySubmission, setEmptySubmission] = useState(false);
  const [headerText, setHeaderText] = useState(greeting);

  const buttonText = useDetailSpeller(emptySubmission, "Nice try...", "Submit");

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = !isMobile ? deskStyles : phoneStyles;

  useEffect(() => {
    setTimeout(() => {
      setContactPanelPlace(15);
    }, 50);

    setTimeout(() => {
      setInputPlaces({
        nameSpot: 0,
        emailSpot: 0,
        phoneSpot: 0,
        contactInfo: 100,
      });
    }, 300);

    setTimeout(() => {
      setInputPlaces({
        nameSpot: 0,
        emailSpot: 0,
        phoneSpot: 0,
        contactInfo: 0,
      });
    }, 500);
  }, []);

  const formatNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 13) {
      return;
    }

    if (
      (event.target.value.length === 3 || event.target.value.length === 7) &&
      !isNaN(event.nativeEvent.data)
    ) {
      setfoneNumber((previous) => event.target.value + "-");
    } else {
      setfoneNumber((previous) => event.target.value);
    }
  };

  const checkForDelete = (event) => {
    setEmptySubmission(false);
    if (
      event.code === "Backspace" &&
      foneNumber[foneNumber.length - 1] === "-"
    ) {
      setfoneNumber((previous) => previous.slice(0, -1));
    }
  };

  const submitInfo = () => {
    let contactInfo = {
      fullName: inputs.name,
      phoneNumber: foneNumber,
      emailAddress: inputs.email,
      message: inputs.message,
    };

    if (
      contactInfo.fullName.length === 0 &&
      contactInfo.phoneNumber.length === 0 &&
      contactInfo.emailAddress.length === 0 &&
      contactInfo.message.length === 0
    ) {
      setEmptySubmission(true);
      return;
    }

    const testContact = {
      toEmail: "chris@eriephil.com",
      message: "CN, if you actually get this, it means I can email from a button on this app",
    };

    // emailjs.send(serviceId, templateId, contactInfo, userId);
    emailjs.send(serviceId, testTemplateId, testContact, userId);

    setfoneNumber("");
    setInputDispatcher({ type: "reset" });
    setHeaderText("Thank you for reaching out!");
  };

  return (
    <div
      className={styles.contactBox}
      style={{ transform: `translateY(${contactPanelPlace}vh)` }}
    >
      <div className={styles.contactBoxHeader}>
        <h2 className={styles.h2}>{headerText}</h2>
      </div>

      <div className={styles.inputsBox}>
        <input
          className={`${styles.input} ${styles.nameInput}`}
          placeholder={"Name"}
          style={{ transform: `translateX(${inputPlaces.nameSpot}vw)` }}
          onChange={(event) => {
            setInputDispatcher({ type: "name", name: event.target.value });
            setEmptySubmission(false);
          }}
          value={inputs.name}
        ></input>
        <input
          className={`${styles.input} ${styles.emailInput}`}
          placeholder={"Email"}
          style={{ transform: `translateX(${inputPlaces.emailSpot}vw)` }}
          onChange={(event) => {
            setInputDispatcher({ type: "email", email: event.target.value });
            setEmptySubmission(false);
          }}
          value={inputs.email}
        ></input>
        <input
          className={`${styles.input} ${styles.phoneInput}`}
          placeholder={"Phone Number"}
          style={{ transform: `translateX(${inputPlaces.phoneSpot}vw)` }}
          onChange={formatNumber}
          onKeyDown={checkForDelete}
          value={foneNumber}
        ></input>
      </div>

      <textarea
        className={styles.messageInput}
        placeholder="leave me a message ..."
        onChange={(event) => {
          setInputDispatcher({ type: "message", message: event.target.value });
          setEmptySubmission(false);
        }}
        value={inputs.message}
      ></textarea>

      <button className={styles.submitButton} onClick={submitInfo}>
        {buttonText}
      </button>

      <div
        className={styles.myContactInfo}
        style={{ transform: `translateY(${inputPlaces.contactInfo}vh)` }}
      >
        <h2>Or simply write me at...</h2>
        <h1 className={styles.myEmail}>kenjsoftware@gmail.com</h1>
      </div>
    </div>
  );
};

export default ContactFormPanel;
