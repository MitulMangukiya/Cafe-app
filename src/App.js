import React from 'react';
import './App.css'
import abouttopbg from './images/footerbg.png'
import menubg from './images/menu/menubg.png'
import servicebg from './images/services/servicesbg.png'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUspage from './Component/AboutUspage';
import Menupage from './Component/Menupage';
import Servicepage from './Component/Servicepage';
import ContactUspage from './Component/ContactUspage';
import Gallerypage from './Component/Gallerypage';
import Blogspage from './Component/Blogspage';
import BlogDetailspage from './Component/BlogDetailspage';

  function App() {

    const data = [
      {
        title : "About Us",
        description : "Home / About Us",
        bg : abouttopbg
      },
      {
        title : "Our Menu",
        description : "Home / Menu",
        bg : menubg
      },
      {
        title : "Our Services",
        description : "Home / Services",
        bg : servicebg
      },
      {
        title : "Contact Us",
        description : "Home / Contact Us",
        bg : abouttopbg
      },
      {
        title : "Take A Tour",
        description : "Home / Gallery",
        bg : abouttopbg
      },
      {
        title : "Our Blogs",
        description : "Home / Blogs",
        bg : abouttopbg
      },
      {
        title : "Blog Details",
        description : "Home / Blogs / Blog Details",
        bg : abouttopbg
      }
    ]

    return (
      <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUspage title={`${data[0].title}`} description={`${data[0].description}`} bg={`${data[0].bg}`}/>} />
          <Route path="/Menu" element={<Menupage title={`${data[1].title}`} description={`${data[1].description}`} bg={`${data[1].bg}`}/>} />
          <Route path="/Service" element={<Servicepage title={`${data[2].title}`} description={`${data[2].description}`} bg={`${data[2].bg}`}/>} />
          <Route path="/ContactUs" element={<ContactUspage title={`${data[3].title}`} description={`${data[3].description}`} bg={`${data[3].bg}`}/>} />
          <Route path="/Gallery" element={<Gallerypage title={`${data[4].title}`} description={`${data[4].description}`} bg={`${data[4].bg}`}/>} />
          <Route path="/Blogs" element={<Blogspage title={`${data[5].title}`} description={`${data[5].description}`} bg={`${data[5].bg}`}/>} />
          <Route path="/Blog/BlogDetails/:id" element={<BlogDetailspage title={`${data[6].title}`} description={`${data[6].description}`} bg={`${data[6].bg}`}/>} />
        </Routes>

        <Footer />
      </Router>
      </>
    );
  }

  export default App;
