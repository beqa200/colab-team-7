import { useContext } from "react";
import { DataType, MycontextType } from "../type";
import { MyContext } from "../Layout";

export default function Cart() {
  const { Data } = useContext<MycontextType>(MyContext);
  return (
    <>
      <main className="bg-black">
        <section>
          {Data.map((item: DataType) => {
            <h2 className="font-black">{item.Name}</h2>;
          })}
        </section>
      </main>
    </>
  );
}
 