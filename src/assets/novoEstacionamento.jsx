import React from "react";
import { Link } from "react-router-dom";
function novoEstacionamento() {
  return (
    <div>
      <div className="px-96 m-36 ">
        <div className="bg-white p-20 space-x-14 rounded-lg shadow-lg w-full">
          <form>
            <div className="grid grid-cols-3  gap-10 mb-6">
              <div>
                <label
                  for="categoria"
                  className="block text-sm font-medium text-gray-700"
                >
                  Categorias
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Categorias</option>
                  <option>Veiculo Pequeno</option>
                  <option>Veiculo Médio</option>
                  <option>Veiculo Grande</option>
                </select>
              </div>

              <div>
                <label
                  for="valor_hora"
                  className="block text-sm font-medium text-gray-700"
                >
                  Valor por Hora
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="valor_hora"
                  name="valor_hora"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="vaga"
                  className="block text-sm font-medium text-gray-700"
                >
                  Número da Vaga
                </label>
                <input
                  type="number"
                  id="vaga"
                  name="vaga"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="placa"
                  className="block text-sm font-medium text-gray-700"
                >
                  Placa do Veículo
                </label>
                <input
                  type="text"
                  id="placa"
                  name="placa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="marca"
                  className="block text-sm font-medium text-gray-700"
                >
                  Marca do Veículo
                </label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="">
                <label
                  for="modelo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Modelo do Veículo
                </label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="data_entrada"
                  className="block text-sm font-medium text-gray-700"
                >
                  Data de Entrada
                </label>
                <input
                  type="datetime-local"
                  id="data_entrada"
                  name="data_entrada"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="data_saida"
                  className="block text-sm font-medium text-gray-700"
                >
                  Data de Saída
                </label>
                <input
                  type="datetime-local"
                  id="data_saida"
                  name="data_saida"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="tempo_decorrido"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tempo Decorrido
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="tempo_decorrido"
                  name="tempo_decorrido"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/estacionar">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800"
                >
                  Salvar
                </button>
              </Link>
              <Link to="/estacionar">
                {" "}
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  Voltar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default novoEstacionamento;
