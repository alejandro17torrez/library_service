import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from './pages/addBook';
import Books from './pages/books';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/header';



function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>} />
          <Route path="add" element={<AddBook />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
