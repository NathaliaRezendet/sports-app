import React from 'react';

export const AddActivityPage = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      date: formData.get('date'),
    };
    fetch('http://localhost:3000/activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log('Atividade adicionada:', data))
      .catch(error => console.error('Erro ao adicionar atividade:', error));
  };

  return (
    <div>
      <h2>Adicionar Nova Atividade</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Atividade:
          <input type="text" name="name" required />
        </label>
        <label>
          Descrição:
          <textarea name="description" rows="4" required />
        </label>
        <label>
          Data:
          <input type="date" name="date" required />
        </label>
        <button type="submit">Salvar Atividade</button>
      </form>
    </div>
  );
};

export default AddActivityPage;
