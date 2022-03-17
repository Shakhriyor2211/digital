import { message, phone, location } from "../utils/icon";
import { Messanger } from "./header";

function Footer() {
  return (
    <footer className="bg-neutral-900 px-4">
      <div className="max-w-5xl mx-auto text-white py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="space-y-6 max-w-2">
            <p className="text-lg">Пункт</p>
            <div className="opacity-70 space-y-4">
              <p className="text-sm">
                В своём стремлении улучшить пользовательский опыт мы упускаем,
                что многие известные личности.
              </p>
              <p className="text-sm">Пункт</p>
              <p className="text-sm">Пункт</p>
            </div>
          </div>
          <div className="space-y-6 max-w-2">
            <p className="text-lg">Пункт</p>
            <div className="opacity-70 space-y-4">
              <p className="text-sm">
                В своём стремлении улучшить пользовательский опыт мы упускаем,
                что многие известные личности.
              </p>
              <p className="text-sm">Пункт</p>
              <p className="text-sm">Пункт</p>
            </div>
          </div>
          <div className="space-y-6 max-w-2">
            <p className="text-lg">Пункт</p>
            <div className="opacity-70 space-y-4">
              <p className="text-sm">
                В своём стремлении улучшить пользовательский опыт мы упускаем,
                что многие известные личности.
              </p>
              <p className="text-sm">Пункт</p>
              <p className="text-sm">Пункт</p>
            </div>
          </div>
          <div className="space-y-6 min-w-2">
            <p className="text-lg">Контакты</p>
            <div className="space-y-5">
              <a href="tel:+998999999999" className={"flex items-center gap-4"}>
                {phone}
                <p className="opacity-70">+998 (99) 999-99-99</p>
              </a>
              <a
                href="mailto:example@gmail.com"
                className={"flex items-center gap-4"}
              >
                {message}
                <p className="opacity-70">example@gmail.com</p>
              </a>
              <a
                target={"_blank"}
                href="https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82/@41.2825125,69.1392828,11z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734"
                className={"flex items-center gap-4"}
              >
                {location}
                <p className="opacity-70">г.Ташкент</p>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-8 mt-8">
          <hr className="opacity-40"></hr>
          <div className="flex justify-center lg:justify-between">
            <p className="hidden lg:block text-lg font-semibold">
              digital flow
            </p>
            <Messanger styleClass={"flex gap-4 opacity-70"} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
