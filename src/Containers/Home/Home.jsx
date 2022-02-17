import "bootstrap/dist/css/bootstrap.css";
import FifthPart from "../../Components/FifthPart/FifthPart";
import FinalPart from "../../Components/FinalPart/FinalPart";
import FirstPart from "../../Components/FirstPart/FirstPart";
import FourthPart from "../../Components/FourthPart/FourthPart";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import SecondPart from "../../Components/SecondPart/SecondPart";
import SeventhPart from "../../Components/SeventhPart/SeventhPart";
import SixthPart from "../../Components/SixthPart/SixthPart";
import ThirdPart from "../../Components/ThirdPart/ThirdPart";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <SixthPart />
      <SeventhPart />
      <FinalPart />
    </>
  );
};

export default Home;
