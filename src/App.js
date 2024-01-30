import "./Reset.css";
import "./Variables.css";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Playlist from "./components/Playlist/Playlist";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Sidebar/>
      <main className="main-container">
        <Header></Header>
        <Playlist>
          

        </Playlist>
      </main>
      <Footer/>
    </>
  );
}

export default App;
