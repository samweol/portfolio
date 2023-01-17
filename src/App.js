import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Front from "./components/Front/index";
import Home from "./components/Home/Home";
import Library from "./components/Library";
import MessageBox from "./components/MessageBox";
import WirteMessage from "./components/MessageBox/WriteMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/front" element={<Front />}></Route>
        <Route path="/message" element={<MessageBox />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/message/write" element={<WirteMessage />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
