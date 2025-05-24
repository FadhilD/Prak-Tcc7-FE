// import UserList from "./components/NoteList";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddUser from "./components/AddNote";
// import Edit from "./components/Edit";
// //tambah
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// //tambah

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         //tambah
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         //tambah
//         {/* <Route path="/" element={<UserList/>}/> */}
//         <Route path="add" element={<AddUser/>}/>
//         <Route path="edit/:id" element={<Edit/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import UserList from "./components/NoteList";
// import AddUser from "./components/AddNote";
// import Edit from "./components/Edit";
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* tambah */}
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         {/* halaman notes */}
//         <Route path="/notes" element={<UserList />} />
//         <Route path="/add" element={<AddUser />} />
//         <Route path="/edit/:id" element={<Edit />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import Edit from "./components/Edit";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/add" element={<AddNote />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/notes" element={<NoteList />} />
    </Routes>
  );
}

export default App;

