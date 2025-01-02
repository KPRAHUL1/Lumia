import React, { useState } from "react";
import { Card } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setCart } from "../../slices/CartSlice";

export function Summercarts(props) {
  const { image, title, description, money, image1 } = props;
  const [hover, setHover] = useState(false);
  const [notification, setNotification] = useState(""); 
  const dispatch = useDispatch();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const addcart = () => {
  
    dispatch(
      setCart({
        image,
        title,
        description,
        money,
      })
    );
    
    setNotification("Item added to cart!");
    setTimeout(() => setNotification(""), 2000); 
  };

  return (
    <Card
      className="md:m-3 lg:m-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={hover ? image1 : image}
        alt=""
        className={`w-fit rounded-xl transition-all duration-500 ease-in-out ${
          hover ? "hover-transition" : ""
        }`}
      />
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-semibold">{description}</span>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {money}
        </span>
        <button
          className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white bg-blue-500 hover:bg-blue-700"
          onClick={addcart}
        >
          Add to cart
        </button>
      </div>
      {notification && (
        <div className="mt-3 text-green-500 font-semibold">{notification}</div>
      )}
    </Card>
  );
}
