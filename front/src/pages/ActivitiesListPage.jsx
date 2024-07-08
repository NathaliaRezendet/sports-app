import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ActivitiesListPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('http://localhost:3000/activity');
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Erro ao buscar atividades:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Lista de Atividades</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              <p>Nome: {activity.name}</p>
              <p>Descrição: {activity.description}</p>
              <p>Data: {activity.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando atividades...</p>
      )}
      <Link to="/add">
        <button>Adicionar Atividade</button>
      </Link>
    </div>
  );
};

export default ActivitiesListPage;
