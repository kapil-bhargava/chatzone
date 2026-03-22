import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/Joinroom";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createroom" element={<CreateRoom />} />
      <Route path="/joinroom" element={<JoinRoom />} />
      <Route path="/chat/:roomId" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
