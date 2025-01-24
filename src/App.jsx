import './App.css'
import { createTheme,ThemeProvider } from '@mui/material'
import Home from './components/Home'
import About from './components/About'
import Item from './components/Item'
import BookingForm from './components/BookingForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Navbar from './components/NavBar'


function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 900,
        lg: 1320,
        xl: 1920, 
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
      <About/>
      <Item/>
      <BookingForm/>
      <Testimonials/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
