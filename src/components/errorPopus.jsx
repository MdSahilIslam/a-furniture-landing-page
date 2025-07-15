import { useContext } from "react";
import { furniture_store } from "../store/store";

function ErrorPopup() {
  const { handleSetNull } = useContext(furniture_store);

  return (
    <div className="fixed bg-black/50 h-screen w-full z-[100] flex justify-center items-center">
      <div className="pop-h h-80 w-72 rounded-xl bg-white flex flex-col justify-center items-center">
        <div>
          <div className="error-tick">
            <div className="error-div">
              <div className="error-mark"></div>
              <div className="error-dot"></div>
            </div>
          </div>
        </div>
        <h1 className=" text-3xl font-bold text-center mx-4 my-4">
          Oops! <br />
          Item Alredy Exist in Cart
        </h1>
        <button
          className="text-xl bg-blue-500 h-9 w-16 rounded-full"
          onClick={handleSetNull}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
