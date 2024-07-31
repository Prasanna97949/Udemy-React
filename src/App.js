import Navbar from "./components/navbar";
import Categ from "./components/categ";
import Sale from "./components/Sale";
import Recom from "./components/Recom";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categ></Categ>
      <Sale></Sale>
      <Recom></Recom>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
