import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Pages/Shared/Navbar';
import Home from '../src/Pages/Home/Home';
import Services from '../src/Pages/Services/Services';
import Projects from '../src/Pages/Projects/Projects';
import Blog from '../src/Pages/Blog/Blog';
import About from '../src/Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetails from './Pages/Projects/ProjectDetails';
import Education from './Pages/About/Education';
import Skills from './Pages/About/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Pages/Shared/Footer';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='bg-neutral'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='projects/:projectId' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>

        <Route path='about' element={<About></About>}>
          <Route index element={<Education></Education>}></Route>
          <Route path="experience" element={<Skills></Skills>}></Route>
        </Route>

        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
