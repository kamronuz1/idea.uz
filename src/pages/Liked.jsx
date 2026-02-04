import { useEffect, useState } from "react";
import axiosInstance from "../service/axios.inctance";
import { NavLink } from "react-router-dom";
import { GiScales } from "react-icons/gi";
import { FiShoppingBag, FiTrash2 } from "react-icons/fi";

export default function LikedPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLikedProducts = async () => {
    try {
      const res = await axiosInstance.get("/IdeaProduct");

      const likedProducts = res.data.filter((item) => item.like === true);

      setProducts(likedProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLikedProducts();
  }, []);

  const handleUnlike = async (product) => {
    try {
      await axiosInstance.put(`/IdeaProduct/${product.id}`, {
        ...product,
        like: false,
      });

      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Загрузка...</p>;
  }

  if (products.length === 0) {
    return (
      <div className="p-16">
        <div className="bg-white rounded-xl p-5">
          <div className="flex justify-center">
            <img
              className="mt-6"
              src="https://idea.uz/img/others/heart-empty.png"
              alt="Img"
            />
          </div>
          <p className="text-center text-3xl font-semibold pt-3">
            В избранном пока ничего нет
          </p>
          <p className="text-center pt-3">
            Вы можете добавлять товары кликая на сердечко , которое находится
            прямо на карточке товара
          </p>

          <div className="flex justify-center mt-5">
            <NavLink to={"/"}>
              <button className="mt-2 bg-[#dd1470] text-white py-3 px-9 rounded-xl font-medium hover:bg-pink-900 duration-300">
                Перейти в главное меню
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 flex flex-col gap-5">
      {products.map((product) => (
        <div className="bg-white rounded-2xl p-6 w-full flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-6">
            <div className="w-22 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
              <img
                src={product.ImageLink}
                alt="product"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="font-bold text-lg">
                {Number(product.price).toLocaleString("ru-RU")} сум
              </p>
              <NavLink to={`/product/${product.id}`}>
                <p className="text-gray-800 mt-1">{product.name}</p>
              </NavLink>
              <p className="text-sm text-gray-400 mt-1">
                Код товара: {product.id}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <button
              onClick={() => handleUnlike(product)}
              className="hover:text-red-500 transition"
            >
              <FiTrash2 size={25} />
            </button>

            <button className="hover:text-pink-500 transition">
              <FiShoppingBag size={25} />
            </button>

            <button className="hover:text-pink-500 transition">
              <GiScales size={25} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
