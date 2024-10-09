/* eslint-disable react/react-in-jsx-scope */
import "../index.scss";
import Navbar from "../components/navbar/Navbar";
import Carousels from "../components/carousels/carousels";
import Cardmovie from "../components/cardmovie/Cardmovie";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <Cardmovie />
      <Footer />
    </>
  );
};

export default Home;
