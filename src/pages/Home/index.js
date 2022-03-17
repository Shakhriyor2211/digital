import { arrow } from "../../utils/icon";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-image bg-center bg-cover text-gray-800 relative">
      <section className="flex-1 flex flex-col justify-between mb-16 mt-36 md:block">
        <div className="mb-12 space-y-6">
          <p className="uppercase text-center text-3xl sm:text-6xl">
            web applications
          </p>
          <p className="text-center text-xl">Повседневная практика.</p>
        </div>
        <div className="grid place-content-center">
          <a href="#special">
            <Button
              text={"Спец предложение"}
              btnStyle={
                "flex items-center py-3 px-6 gap-x-10 rounded border-2 border-gray-700 cursor-pointer group text-lg"
              }
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

export function Button(props) {
  return (
    <button className={props.btnStyle}>
      <p className="-mt-1 ">{props.text}</p>
      <span className="transition-all duration-500 transform group-hover:translate-x-3">
        {arrow}
      </span>
    </button>
  );
}
