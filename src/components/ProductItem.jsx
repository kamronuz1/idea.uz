import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../service/axios.inctance";
import { IoLocationSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill, RiScales3Line } from "react-icons/ri";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import SizUchunMaxsus from "./SizUchunMaxsus";

export default function ProductItem() {
  const { id } = useParams(); // 👈 URL dan id olamiz
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const res = await axiosInstance.get(`/IdeaProduct/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="px-10">
      <div className="bg-[#dd1470] rounded-2xl px-9 py-6 mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://idea.uz/img/icons/shield.svg" alt="" />
            <div className="leading-tight">
              <p className="m-0 text-white font-semibold text-base">
                Официальная гарантия
              </p>
              <p className="m-0 text-white text-sm">на все товары</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <TbTruckDelivery className="text-6xl text-white" />
            <div className="leading-tight">
              <p className="m-0 text-white font-semibold text-base">Доставка</p>
              <p className="m-0 text-white text-sm">по всему Узбекистану</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-5xl text-white" />
            <div className="leading-tight">
              <p className="m-0 text-white font-semibold text-base">
                Самовывоз
              </p>
              <p className="m-0 text-white text-sm">из ближайшего магазина</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <RiDiscountPercentFill className="text-5xl text-white" />
            <div className="leading-tight">
              <p className="m-0 text-white font-semibold text-base">
                Выгодная рассрочка
              </p>
              <p className="m-0 text-white text-sm">без предоплаты</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-10">
        {/* LEFT SIDE */}
        <div className="bg-white p-7 rounded-xl flex-1">
          <p className="text-3xl font-semibold">{product.name}</p>

          <div className="mt-2 flex gap-5">
            <button className="flex items-center gap-2 hover:text-[#dd1470] duration-300">
              <FaRegHeart className="text-gray-500 text-xl" />В избранное
            </button>

            <button className="flex items-center gap-2 hover:text-[#dd1470] duration-300">
              <RiScales3Line className="text-gray-500 text-2xl" />
              Сравнить
            </button>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              className="max-w-[400px] w-full object-contain"
              src={product.ImageLink}
              alt="Product Image"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-5 rounded-xl w-[350px] shrink-0 h-[305px]">
          <p className="mb-2 font-semibold">Цена товара</p>
          <p className="text-2xl font-semibold text-[#dd1470]">
            {Number(product.price).toLocaleString("ru-RU")} сум
          </p>

          <button className="mt-5 w-full bg-[#dd1470] text-white py-3 rounded-xl flex gap-2 items-center justify-center">
            Полная оплата <FaChevronDown />
          </button>

          <button className="mt-8 w-full font-medium border border-[#dd1470] text-[#dd1470] py-3 rounded-xl hover:bg-[#dd1470] duration-300 hover:text-white">
            Добавить в корзину
          </button>

          <button className="mt-2 w-full bg-[#dd1470] text-white py-3 rounded-xl font-medium hover:bg-pink-900 duration-300">
            Купить
          </button>
        </div>
      </div>

      <div className="bg-white mt-5 rounded-xl p-8 w-[1070px]">
        <h2 className="text-2xl font-semibold">О товаре</h2>

        <p className="mt-5 text-lg font-medium text-gray-800">{product.name}</p>

        <p className="mt-3 text-gray-700 leading-7 text-[15px] whitespace-pre-line">
          {product.description}
        </p>
      </div>

      
    </div>

    <SizUchunMaxsus/>
    </div>
  );
}
