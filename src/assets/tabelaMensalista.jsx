import React from "react";

const TabelaMensalista = () => {
  const data = [
    { nome: "João Silva", valor: "R$ 200,00", data: "01/05/2024" },
    { nome: "Maria Oliveira", valor: "R$ 250,00", data: "02/05/2024" },
    { nome: "Carlos Pereira", valor: "R$ 300,00", data: "03/05/2024" },
    { nome: "Ana Costa", valor: "R$ 150,00", data: "04/05/2024" },
    { nome: "Pedro Almeida", valor: "R$ 350,00", data: "05/05/2024" },
  ];

  return (
    <div className="container mx-auto p-11">
      <h1 className="text-2xl font-bold mb-4 text-center">Mensalista</h1>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nome</th>
            <th className="py-2 px-4 border-b">Valor</th>
            <th className="py-2 px-4 border-b">Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.nome}</td>
              <td className="py-2 px-4 border-b">{item.valor}</td>
              <td className="py-2 px-4 border-b">{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaMensalista;
