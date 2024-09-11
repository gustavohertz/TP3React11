import React from 'react';

function Resumo({ dados }) {
  return (
    <div>
      <h2>Resumo dos Dados Submetidos:</h2>
      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Email:</strong> {dados.email}</p>
      <p><strong>Endereço:</strong> {dados.endereco}</p>
    </div>
  );
}

export default Resumo;