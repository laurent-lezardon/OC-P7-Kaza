import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="banner">
        <p>Chez vous,partout et ailleurs</p>
      </div>
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
