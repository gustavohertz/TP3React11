import React, { useState } from 'react';
import Formulario from './Formulario';
import Resumo from './Resumo';

function App() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    endereco: ''
  });

  const handleSubmit = (formData) => {
    setDados(formData);
  };

  return (
    <div>
      <h1>Formulário e Resumo</h1>
      <Formulario onSubmit={handleSubmit} />
      <Resumo dados={dados} />
    </div>
  );
}

export default App;