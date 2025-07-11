import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import HeaderMenu from './components/header-menu'
import RollToTop from './components/roll-to-top'
import ProductsPage from './sections/products-page'

function Products() {

  return (
    <div className="App">
      <RollToTop/>
      <Header/>
      <HeaderMenu/>
      <ProductsPage/>
      <Footer/>
    </div>
  )
}

export default Products;
