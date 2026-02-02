import React from "react";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <div className="px-16">
      <p className="text-2xl font-semibold pl-5">Категории</p>

      <div className="flex gap-14 justify-center">
        <NavLink to={"/smartphone"}>
          <div className="bg-gray-200 w-96 h-80 rounded-xl mt-10 mb-10 relative overflow-hidden hover:text-white hover:bg-teal-600 duration-300">
            <p className="font-semibold text-2xl p-5">Смартфоны</p>
            <img
              src="https://api.idea.uz/storage/categories/October2023/KrxaMRhdDJZQmaSsZNyj.png"
              alt="Smartphones"
              className="w-44 object-contain absolute bottom-0 right-0"
            />
          </div>
        </NavLink>

        <NavLink to={"/uycards"}>
          <div className="bg-gray-200 w-96 h-80 rounded-xl mt-10 mb-10 relative overflow-hidden hover:text-white hover:bg-teal-600 duration-300">
            <p className="font-semibold text-2xl p-5">
              Мелкая техника для дома
            </p>
            <img
              src="https://api.idea.uz/storage/categories/October2023/qC3m5rWiI3Hwk73K3CDw.png"
              alt="Burgut"
              className="w-44 object-contain absolute bottom-0 right-0"
            />
          </div>
        </NavLink>

        <NavLink to={"/bigcards"}>
          <div className="bg-gray-200 w-96 h-80 rounded-xl mt-10 mb-10 relative overflow-hidden hover:text-white hover:bg-teal-600 duration-300">
            <p className="font-semibold text-2xl p-5">
              Kрупный бытовой техники
            </p>
            <img
              src="https://api.idea.uz/storage/categories/March2023/QgJxo9HjPmawOiIEH8GV.png"
              alt="Burgutcha"
              className="w-44 object-contain absolute bottom-0 right-0"
            />
          </div>
        </NavLink>
      </div>

      <div className="flex gap-14 justify-center">
        <NavLink to={"/noutbuklar"}>
          <div className="bg-gray-200 w-96 h-80 rounded-xl mt-10 mb-10 relative overflow-hidden hover:text-white hover:bg-teal-600 duration-300">
            <p className="font-semibold text-2xl p-5">Ноутбуки</p>
            <img
              src="https://api.idea.uz/storage/categories/October2023/YfYt4aoWHZMkbuFNb1px.png"
              alt="Burgutcha"
              className="w-72 object-contain absolute bottom-0 right-0"
            />
          </div>
        </NavLink>

        <NavLink to={"/televizorlar"}>
          <div className="bg-gray-200 w-96 h-80 rounded-xl mt-10 mb-10 relative overflow-hidden hover:text-white hover:bg-teal-600 duration-300">
            <p className="font-semibold text-2xl p-5">Телевизоры</p>
            <img
              src="https://api.idea.uz/storage/categories/August2024/mfwy39NmUk2gSdFaelLr.png"
              alt="Burgutcha"
              className="w-72 object-contain absolute bottom-0 right-0"
            />
          </div>
        </NavLink>

        <NavLink to={"/kondisionerlar"}>
          <div className="bg-gray-200 w-96 h-80 rounded-xl mt-10 mb-10 relative overflow-hidden hover:text-white hover:bg-teal-600 duration-300">
            <p className="font-semibold text-2xl p-5">Кондиционеры</p>
            <img
              src="https://api.idea.uz/storage/categories/August2024/ULScZWbdY6atRhIqKOwL.png"
              alt="Burgutcha"
              className="w-72 object-contain absolute bottom-0 right-0"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
