import React from "react";
import { PiGarageFill } from "react-icons/pi";
import { FaArrowsAltH } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

function tabelas() {
  return (
    <div className="px-32 flex space-x-14">
      <div className="flex flex-col bg-white pr-3 pb-7 text-blue-900 rounded-lg">
        <div className="flex pt-2 pl-2 ">
          <PiGarageFill className="m-1 text-5xl " />
          <div className="flex flex-col">
            <h1>total de vagas</h1>
            <h1 className="font-bold">200</h1>
          </div>
        </div>
        <div className="flex pt-14 px-5 space-x-10">
          <h1>
            Livre{" "}
            <span className="bg-blue-900 text-white rounded-lg px-2 py-0.5">
              194
            </span>
          </h1>
          <FaArrowsAltH className="m-1" />
          <h1>
            Ocupadas{" "}
            <span className="bg-blue-900 text-white rounded-lg px-2 py-0.5">
              6
            </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col bg-white pr-3 pb-7 text-blue-500 rounded-lg">
        <div className="flex pt-2 pl-2 ">
          <SiCashapp className="m-1 text-4xl " />
          <div className="flex flex-col">
            <h1>Mensais</h1>
            <h1 className="font-bold">R$ 670.00</h1>
          </div>
        </div>
        <div className="flex pt-14 px-5 space-x-10 m-1">
          <h1>
            Pagas{" "}
            <span className="bg-blue-500 text-white rounded-lg px-2 py-0.5">
              3
            </span>
          </h1>
          <FaArrowsAltH className="m-1" />
          <h1>
            Abertas{" "}
            <span className="bg-blue-500 text-white rounded-lg px-2 py-0.5">
              2
            </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col bg-white pr-3 pb-7 text-green-600 rounded-lg">
        <div className="flex pt-2 pl-2 ">
          <BsCash className="m-1 text-4xl " />
          <div className="flex flex-col">
            <h1>Avulsos</h1>
            <h1 className="font-bold">R$ 1170.00</h1>
          </div>
        </div>
        <div className="flex pt-14 px-5 space-x-10 m-1">
          <h1>
            Pagas{" "}
            <span className="bg-green-600 text-white rounded-lg px-2 py-0.5">
              2
            </span>
          </h1>
          <FaArrowsAltH className="m-1" />
          <h1>
            Abertas{" "}
            <span className="bg-green-600 text-white rounded-lg py-0.5 px-2">
              5
            </span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col bg-white pr-3 pb-7 text-purple-600 rounded-lg">
        <div className="flex pt-2 pl-2 ">
          <HiUserGroup className="m-1 text-4xl " />
          <div className="flex flex-col">
            <h1>Mensalistas</h1>
            <h1 className="font-bold">4</h1>
          </div>
        </div>
        <div className="flex pt-14 px-5 space-x-10 m-1">
          <h1>
            Ativos{" "}
            <span className="bg-purple-600 text-white rounded-lg px-2 py-0.5">
              2
            </span>
          </h1>
          <FaArrowsAltH className="m-1" />
          <h1>
            Inativos{" "}
            <span className="bg-purple-600 text-white rounded-lg px-2 py-0.5">
              5
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default tabelas;
