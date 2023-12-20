import './App.css'
import Navigation from './components/Navigation/Navigation'
import AboutMe from './pages/AboutMePage/AboutMe'
import Footer from './pages/Footer/Footer'
import HelloPage from './pages/HelloPage/HelloPage'
import Prueba from './pages/Prueba/Prueba'

function App() {
  return (
    <div className='App'>
      <Navigation />

      <HelloPage />
      <AboutMe />

      <Footer />
    </div>
  )
}

export default App
