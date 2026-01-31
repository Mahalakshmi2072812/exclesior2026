 import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Rules from "./components/Rules";
import Events from "./components/Events";
import ApplicationForm from "./components/ApplicationForm";
import Contact from "./components/Contact";
import FloatingIcon from "./components/FloatingIcon";
import UploadPaper from "./components/UploadPaper";
import Prelims from "./components/prelims";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Particle></Particle>
      <FloatingIcon/>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/rules" element={<Rules></Rules>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route
          path="/application"
          element={<ApplicationForm></ApplicationForm>}
        >   
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/uploadPaper" element={<UploadPaper/>}/>
        {/* Hidden route */}
        <Route path="/prelims-2k26" element={<Prelims />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;