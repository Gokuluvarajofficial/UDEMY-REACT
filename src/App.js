import navbar from "./components/Navbar";
import Categories from "./components/Categories"
import SaleImage from "./components/SaleImage";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import PopularSection from "./components/PopularSection";
import Footer from "./components/Footer";
function App(){
  return(
    <>
  <navbar></navbar>
  <Categories></Categories>
  <SaleImage></SaleImage>
  <Recommended></Recommended>
  <Topics></Topics>
  <PopularSection></PopularSection>
  <Footer></Footer>
  </>
  )
}
export default App;
