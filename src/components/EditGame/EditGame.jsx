import React, { useState } from "react";

export default function EditGameForm({ id, title, cover, onCancel, onUpdate }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newCover, setNewCover] = useState(cover);

  const handleUpdate = () => {
    onUpdate(id, newTitle, newCover);
    
    onCancel();
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="newTitle">Novo Título:</label>
          <input
            type="text"
            id="newTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="newCover">Nova Capa:</label>
          <input
            type="text"
            id="newCover"
            value={newCover}
            onChange={(e) => setNewCover(e.target.value)}
          />
        </div>
        <button id="updateButton" onClick={handleUpdate}>
          Atualizar
        </button>
        <button id="cancelButton" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </>
  );
}
