import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";
import ChatbotComp from "../../Components/Chatbot/Chatbot";
import FifthPart from "../../Components/FifthPart/FifthPart";
import FinalPart from "../../Components/FinalPart/FinalPart";
import FirstPart from "../../Components/FirstPart/FirstPart";
import Footer from "../../Components/Footer/Footer";
import FourthPart from "../../Components/FourthPart/FourthPart";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import SecondPart from "../../Components/SecondPart/SecondPart";
import SeventhPart from "../../Components/SeventhPart/SeventhPart";
import SixthPart from "../../Components/SixthPart/SixthPart";
import ThirdPart from "../../Components/ThirdPart/ThirdPart";
import "./Home.css";

const Home = () => {
  const [chatbotState, setChatbotState] = useState(1);

  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setChatbotState(1);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <>
      <Header />
      {chatbotState !== 1 ? (
        <div className="chatbot-div" ref={wrapperRef}>
          <ChatbotComp />
        </div>
      ) : (
        <div className="chatbtn-div">
          <Button
            className="chatbtn"
            size="lg"
            onClick={() => {
              setChatbotState(0);
            }}
          >
            <span style={{ paddingRight: "10px" }}>
              <BiHelpCircle />
            </span>
            Help
          </Button>
        </div>
      )}
      <Hero />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <SixthPart />
      <SeventhPart />
      <FinalPart />
      <Footer />
    </>
  );
};

export default Home;
