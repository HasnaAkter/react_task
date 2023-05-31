// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Documents/HomePage/Home';
import Header from './Documents/HomePage/Header';
import Footerr from './Documents/HomePage/Footerr';
import ProductPage from './Documents/ProductPage/ProductPage';




function App() {
  return (
    <div className="App">



      <BrowserRouter>
      <Header></Header>
        <main>
          <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/Home" element={<Home/>}/>
            <Route path= "/ProductPage" element={<ProductPage/>}/>
          </Routes>
        </main>
        <Footerr></Footerr>
      </BrowserRouter>

    </div>
  );
}

export default App;
