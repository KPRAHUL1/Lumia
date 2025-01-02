import { Searchsection } from "../Search/search";
import App from "./components/Drawer";
import Modal from "../modal";
import Wishlist from "../Wishlist/Wishlist";
import Orderlist from "../Order/Order";
import { Message } from "../Message/Message";
import { Equlizzer } from "../Equlizzer/Equlizer";
import SearchSmall from "../Search/components/SmallSearch";
import { BuyLumia } from "../PopoverMenu/Popover";
import { Menu } from "../PopoverMenu/MenPopover";
import { WomMen } from "../PopoverMenu/WomenPopover";
import { Catalog } from "../NavCatalog/Catalog";
import { Pages } from "../PagesNav/PagesNav";
import { HomeNav } from "../HomeNav/HomeNav";

import { Button, Tooltip } from "flowbite-react";
export default function Nav() {


  return (
  <><section className="sticky top-0 bg-white left-0 right-0 z-40">
        <div className='flex justify-around lg:flex gap-2 shadow content-center justify-items-center   bg-white'>
          <div className='  m-4  '>
          <Tooltip content="Lumia Theme" animation="duration-500" placement="right"> <a href="/"><img src="logo.svg" alt="" className='w-24 md:w-28 lg:w-full' /></a></Tooltip>
          </div>
          <div className='grid grid-cols-4 gap-4 m-5 justify-evenly content-evenly block lg:hidden'>
          <Message/>
          <a href="/"><img src="phone-svgrepo-com.svg" alt="" className="w-6"/></a>
          <SearchSmall/>
          <button><App/></button>
          </div>
          <div className="xl:flex hidden lg:block   md:space-x-5 md:content-center  xl:text-md items-center gap-5">
            <HomeNav/>
            <a href="/settings" className="">Setting</a>
            <Pages/>
            <Catalog/>
            <WomMen/>
            <Menu/>
            <BuyLumia/>
          </div>
          <div className=" flex-row lg:flex lg:items-center justify-center hidden lg:block  md:space-x-5 md:content-center ">
           <Tooltip content="English, USD $" placement="bottom"><Equlizzer/></Tooltip>
           <Tooltip content="Tooltip content" ><Message/> </Tooltip>
           <Tooltip content="Search in Store" placement="bottom"> <Searchsection/>  </Tooltip>
           <Tooltip content="Login" placement="bottom"><Modal/> </Tooltip>
           <Tooltip content="Whishlist" placement="bottom"><Wishlist/> </Tooltip>
           <Tooltip content="Shopping cart" placement="bottom"><Orderlist/> </Tooltip>
          </div>
        </div>
      </section>
      
       
    </>
  )
}
