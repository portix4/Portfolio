import './App.css'
import Navigation from './components/Navigation/Navigation'
import AboutMe from './pages/AboutMePage/AboutMe'
import Footer from './pages/Footer/Footer'
import HelloPage from './pages/HelloPage/HelloPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

function App() {
  return (
    <div className='App'>
      <Navigation />

      <HelloPage />
      <AboutMe />
      <ProjectsPage />

      <Footer />
    </div>
  )
}

export default App
