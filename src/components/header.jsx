import { FiPercent, FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FiHeart, FiShoppingBag, FiBarChart2, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="w-full bg-stone-100">
        <div className="max-w-8xl mx-auto px-12">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer ">
                <FiPercent className="text-pink-600 text-2xl" />
                <span>Акции и скидки</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <MdLocationOn className="text-pink-600 text-2xl" />
                <span>Магазины</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FiPhone className="text-pink-600 text-base" />
                <span>71 230 77 99</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <img className="w-5" src="https://static.vecteezy.com/system/resources/thumbnails/024/960/461/small/russia-flag-circle-shape-national-symbol-simple-icon-png.png" alt="Flag" />
                <span>Русский</span>
                <FaChevronDown className="text-gray-500 text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center gap-12 px-10 py-7  bg-white">
        <Link to={"/"}>
          <img
            src="https://navien.uz/wp-content/uploads/2025/05/idea_logo-1024x414-1.png"
            alt="Logo"
            className=" w-28  "
          />
        </Link>
        <button className="flex text-stone-50 w-48 justify-center h-12  rounded-xl active:border-pink-500x` bg-[#dd1470] items-center gap-1 hover:bg-pink-900 duration-300">
          Каталог товаров <GiHamburgerMenu />
        </button>
        <div className="flex">
          {" "}
          <input
            type="text"
            name=""
            id="huy"
            placeholder="Поиск"
            className=" bg-gray-200 p-2.5 rounded-l-xl w-[600px] active:bg-stone-50 focus:bg-stone-50 focus:border-pink-400 "
          />{" "}
          <label
            htmlFor="huy"
            className=" p-3 bg-gray-200 rounded-r-xl hover:bg-gray-300 w-12 "
          >
            <CiSearch />
          </label>
        </div>
        <div className="flex items-center gap-8">
          <Link to={"/liked"}>
            <div className="relative flex flex-col items-center text-gray-700  cursor-pointer hover:text-pink-600">
              <div className="relative hover:text-pink-600">
                <FiHeart size={22} />
                
              </div>
              <span className="text-xs mt-1">Избранное</span>
            </div>
          </Link>
          <NavLink to={"/basket"}>
            <div className="relative flex flex-col items-center text-gray-700 cursor-pointer hover:text-pink-600">
            <div className="relative hover:text-pink-600">
              <FiShoppingBag size={22} />
            </div>
            <span className="text-xs mt-1">Корзина</span>
          </div>
          </NavLink>

          <div className="relative flex flex-col items-center text-gray-700 hover:text-pink-600 cursor-pointer">
            <div className="relative hover:text-pink-600">
              <FiBarChart2 size={22} />
            </div>
            <span className="text-xs mt-1">Сравнение</span>
          </div>

          <div className="relative flex flex-col items-center text-gray-700 cursor-pointer hover:text-pink-600">
            <FiUser size={22} />
            <span className="text-xs mt-1">Войти</span>
          </div>
        </div>
      </div>
    </div>
  );
}
