import { IoMdCloseCircle } from "react-icons/io";
import KhaltiCheckout from "khalti-checkout-web";
import React from "react";
import config from "./KhaltiConfig";
import { useStateContext } from "../../ContextProvider/ContextProvider";

const Khalti = ({ price }) => {
  const { payment, set_payment } = useStateContext();
  let checkout = new KhaltiCheckout(config);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center align-center">
      <div className="flex relative items-center justify-center bg-white rounded-xl p-[200px]">
        <div
          onClick={() => {
            set_payment(false);
          }}
          className="absolute top-0 right-0 p-6 text-black"
        >
          <IoMdCloseCircle size={30} />
        </div>
        <div
          className="text-white p-4 rounded-[100px] bg-[#2D055C]"
          onClick={() => {
            checkout.show({ amount: price * 100 });
          }}
        >
          pay via Khalti
        </div>
      </div>
    </div>
  );
};

export default Khalti;
