import "bootstrap/dist/css/bootstrap.css";
import FirstPart from "../../Components/FirstPart/FirstPart";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import SecondPart from "../../Components/SecondPart/SecondPart";
import ThirdPart from "../../Components/ThirdPart/ThirdPart";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <hr style={{ color: "white" }} />
      <FirstPart />
      <hr style={{ color: "white" }} />
      <SecondPart />
      <hr style={{ color: "white" }} />
      <ThirdPart />
      <hr style={{ color: "white" }} />
    </>
  );
};

export default Home;
