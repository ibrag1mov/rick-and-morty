import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Character } from "./pages/Character";
import { Episode } from "./pages/Episode";
import { Location } from "./pages/Location";



function App() {
  return (
    <>
      <Header/>

      <div className="container py-5"> 
        <Routes>
          <Route path="/" element={<Character/>}/>
          <Route path="location" element={<Location/>}/>
          <Route path="episode" element={<Episode/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
