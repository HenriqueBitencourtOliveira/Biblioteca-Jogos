import React, { useState } from "react";
import GameForm from "./components/GameForm/GameForm";
import Game from "./components/Game/Game";
import useGameCollection from "./hooks/useGameCollection";
import EditGameForm from "./components/EditGame/EditGame";

function App() {
  const {
    addGame,
    removeGame,
    filterGame,
    handleEdit,
    handleUpdate,
    gameSelect,
    editForm,
    setEditForm,
    filter,
    setFilter
  } = useGameCollection();
  
  const filteredGames = filterGame(filter);

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>

      <GameForm addGame={addGame} filterGame={setFilter} />

      {editForm && gameSelect && (
        <EditGameForm
          id={gameSelect.id}
          title={gameSelect.title}
          cover={gameSelect.cover}
          onCancel={() => setEditForm(false)}
          onUpdate={handleUpdate}
        />
      )}
      
      <div className="games">
        {filteredGames.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
            onEdit={() => handleEdit(game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
