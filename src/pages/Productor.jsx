import { useParams } from 'react-router-dom';
import React from 'react';
export function Productor() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold">Perfil del Productor</h1>
      <p className="mt-4">ID del productor: {id}</p>
    </div>
  );
}
