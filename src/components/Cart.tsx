import { Key, useContext } from "react";
import { DataType, MycontextType } from "../type";
import { MyContext } from "../Layout";
import { Link } from "react-router-dom";

export default function Cart() {
  const { Show, setShow, Data, Counter, setCounter } =
    useContext<MycontextType>(MyContext);

  const Decrement = () => {
    if (Counter > 1) {
      setCounter(Counter - 1);
    }
  };

  const deleteProduct = () => {
    setShow(false);
  };

  return (
    <main className="w-full h-screen bg-gray-400">
      <header className="flex justify-center items-center mb-[70px]">UI</header>
      <section>
        <div>
          <Link to={"/"}>
            <h2 className="text-white">Home / Cart</h2>
          </Link>

          {Show ? (
            Data.length > 0 ? (
              Data.map((item: DataType, index: Key | null | undefined) => (
                <div key={index} className="flex flex-row">
                  <img
                    className="w-[60px] h-[60px] mr-[16px]"
                    src={item.img}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h2 className="text-white">{item.Name}</h2>
                    <span>{item.Price}</span>
                  </div>
                  <div className="bg-[#F1F1F1] flex justify-center items-center">
                    <button
                      onClick={Decrement}
                      className="w-[16px] opacity-25 mr-[21px]">
                      -
                    </button>
                    <span className="w-[16px] text-[#000] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                      {Counter}
                    </span>
                    <button
                      onClick={() => setCounter(Counter + 1)}
                      className="w-[16px] opacity-25 ml-[21px] mr-[21px]">
                      +
                    </button>
                    <svg
                      onClick={deleteProduct}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      version="1.1"
                      width="24px"
                      height="24px"
                      viewBox="0 0 408.483 408.483">
                      <g>
                        <g>
                          <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z" />
                          <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <div>No Data Available</div>
            )
          ) : (
            <div>Product deleted successfully!</div>
          )}
        </div>
      </section>
    </main>
  );
}
