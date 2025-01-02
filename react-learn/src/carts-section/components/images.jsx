import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Image() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="pt-10 grid grid-cols-2 justify-items-center md:m-10 md:gap-3 md:flex lg:flex md:justify-center lg:justify-center xl:justify-evenly">
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid grid-cols-1 justify-items-center mb-3 hover:text-blue-600"
        >
          <div className="overflow-hidden w-auto h-auto rounded-full">
            <Link to={`/category/${category.name}`}>
              <img
                src={`http://localhost:5000/${category.imagePath}`}
                alt={`Category ${category.name}`}
                className="xl:w-40 xl:h-40 md:w-auto md:h-auto rounded-full w-28 h-28 lg:w-40 lg:h-36 transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <Link to={`/category/${category.name}`}>
            <h4 className="md:p-4 p-2">{category.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
