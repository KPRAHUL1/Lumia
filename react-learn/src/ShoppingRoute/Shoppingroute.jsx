import { Dropdown } from "flowbite-react";
import Footer from "../Footer-section/footer";
import Nav from "../nav-bor/header";
import { Link } from "react-router-dom";
import ShoppingCart from "../Shopping-Cart/Shopping-Cards";
import People from "../PeoplesSay/people";
export default function ShoppingRoute(){
   return(
        <>
        <section>
            <Nav/>
            <div className="grid lg:grid lg:grid-cols-2  lg:mx-40 lg:mt-40">
                <div className="space-y-5"> 
                    <div className=""><img src="bigimage1.webp" alt="" className="rounded-xl"/></div>
                    <div>
                        <div className="text-center flex items-center justify-center"><hr /><h1 className="text-xl font-semibold">Guaranteed Safe Checkout</h1><hr /></div>
                        <div className="gird grid-cols-1 text-center p-5 space-y-4 xl:flex xl:justify-evenly">
       <div className="text-white xl:pt-5 flex flex-col">
       
   
        <div className=" flex space-x-3 justify-center text-black">
        <i className="fa-brands fa-instagram text-4xl"></i>
        <i className="fa-brands fa-facebook text-3xl"></i>
        <i className="fa-brands fa-tiktok text-3xl"></i>
        <i className="fa-brands fa-x-twitter text-3xl"></i>
        <i className="fa-brands fa-youtube text-3xl"></i>
        </div>
        <div className=" flex space-x-3 justify-center">
        <img src="visa.png" alt="" className="w-10 h-6 "/>
        <img src="paypal.png" alt="" className="w-10 h-6" />
        <img src="mastercard.png" alt=""className="w-10 h-6"/>
        <img src="google-pay.webp" alt="" className="w-10 h-6"/>
        <img src="american-express.png" alt="" className="w-10 h-6"/>

        </div>     </div> 
        </div>
                        </div>

                </div>
             <div className=" overflow-auto flex flex-col gap-5 touch-pan-y p-5"> 
                  
                    <div className="flex flex-row gap-2">
                  <div>
                  <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    </div> 
                    <Link to="#" className="text-blue-500">2 reviews</Link> 
                    </div>
                    <div className="text-sm flex font-semibold gap-2">
                        <h1>Availability :</h1>
                        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className="text-green-400">Hurry Only left <span className="text-black text-semibold">of Khaki / S in stock!</span></span>}> </Dropdown>
                    </div>
                
               <div className="flex flex-col ">
               <h1 className="text-2xl font-bold pb-3">Loose padded jacket</h1>
               <h1 className="text-2xl font-semibold ">$ 64</h1>
               <p className="text-sm">Tax included</p>
                </div> 
            
            <div className="flex flex-col  gap-3">
                <h1 className="font-semibold ">
                Short description :
                </h1>
                <p className="font-thin ">A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has 
                    sleeves and fastens in the front or slightly on the side. A jacket is generally lighter and tighter-fitting.</p>

                    <h1 className="font-semibold ">Product Type: <span className="font-light ">Jacket</span> </h1>
                    <h1 className="font-semibold ">SKU: <span className="font-light ">W57015KH2</span> </h1>
                    <h1 className="font-semibold ">Tags: <span className="font-light ">collection-coats-jackets , new , women</span> </h1>
                    <h1 className="font-semibold ">Weight: <span className="font-light ">0.8 kg</span> </h1>
                    <h1 className="font-semibold ">Vendor: <span className="font-light ">Colvin Klein</span></h1>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold ">Color: <span className="font-light ">Khaki</span></h1>
                <div className="md:flex gap-4 items-center  flex flex-row flwx-wrap">
                    <div className="w-16 h-16 boeder shadow-xl   bg-lime-900 rounded-lg"></div>
                    <div className="w-16 h-16 boeder shadow-xl bg-orange-800 rounded-lg"></div>
                    <div className="w-16 h-16 boeder shadow-xl bg-amber-400 rounded-lg"></div>
                    <div className="w-16 h-16 boeder shadow-xl bg-cyan-600 rounded-lg"></div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
               <label htmlFor="">
             <div className="border-b "><textarea name="" placeholder="Order speciel instruction"id="" className="w-full  outline-none border-none pt-2 focus:outline-none"/></div>  
               <div className="flex flex-col gap-3">
               <div className="flex items-center  gap-3"><input type="radio" name="" id="" /><h1>One-time purchase</h1></div> 
               <div className="flex items-center  gap-3"><input type="radio" name="" id="" /><h1>Subscribe & save</h1></div> 
               </div>
               </label> 
              <div className="flex gap-3"><button className="p-3 px-5 bg-blue-600 text-white font-mediumbold rounded-full border">ADD TO CART</button> <button className="p-3 px-5 rounded-full bg-yellow-300 border">BUY IT NOW</button>
               <img src="public\heart-like-svgrepo-com.svg" alt="" className="w-7"/></div> 
             <div className="flex gap-3 items-center"> <input type="checkbox" name="" id="" /><a href=""> agree to the store policies</a></div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-sm">Pickup available at Neuer Weg 94, 12th Floor, 45711 Datteln, Germany
                    Usually ready in 24 hours</p>
               <Link to="#" className="text-blue-500 text-xs">Check availability at other stores</Link>
            <div className=" items-center justify-center grid grid-cols-2  md:grid md:grid-cols-4 gap-3">
             <div className="items-center justify-center rounded-xl gap-2 p-3 border border-dashed border-black flex flex-col"><img src="public\delivery-truck-svgrepo-com.svg" alt="" className="w-7" /><h3 className="text-sm flex font-semibold">FREE&nbsp;SHIPPING</h3></div> 
             <div className=" items-center justify-center rounded-xl gap-2 p-3 border border-dashed border-black flex flex-col"> <img src="public\svg-icons\return-svgrepo-com.svg" alt="" className="w-7"/><h3 className="text-sm flex font-semibold">FREE&nbsp;RETURNS</h3></div>
             <div className="items-center justify-center rounded-xl gap-2 p-3 border border-dashed border-black flex flex-col"><img src="public\operator-svgrepo-com.svg" alt=""className="w-7" /><h3 className="text-sm flex font-semibold">SUPPORT&nbsp;24/7</h3></div> 
             <div className="items-center justify-center rounded-xl gap-2 p-3 border border-dashed border-black flex flex-col"><img src="public\shield-antivirus-svgrepo-com.svg" alt="" className="w-7"/><h3 className="text-sm flex font-semibold">SECURED&nbsp;PAYMENT</h3></div> 
             
            </div>
            </div>
            </div>
            </div> <hr />
            <People/>
            <ShoppingCart/>
            <Footer/>
        </section>
        </>
    )
}