import React from "react";
import { FaCarSide } from "react-icons/fa";
import TableNumbers from "./tableNumbers";
import TableNumber2 from "./tableNumbers2";
import TableNumber3 from "./tableNumbers3";
import { FaTruckMoving } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
function tabelasVagas() {
  return (
    <div className=" px-10 flex py-28">
      <div className="px-5 bg-white rounded-l-lg py-10 flex flex-col space-x-14  gap-3">
        <div className="px-44 font-bold">
          <h1>Veiculo pequeno</h1>
        </div>
        <div className="px-40">
          <FaCarSide className="text-3xl " />
        </div>
        <div className="px-1">
          <TableNumbers />
        </div>
      </div>
      <div className="px-5 bg-white  py-10 flex flex-col space-x-14  gap-3">
        <div className="px-44 font-bold text-purple-600">
          <h1>Veiculo Grande</h1>
        </div>
        <div className="px-40 text-purple-600">
          <FaTruckMoving className="text-3xl " />
        </div>
        <div className="px-1">
          <TableNumber2 />
        </div>
      </div>
      <div className="px-5 bg-white rounded-r-lg py-10 flex flex-col space-x-14  gap-3">
        <div className="px-44 font-bold text-green-600">
          <h1>Motocicletas</h1>
        </div>
        <div className="px-40 text-green-600">
          <FaMotorcycle className="text-3xl " />
        </div>
        <div className="px-1">
          <TableNumber3 />
        </div>
      </div>
    </div>
  );
}

export default tabelasVagas;
