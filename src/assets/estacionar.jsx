import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { CiBookmarkRemove } from "react-icons/ci";
import TabelasVagas from "../componetes/tabelasVagasEstacionamento";
import { Link } from "react-router-dom";
function estacionar() {
  return (
    <>
      <div className="px-20 pt-20 ">
        <div>
          <div className="pr-20">
            <Link to="/novoEstacionar">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Novo
              </button>
            </Link>
          </div>
          <br />
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center pl-8 gap-2">
              <select
                id="categoria"
                name="categoria"
                className="rounded-md  border-gray-300 p-1"
              >
                <option>3</option>
                <option>2</option>
                <option>1</option>
                <option>#</option>
              </select>
              <label For="categoria" className="block text-sm font-medium mr-2">
                Resultados por página
              </label>
            </div>
            <div className="flex items-center pr-8">
              <span className="mr-2">Pesquisar</span>
              <input
                type="text"
                className="border-solid border-2 border-gray-400 rounded-sm"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-white">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Categoria</th>
                  <th className="px-4 py-2">Valor Hora</th>
                  <th className="px-4 py-2">Placa</th>
                  <th className="px-4 py-2">Forma de Pagamento</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    1
                  </td>
                  <td className="text-center border px-4 py-2  border-none bg-white">
                    Veículo pequeno
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    R$ 10,00
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    ABC0102
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    Cartão
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    <span className="bg-green-500 text-white rounded-full px-3 py-1 border-none cursor-pointer ">
                      Pago
                    </span>
                  </td>
                  <td className="flex justify-center gap-6 border px-4 py-2 border-none bg-white">
                    <FaCopy className="text-2xl" />{" "}
                    <IoEyeSharp className="text-sky-400 text-2xl" />{" "}
                    <CiBookmarkRemove className="text-red-500 text-2xl" />
                  </td>
                </tr>
                <tr className="border">
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    2
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    Veículo grande
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    R$ 30,00
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    AKW2132
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    Dinheiro
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    <span className="bg-green-500 text-white rounded-full px-3 py-1 border-none cursor-pointer ">
                      Pago
                    </span>
                  </td>
                  <td className="flex justify-center gap-6 border px-4 py-2 border-none bg-white">
                    <FaCopy className="text-2xl" />{" "}
                    <IoEyeSharp className="text-sky-400 text-2xl" />{" "}
                    <CiBookmarkRemove className="text-red-500 text-2xl" />
                  </td>
                </tr>
                <tr className="border">
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    3
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    Veículo pequeno
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    R$ 10,00
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    JCZ0142
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    Cartão
                  </td>
                  <td className="text-center border px-4 py-2 border-none bg-white">
                    <span className="bg-green-500 text-white rounded-full px-3 py-1 border-none cursor-pointer">
                      Pago
                    </span>
                  </td>
                  <td className="flex justify-center gap-6 border px-4 py-2 border-none bg-white">
                    <FaCopy className="text-2xl" />{" "}
                    <IoEyeSharp className="text-sky-400 text-2xl" />{" "}
                    <CiBookmarkRemove className="text-red-500 text-2xl" />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between items-center p-2">
              <div className="flex items-center pl-8 gap-2">
                <label
                  For="categoria"
                  className="block text-sm font-medium mr-2 bg-white px-2 py-1 rounded-sm"
                >
                  Mostrando de 1 até 3 de 10 registros
                </label>
              </div>
              <div className="">
                <thead>
                  <tr className=" flex gap-4">
                    <th className="px-4 py-2 bg-white hover:bg-slate-200 rounded-3xl cursor-pointer">
                      Anterior
                    </th>
                    <th className="px-4 py-2 bg-white hover:bg-slate-200 rounded-3xl cursor-pointer">
                      1
                    </th>
                    <th className="px-4 py-2 bg-white hover:bg-slate-200 rounded-3xl cursor-pointer">
                      2
                    </th>
                    <th className="px-4 py-2 bg-white hover:bg-slate-200 rounded-3xl cursor-pointer">
                      3
                    </th>
                    <th className="px-4 py-2 bg-white hover:bg-slate-200 rounded-3xl cursor-pointer">
                      4
                    </th>
                    <th className="px-4 py-2 bg-white hover:bg-slate-200 rounded-3xl cursor-pointer">
                      Próximo
                    </th>
                  </tr>
                </thead>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <TabelasVagas />
        </div>
      </div>
    </>
  );
}
export default estacionar;
