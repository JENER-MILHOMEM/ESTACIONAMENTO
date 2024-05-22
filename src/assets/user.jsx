import React from "react";
import TabelaMensalista from "./tabelaMensalista";
import TabelasVagasEstacionamento from "../componetes/tabelasVagasEstacionamento";
function user() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex flex-col px-20 pt-11">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
            alt="user"
            className="rounded-full w-64 border border-black"
          />

          <div className="pt-7 px-11 text-4xl">
            <h1>USER NAME</h1>
          </div>
          <div className="px-16 py-5">
            <button className="bg-slate-600 text-white px-2 py-1">
              editar seu perfil
            </button>
          </div>
        </div>

        <div className="pl-64 flex flex-col">
          <h1 className="text-4xl px-24 pt-11 font-bold">seus mensalista</h1>
          <TabelaMensalista />
        </div>
      </div>
      <div className="pb-1 px-11 pt-9 text-center flex flex-col gap-2">
        <h1 className="text-2xl  font-bold ">Situações De Vagas Do Dia </h1>
        <TabelasVagasEstacionamento />
      </div>
    </div>
  );
}

export default user;
