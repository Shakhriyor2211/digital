import { useState } from "react";
import Scrollspy from "react-scrollspy";
import {
  closeMenu,
  logo,
  openMenu,
  arrow,
  telegram,
  vk,
  instagram,
  message,
  phone,
} from "../utils/icon";

function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <header className="bg-white shadow-md">
      <div className="flex px-4 max-w-5xl mx-auto py-3">
        <a href="#home" className=" flex-1 flex items-center gap-2">
          <div>{logo}</div>
          <p className="sm:text-xl font-semibold">Digital Flow</p>
        </a>
        <div className="flex items-center">
          <button
            onClick={() => {
              setMenu(false);
            }}
          >
            {openMenu}
          </button>

          <Menu setState={setMenu} menu={menu} />
        </div>
      </div>
    </header>
  );
}

export default Header;

function Menu(props) {
  return (
    <div>
      <div
        className={`fixed mx-4 ml-12 lg:ml-20 z-50 left-0 md:left-3/5 ${
          !props.menu ? "block" : "hidden"
        }`}
        onClick={() => {
          props.setState(true);
        }}
      >
        <button>{closeMenu}</button>
      </div>
      <div
        className={`fixed right-0 inset-y-0 inset-x-0 md:left-3/5 pt-20 text-white px-4 bg-gray-900 pl-12 lg:pl-20 z-30 transition-all duration-700 transform ${
          props.menu ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <Scrollspy
          className="my-10 space-y-4 nav-link"
          items={["home", "about", "sites", "offer", "application"]}
          currentClassName="active"
        >
          <li>
            <a
              className="leading-3 inline-block opacity-30"
              href="#home"
              onClick={() => {
                props.setState(true);
              }}
            >
              Главная
            </a>
          </li>
          <li>
            <a
              className="leading-3 inline-block opacity-30"
              href="#about"
              onClick={() => {
                props.setState(true);
              }}
            >
              О компании
            </a>
          </li>
          <li>
            <a
              className="leading-3 inline-block opacity-30"
              href="#sites"
              onClick={() => {
                props.setState(true);
              }}
            >
              Наша работа
            </a>
          </li>
          <li>
            <a
              className="leading-3 inline-block opacity-30"
              href="#offer"
              onClick={() => {
                props.setState(true);
              }}
            >
              Что мы предлагаем
            </a>
          </li>
          <li>
            <a
              className="leading-3 inline-block opacity-30"
              href="#special"
              onClick={() => {
                props.setState(true);
              }}
            >
              Специальное предложение
            </a>
          </li>
        </Scrollspy>

        <a
          href="#application"
          className="inline-flex items-center px-4 py-3 md:px-6 md:gap-x-6 rounded bg-gradient-to-r from-blue-700 to-blue-200 cursor-pointer group my-20"
          onClick={() => {
            props.setState(true);
          }}
        >
          <p className="-mt-1 text-lg inline-block">Оставить заявку</p>
          <span className="md:block hidden transition-all duration-500 transform group-hover:translate-x-3 ">
            {arrow}
          </span>
        </a>
        <Messanger
          styleClass={"hidden sm:flex gap-4 justify-start opacity-30"}
        />
      </div>
    </div>
  );
}
export function Messanger(props) {
  return (
    <div className={props.styleClass}>
      <div>{telegram}</div>
      <div>{vk}</div>
      <div>{instagram}</div>
      <div>{message}</div>
      <div>{phone}</div>
    </div>
  );
}
