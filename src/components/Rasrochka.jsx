import React from 'react'
import { Link } from 'react-router-dom'

export default function Rasrochka() {
  return (
    <div className=' px-14  py-8'>
      <div className=' flex gap-4'>
        <Link>Главная</Link>
        <p>&gt;</p>
        <Link>Акции</Link>
        <p className=' text-pink-600'>&gt;   В рассрочку по цене базара </p>
      </div>
      <div className=' mt-8 flex justify-between'>
        <img src="src\assets\img\o5nwimrRea5wXq3D1I47.png" alt="" className=' rounded-lg w-[48%]   h-[420px]  object-cover ' />
        <div className=' flex flex-col gap-10 justify-center bg-white rounded-lg w-[45%]'>
          <div className='  flex mt-32   flex-col ml-20 gap-9 '>
            <h1 className=' font-bold  text-3xl'>В рассрочку по цене базара</h1>
            <p className=' ml-28'>До завершения осталось &#123; time &#125; </p>
          </div>
          <div className=' flex justify-between'>
            <div></div>
            <img src="src\assets\img\quarter-circle.b9384ba2.svg" alt="" />
          </div>

        </div>
      </div>
      <div className=' w-full bg-white my-10 rounded-lg'>
 <div className=" mx-auto bg-white rounded-2xl p-10 ">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          В рассрочку по цене базара
        </h1>

        <p className="text-gray-700 font-medium mb-8">
          Только с 1 по 31 декабря приобретайте в рассрочку по цене базара!
        </p>

        <h2 className="font-semibold text-gray-900 mb-4">
          Полные условия участия в акции «В рассрочку по цене базара»:
        </h2>

        <ol className="list-decimal pl-6 space-y-3 text-gray-800 mb-8">
          <li>
            Покупайте акционные товары в одном из филиалов сети магазинов idea,
            на сайте{" "}
            <a
              href="https://idea.uz"
              className="text-pink-600 font-medium"
            >
              www.idea.uz
            </a>{" "}
            или по номеру телефона{" "}
            <span className="text-pink-600 font-medium">
              +998712307799
            </span>{" "}
            по специальным ценам.
          </li>
          <li>
            Специальные цены действуют при покупке в рассрочку на 6 месяцев.
          </li>
        </ol>

        <h3 className="font-semibold text-gray-900 mb-4">
          Примечания:
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Акция действует во всех филиалах сети магазинов idea в период
            с 01.12.2025 по 31.12.2025.
          </li>
          <li>
            В случае приобретения товара в рассрочку между финансовым партнёром
            и клиентом заключается соответствующий договор.
          </li>
          <li>Количество товаров по акции ограничено.</li>
          <li>
            Участник даёт согласие на видео- и фотосъёмку, а также использование
            материалов в рекламных целях.
          </li>
          <li>
            Данная акция не суммируется с другими акциями и скидками.
          </li>
          <li>
            Для подробной информации обращайтесь по номеру{" "}
            <span className="text-pink-600 font-medium">
              +998712307799
            </span>.
          </li>
          <li>
            Компания idea вправе изменить условия акции в одностороннем порядке.
          </li>
          <li>
            Акция не является конкурсом, лотереей или азартной игрой.
          </li>
          <li>
            Информация носит исключительно информационный характер и не является
            публичной офертой.
          </li>
        </ul>

      </div>

      </div>
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center  gap-4">
        
        <span className="text-gray-900 font-medium whitespace-nowrap">
          Напишите нам
        </span>

        <input
          type="text"
          placeholder="Имя"
          className="w-56 border border-gray-300 rounded-lg px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="text"
          placeholder="Телефон"
          className="w-56 border border-gray-300 rounded-lg px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="text"
          placeholder="Сообщение"
          className="w-56 border border-gray-300 rounded-lg px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
    </div>




    </div>
  )
}
