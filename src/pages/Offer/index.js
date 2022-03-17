import { Button } from "../Home";
function Offer() {
  const offerData = [];
  return (
    <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="space-y-16 my-20 lg:my-0">
        <p className="text-4xl text-center">Что мы предлагаем</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 max-w-5xl">
          <OfferList
            border={"border-b"}
            path={"/icons/icon 1.png"}
            text={"Высокий уровень исполнения "}
          />
          <OfferList
            border={"md:border-l border-b"}
            path={"/icons/icon 2.png"}
            text={"Гарантируем качество работы"}
          />
          <OfferList
            border={"md:border-l border-b"}
            path={"/icons/icon 3.png"}
            text={"Выполним работу быстро"}
          />
          <OfferList
            border={"lg:border-l border-b"}
            path={"/icons/icon 4.png"}
            text={"Обеспечим поток заявок"}
          />
          <OfferList
            border={"md:border-l border-b"}
            path={"/icons/icon 5.png"}
            text={"Автоматизируем работу "}
          />
          <OfferList
            border={"md:border-l lg:border-l-0 border-b"}
            path={"/icons/icon 6.png"}
            text={"Разработаем уникальный дизайн"}
          />
          <OfferList
            border={"lg:border-l border-b"}
            path={"/icons/icon 7.png"}
            text={"Напишем чистый код"}
          />
          <OfferList
            border={"md:border-l border-b"}
            path={"/icons/icon 8.png"}
            text={"Контекстная реклама"}
          />
          <OfferList
            border={"md:border-l border-b"}
            path={"/icons/icon 9.png"}
            text={"Третированная реклама"}
          />
          <OfferList
            border={"lg:border-l border-b md:border-b-0 lg:border-b"}
            path={"/icons/icon 10.png"}
            text={"SEO продвижение"}
          />
          <OfferList border={"hidden lg:block "} hidden={true} />
          <OfferList
            border={"md:border-l  border-b md:border-b-0"}
            path={"/icons/icon 11.png"}
            text={"Продвижение в социальных сетях"}
          />
          <OfferList
            border={
              "lg:border-l lg:order-none order-1 md:col-span-3 lg:col-span-1 justify-center my-16 lg:my-0"
            }
            btn={true}
          />
          <OfferList
            border={"md:border-l border-b md:border-b-0"}
            path={"/icons/icon 2.png"}
            text={"Высокий уровень исполнения"}
          />
          <OfferList border={"md:border-l hidden lg:block"} hidden={true} />
        </div>
      </div>
    </main>
  );
}

export default Offer;

function OfferList(props) {
  return (
    <div
      className={`border-white border-opacity-30 gap-4 px-4 py-8 flex items-center flex-col ${props.border}`}
    >
      {props.btn ? (
        <Button
          text={"Подробнее"}
          btnStyle={
            "flex items-center justify-center md:w-full py-3 sm:px-4 sm:py-3 gap-x-1 md:gap-x-2 rounded border-2 border-gray-700 cursor-pointer group w-full"
          }
        />
      ) : props.hidden ? (
        <></>
      ) : (
        <>
          <div className="w-8 h-8 md:w-10 md:h-10">
            <img src={props.path} alt="icon" />
          </div>
          <p className="text-center">{props.text}</p>
        </>
      )}
    </div>
  );
}
