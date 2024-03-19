import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {Form} from "./components/Form";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#00df9a',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});
function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;