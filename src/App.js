import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Front from "./components/Front/index";
import Home from "./components/Home/Home";
import Message from "./components/MessageBox/Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/front" element={<Front />}></Route>
        <Route path="/message" element={<Message />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
