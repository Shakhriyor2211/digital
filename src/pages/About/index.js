import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { circleWhite, circleBlack } from "../../utils/icon";

function About() {
  const [slader1, setSlader1] = useState(true);
  const [slader2, setSlader2] = useState(false);
  const [slader3, setSlader3] = useState(false);
  const [slader4, setSlader4] = useState(false);
  const [slader5, setSlader5] = useState(false);
  const [slader6, setSlader6] = useState(false);
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);

  const contentData = [
    {
      content1:
        "1. Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.",
      content2:
        "Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.",
      content3:
        "Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.",
      id: 1,
    },
    {
      content1:
        "2. Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.",
      content2:
        "Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.",
      content3:
        "Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.",
      id: 2,
    },
    {
      content1:
        "3. Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.",
      content2:
        "Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.",
      content3:
        "Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.",
      id: 3,
    },
    {
      content1:
        "4. Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.",
      content2:
        "Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.",
      content3:
        "Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.",
      id: 4,
    },
    {
      content1:
        "5. Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.",
      content2:
        "Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.",
      content3:
        "Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.",
      id: 5,
    },
    {
      content1:
        "6. Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.",
      content2:
        "Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.",
      content3:
        "Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.",
      id: 6,
    },
  ];

  useEffect(() => {
    setData(null);
    setTimeout(() => {
      getData();
      async function getData() {
        try {
          const response = await fetch(
            `http://localhost:3000/aboutData/${id}`,
            {
              method: "GET",
            }
          );
          if (!response.ok) {
            const message = "Error status" + response.status;
            throw new Error(message);
          }
          setData(await response.json());
        } catch (error) {
          setData(contentData[id - 1]);
          console.log(error);
        }
      }
    }, 500);
  }, [id]);

  return (
    <main className="grid lg:grid-cols-2 min-h-screen relative px-6">
      <div className={`image hidden lg:block image${id}`}></div>
      {data ? (
        <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
          <div className="max-w-md max-h-96">
            <p className="text-3xl sm:text-5xl text-center font-medium lg:text-right">
              О компании
            </p>
            <div className="flex items-center my-10 lg:my-12">
              <div>
                <ul className="space-y-4 lg:space-y-6 lg:text-right">
                  <li>{data.content1}</li>
                  <li>{data.content2}</li>
                  <li>{data.content3}</li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="flex gap-2 flex-row lg:flex-col">
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
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <ClipLoader color={"lightblue"} loading={true} size={100} />
        </div>
      )}
    </main>
  );
}

export default About;
