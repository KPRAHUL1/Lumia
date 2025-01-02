import './App.css'
import Api from './Api/api'
// import HomePage from './RouteVariable/home'
import Carts from './carts-section/carts'
import Marquee from './Marquee/marquee'
import Nav from './nav-bor/header'
import Shop_section from './shop-info/shop-section'
import Slider from './swiper-slider/slider'
import ShoppingCart from './Shopping-Cart/Shopping-Cards'
import Look_image from './Our-Look/look-images'
import Our_Brands from './Our-brands/our-brands'
import Footer from './Footer-section/footer'
import Image_collection from './Shop-collection/image-collection'
import Shoessection from './Ourlook/shoes';
import People from './PeoplesSay/people';
import Bottomnav from './BottomNav/Bottomnav'
import HomePage from './RouteVariable/home'
// import StateVariable from './state'

function App() {
  return (
    <>
    {/* <StateVariable/> */}
    <Nav/> 
   <Slider/>  
     <Shop_section/>
    <Marquee/>
    <Carts/>
    <ShoppingCart/> 
    <Shoessection/>
    <Look_image/>
    <Our_Brands/>
    <People/>
    <Image_collection/>
    <Footer/> 
   <Bottomnav/>
   {/* <Api/> */}
   {/* <HomePage/> */}
    </> 
  )
}
export default App
