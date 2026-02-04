import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import axiosInstance from "../service/axios.inctance";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Televizorlar() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await axiosInstance.get("/IdeaProduct");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleLike = async (product) => {
    try {
      await axiosInstance.put(`/IdeaProduct/${product.id}`, {
        like: !product.like,
      });

      setProducts((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, like: !item.like } : item,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-12 mb-10 mt-10">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-semibold">Телевизоры</p>
        <Link to={"/"}>
          <p
            onClick={() => navigate("/products")}
            className="text-pink-600 cursor-pointer hover:underline flex items-center"
          >
            Главная <BiRightArrowAlt />
          </p>
        </Link>
      </div>
      <Link>
        <div className=" gap-6  grid grid-cols-5 ">
          {products
            .filter((product) => product.category == "Televizor")

            .map((product) => (
              <div
                key={product.id}
                className="w-[260px] bg-white rounded-2xl shadow-md p-4 relative"
              >
                <button
                      onClick={() => toggleLike(product)}
                      className={`absolute top-3 right-3 transition ${
                        product.like ? "text-red-500" : "text-gray-400"
                      }`}
                    >
                      <FaHeart size={18} />
                    </button>

                <img
                  src={product.ImageLink}
                  alt={product.name}
                  className="w-full h-[180px] object-contain my-4"
                />

                <h2 className="text-pink-600 text-xl font-bold">
                  {Number(product.price).toLocaleString("ru-RU")} сум
                </h2>

                <NavLink to={`/product/${product.id}`}>
                  <p className="text-sm mt-2 font-medium">{product.name}</p>
                </NavLink>

                <p className="text-xs text-gray-400 mt-1">
                  Бренд:{" "}
                  <span className="underline cursor-pointer">
                    {product.brand}
                  </span>
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-lg">
                    Купить сразу
                  </button>
                  <button className="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-lg flex items-center justify-center">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Link>
    </div>
  );
}
