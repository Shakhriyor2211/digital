function Advantage() {
  return (
    <main className="flex flex-col min-h-screen bg bg-center bg-cover items-center justify-center px-4">
      <div className="fixed inset-x-0"></div>
      <div className="space-y-12">
        <p className="text-3xl text-center sm:text-left sm:text-5xl mt-16">
          Наши преимущества
        </p>
        <div className="grid md:grid-cols-2 max-w-4xl gap-x-12 gap-y-8">
          <Content
            path={"/icons/i1.png"}
            text={"Сделаем адаптивный дизайн, под любой вид устройств"}
          />
          <Content
            path={"/icons/i2.png"}
            text={
              "Установим на сайт счетчики аналитики и настроим возможность отслеживать результаты прямо с вашего мобильного телефона"
            }
          />
          <Content
            path={"/icons/i3.png"}
            text={
              "Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, подключим Whatsapp к сайту"
            }
          />
          <Content
            path={"/icons/i4.png"}
            text={
              "Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете"
            }
          />
        </div>
      </div>
    </main>
  );
}

export default Advantage;

function Content(props) {
  return (
    <div className="flex items-center gap-4">
      <img className="w-10 h-10" src={props.path} alt="icon" />
      <p>{props.text}</p>
    </div>
  );
}
