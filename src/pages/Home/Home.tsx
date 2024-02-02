import "./Home.css";
import Header from "../../components/Header/Header.tsx";
import Seacher from "../../components/Seacher/Seacher.tsx";
import { Image } from "react-bootstrap";
import bgimage from "../../assets/background.png";

const Home = () => {
  return (
    <>
      <Header />
      <Seacher />
      <Image className="img-back" src={bgimage} />

    </>
  );
};

export default Home;
