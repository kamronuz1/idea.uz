import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";


function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 hover:bg-white hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">
        {title}
      </h3>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <a
      href="#"
      className="hover:text-white transition text-sm"
    >
      {children}
    </a>
  );
}


export default function Footer() {
  return (
    <footer className="bg-[#2b3440] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">

        <div>
          <h1 className="text-4xl font-bold text-white mb-6">
            idea.uz
          </h1>
          <div className="flex gap-4 text-xl">
            <SocialIcon><FaTelegramPlane /></SocialIcon>
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
          </div>
        </div>

        <FooterColumn title="Покупателям">
          <FooterLink>Вопросы и ответы</FooterLink>
          <FooterLink>Как сделать заказ</FooterLink>
          <FooterLink>Возврат и обмен</FooterLink>
        </FooterColumn>

        <FooterColumn title="idea.uz">
          <FooterLink>О нас</FooterLink>
          <FooterLink>Наши магазины</FooterLink>
          <FooterLink>Контакты</FooterLink>
        </FooterColumn>

        <FooterColumn title="Информация">
          <FooterLink>Статьи</FooterLink>
          <FooterLink>Рассрочка</FooterLink>
          <FooterLink>Оферта</FooterLink>
          <FooterLink>Вакансии</FooterLink>
        </FooterColumn>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Обратная связь
          </h3>

          <button className="border border-gray-400 text-white px-4 py-2 rounded-md mb-6 hover:bg-white hover:text-black transition">
            Оставить сообщение
          </button>

          <p className="text-white font-semibold text-xl">
            71 230 77 99
          </p>
          <p className="text-sm mb-4">
            Ежедневно с 9:00 до 21:00
          </p>

          <p className="text-white font-medium">
            info@ideagroup.uz
          </p>
          <p className="text-sm">Почта</p>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-600 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>2026 © «idea.uz - интернет-магазин»</p>
        <p className="mt-2 md:mt-0">
          Разработка — <span className="font-semibold">in</span>
        </p>
      </div>
    </footer>
  );
}
