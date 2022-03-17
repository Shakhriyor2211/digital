import { Link } from "react-router-dom";
import { Button } from "../Home";

function Application() {
  return (
    <main className="grid lg:grid-cols-2 min-h-screen text-white">
      <div className="bg-app bg-center bg-cover px-4 flex justify-center lg:justify-end">
        <div className="opacity-80 space-y-12 lg:mr-10 my-24 lg:mys-36">
          <p className="text-4xl text-center lg:text-left">Заявка</p>
          <Form />
        </div>
      </div>
      <div
        id="special"
        className="bg-zinc-900 px-4 flex justify-center lg:justify-start"
      >
        <div className="opacity-80 space-y-24 py-2 mt-36 lg:ml-8">
          <p className="text-4xl text-center lg:text-right">Спец предложения</p>
          <div className="grid sm:grid-cols-3 place-content-center gap-4">
            <Card
              title={"Landing Page"}
              detail={"продающая посадочная страница. "}
              price={"1 500$"}
            />

            <Card
              title={"Бизнес сайт"}
              detail={"Корпоративный сайт "}
              price={"1 500$"}
              border={"border-0"}
              bg={"bg-gradient-to-b from-blue-300 to-blue-600"}
            />

            <Card
              title={"Контекстная реклама"}
              detail={"Запуск контекстной рекламы на месяц"}
              price={"Бесплатно"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Application;

function Form() {
  return (
    <form className="space-y-16">
      <div className="space-y-8">
        <Input type={"text"} info={"Ваша имя"} label={"user"} />
        <Input type={"email"} info={"Ваша Email"} label={"email"} />
        <Input info={"Сообщения"} label={"message"} />
      </div>
      <Button
        text={"Отправить"}
        btnStyle={
          "flex items-center w-full transition-all duration-500 lg:w-fit hover:border-blue-600 hover:text-blue-600 justify-center p-4 sm:px-7 sm:py-3 gap-x-1 md:gap-x-2 rounded border border-white cursor-pointer group"
        }
      />
    </form>
  );
}

function Input(props) {
  return props.type ? (
    <div className="flex flex-col">
      <label htmlFor={props.label}>{props.info}</label>
      <input
        className="p-1 outline-none transition-all duration-500 border-b-2 focus:border-blue-600 bg-inherit"
        type={props.type}
        id={props.label}
        required
      />
    </div>
  ) : (
    <div className="flex flex-col">
      <label htmlFor={props.label}>{props.info}</label>
      <textarea
        className="outline-none border-b-2 transition-all duration-500 focus:border-blue-600 bg-inherit resize-none w-full"
        id={props.label}
        rows="3"
        cols="60"
      ></textarea>
    </div>
  );
}

function Card(props) {
  return (
    <Link to={""} className="overflow-hidden">
      <div
        className={`border rounded border-white max-w-1 h-56 sm:h-full flex flex-col ${props.border} ${props.bg}`}
      >
        <div
          className={`rounded-full -mt-10 bg-zinc-900 w-16 h-16 mx-auto border border-white ${props.border}`}
        ></div>
        <div className="px-4 my-4 gap-y-8 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="font-medium">{props.title}</p>
            <p className="text-xs">{props.detail}</p>
          </div>
          <div className="">
            {props.price != "Бесплатно" && (
              <p className="text-xs">{props.price}</p>
            )}
            <p className="font-medium">{props.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
