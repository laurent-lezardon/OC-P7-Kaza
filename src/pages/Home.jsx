import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function Home() {
  return (
    <div className="home">
      <div className="main-container">
        <Header page="home" />
        <div className="banner">
          <p>Chez vous,partout et ailleurs</p>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
