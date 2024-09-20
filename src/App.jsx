import './App.css';
import { Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navigation/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import Symposia from "./components/symposia/Symposia.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Team from "./components/team/Team.jsx";
import NotFound from "./components/notfound/NotFound.jsx";

function App() {

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Symposia" element={<Symposia/>}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Team" element={<Team/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default App
