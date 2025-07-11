import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import HeaderMenu from './components/header-menu'
import RollToTop from './components/roll-to-top'
import Landing from './sections/landing'
import Products from './sections/products'

function App() {

  return (
    <div className="App">
      <RollToTop/>
      <Header/>
      <HeaderMenu/>
      <Landing/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
