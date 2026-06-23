import Image from "next/image";
import MangoImage from "@/../public/mango.jpg"
import Counter from "@/components/counter";
import { resolve } from "styled-jsx/css";


export default async function Home() {

  await new Promise (resolve=>setTimeout(resolve, 2000))

  const users = await fetch("https://jsonplaceholder.typicode.com/users")
  .then (res=>res.json())
  .then(data=> {
    console.log(data)
    return data;
  });


  console.log("Page Loading");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>My First Next Application</h2>

        <p>{JSON.stringify(users)}</p>


        <Counter></Counter>
        <div className="flex">
          <Image src={"/apples.jpg"} alt="imageofapple" width={200} height={200}></Image>
          <Image src={MangoImage} alt="imageofapple" width={200} height={200}></Image>
        </div>

      </main>
    </div>
  );
}
