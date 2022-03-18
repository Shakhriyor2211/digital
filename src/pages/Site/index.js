import { useEffect, useState } from "react";
import { circleWhite, circleBlack } from "../../utils/icon";
import { Button } from "../Home";

function Site() {
  const [slader1, setSlader1] = useState(false);
  const [slader2, setSlader2] = useState(true);
  const [slader3, setSlader3] = useState(false);
  const [slader4, setSlader4] = useState(false);
  const [slader5, setSlader5] = useState(false);
  const [slader6, setSlader6] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(2);

  useEffect(() => {
    getData();
  }, [id]);
  async function getData() {
    try {
      const response = await fetch(`http://localhost:3000/aboutData/${id}`, {
        method: "GET",
      });
      if (!response.ok) {
        const message = "Error status" + response.status;
        throw new Error(message);
      }
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen flex flex-col md:gap-y-12 md:mt-12 relative px-2">
      <p className="text-center text-5xl">Сайты</p>
      <div className="flex flex-col flex-1 md:flex-initial md:flex-row gap-x-12 justify-around">
        <div className="w-full">
          <div
            className={`image image${id} h-96 md:h-128 max-w-5xl flex-1 flex justify-center items-center mx-auto relative`}
          >
            <div className="lg:absolute lg:top-40 lg:right-12 bg-gradient-to-r from-gray-200 to-violet-800 rounded">
              <Button
                text={"Перейти на сайт"}
                btnStyle={
                  "flex items-center py-3 px-8 gap-x-10 rounded border-2 border-gray-700 cursor-pointer group"
                }
              />
            </div>
          </div>
        </div>
        <ul className="flex gap-2 flex-row md:flex-col justify-center md:mr-12">
          <li
            className=" cursor-pointer"
            onClick={() => {
              setSlader1(false);
              setSlader2(true);
              setSlader3(false);
              setSlader4(false);
              setSlader5(false);
              setSlader6(false);
              setId(2);
            }}
          >
            {slader2 ? circleWhite : circleBlack}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              setSlader1(true);
              setSlader2(false);
              setSlader3(false);
              setSlader4(false);
              setSlader5(false);
              setSlader6(false);
              setId(1);
            }}
          >
            {slader1 ? circleWhite : circleBlack}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              setSlader1(false);
              setSlader2(false);
              setSlader3(true);
              setSlader4(false);
              setSlader5(false);
              setSlader6(false);
              setId(3);
            }}
          >
            {slader3 ? circleWhite : circleBlack}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              setSlader1(false);
              setSlader2(false);
              setSlader3(false);
              setSlader4(true);
              setSlader5(false);
              setSlader6(false);
              setId(4);
            }}
          >
            {slader4 ? circleWhite : circleBlack}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              setSlader1(false);
              setSlader2(false);
              setSlader3(false);
              setSlader4(false);
              setSlader5(true);
              setSlader6(false);
              setId(5);
            }}
          >
            {slader5 ? circleWhite : circleBlack}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              setSlader1(false);
              setSlader2(false);
              setSlader3(false);
              setSlader4(false);
              setSlader5(false);
              setSlader6(true);
              setId(6);
            }}
          >
            {slader6 ? circleWhite : circleBlack}
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Site;
