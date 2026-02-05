import { useEffect, useState } from "react";
import axiosInstance from "../service/axios.inctance";
import { NavLink } from "react-router-dom";
import { GiScales } from "react-icons/gi";
import { FiShoppingBag, FiTrash2 } from "react-icons/fi";
import SizUchunMaxsus from "../components/SizUchunMaxsus";
import { FaHeart } from "react-icons/fa";
import SizUchunMaxsus2 from "../components/SizUchunMaxsus2";

export default function Basket() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBasketProducts = async () => {
    try {
      const res = await axiosInstance.get("/IdeaProduct");

      const basketProducts = res.data.filter(
        (item) => item.basket === true || item.basket === "true",
      );

      setProducts(basketProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBasketProducts();
  }, []);

  const handleUnBasket = async (product) => {
    try {
      await axiosInstance.put(`/IdeaProduct/${product.id}`, {
        ...product,
        basket: false,
      });

      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = async (product) => {
    try {
      await axiosInstance.put(`/IdeaProduct/${product.id}`, {
        ...product,
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

  const totalSum = products.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

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
              src="https://idea.uz/img/others/basket-empty.png"
              alt="Img"
            />
          </div>
          <p className="text-center text-3xl font-semibold pt-3">
            В корзине пока ничего нет
          </p>
          <p className="text-center pt-3">
            Вы можете начать покупки с главной страницы или воспользоваться
            поиском, если ищете что-то конкретное
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
    <div className="px-10 py-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-6">
                <div className="w-22 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src={product.ImageLink}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <p className="font-bold text-lg">
                    {Number(product.price).toLocaleString("ru-RU")} сум
                  </p>

                  <NavLink to={`/product/${product.id}`}>
                    <p className="text-gray-800 mt-1 hover:text-pink-600 duration-200">
                      {product.name}
                    </p>
                  </NavLink>

                  <p className="text-sm text-gray-400 mt-1">
                    Код товара: {product.id}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <button
                  onClick={() => handleUnBasket(product)}
                  className="hover:text-red-500 transition"
                >
                  <FiTrash2 size={25} />
                </button>

                <button
                  onClick={() => toggleLike(product)}
                  className={`duration-300 ${
                    product.like ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  <FaHeart size={22} />
                </button>

                <button className="hover:text-pink-500 transition">
                  <GiScales size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Ваша корзина</h2>

            <div className="flex flex-col gap-4">
              {products.map((item) => (
                <div key={item.id}>
                  <p className="font-medium">
                    {item.name} (1 шт)
                  </p>

                  <div className="flex justify-between text-gray-500 mt-1">
                    <span>Цена</span>
                    <span>
                      {Number(item.price).toLocaleString("ru-RU")} сум
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-5" />

            <div className="flex justify-between font-medium">
              <span>Ваш платеж:</span>
              <span>{totalSum.toLocaleString("ru-RU")} сум x 1 раз</span>
            </div>

            <div className="flex justify-between text-lg font-bold mt-2">
              <span>= {totalSum.toLocaleString("ru-RU")} сум</span>
            </div>

            <button className="mt-6 w-full bg-[#dd1470] text-white py-4 rounded-xl font-semibold text-lg hover:bg-pink-800 duration-300">
              Оформить
            </button>
          </div>
        </div>
      </div>

      <SizUchunMaxsus2 />
    </div>
  );
}
