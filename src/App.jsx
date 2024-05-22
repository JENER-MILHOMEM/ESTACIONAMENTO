import Navbar from "./assets/navbar";
import Aside from "./assets/aside";
import Home from "./assets/home";
import Estacionar from "./assets/estacionar";
import NovoEstacionamento from "./assets/novoEstacionamento";
import User from "./assets/user";
import TabelaMensalista from "./assets/tabelaMensalista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className=" flex bg-slate-300">
          <Aside />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estacionar" element={<Estacionar />} />
            <Route path="/novoEstacionar" element={<NovoEstacionamento />} />
            <Route path="/user" element={<User />} />
            <Route path="/mensalista" element={<TabelaMensalista />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
