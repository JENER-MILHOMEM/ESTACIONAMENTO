import React from "react";
import { FaCar } from "react-icons/fa";
import Tabelas from "../componetes/tabela";
import TabelasVagas from "../componetes/tabelaVagas";
function home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="px-7 m-3 flex">
        <FaCar className="text-4xl text-slate-100 bg-slate-600 w-10 rounded-sm m-1 shadow-md" />
        <div className="px-4 font-semibold flex flex-col text-xl">
          <h1>Controle de estacionamento</h1>
          <div className="text-xs font-normal px-2">
            <h2>seja bem vindo ao estacionamento</h2>
          </div>
        </div>
      </div>
      <div>
        <Tabelas />
      </div>
      <div>
        <TabelasVagas />
      </div>
    </div>
  );
}

export default home;
