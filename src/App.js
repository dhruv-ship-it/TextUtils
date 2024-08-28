import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {

  const router=createBrowserRouter([

    {
      path: "/",
      element: <>
      <Navbar title="TextUtils" aboutText="About"/>
      
      <div className="container mt-5">
      <TextForm heading="Enter Your Text To Analyze"/>
      </div>
      
      </>


    },

    {
      path: "/about",
      element: <>
      <Navbar title="TextUtils" aboutText="About"/>
      
      
      <About/>
      
      </>


    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
