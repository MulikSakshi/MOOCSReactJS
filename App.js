//import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  ///app logic code
  return (
    <>
      <Navbar name="Demo" item1="Home" item2="About Us" item3="Projects"></Navbar>
      <Form/>
      
    </>
  );
}

export default App;