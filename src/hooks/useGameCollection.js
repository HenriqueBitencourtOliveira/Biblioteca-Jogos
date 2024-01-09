// useGameCollection.js

import { useState } from "react";

const useGameCollection = () => {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  const [gameSelect, setGameSelect] = useState();
  const [editForm, setEditForm] = useState(false)
  const [filter, setFilter] = useState("");
  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const updateGame = ({ id, title, cover }) => {
    setGames((state) => {
      const newState = state.map((game) =>
        game.id === id ? { ...game, title, cover } : game
      );
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const filterGame = (title) => {
    const query = games.filter((game) =>
      typeof game.title === 'string' &&
      game.title.toLowerCase().includes(title.toLowerCase())
    );

    return query;
  };

  const handleEdit = (gameId) => {
    const games = filterGame("").find((game) => game.id === Number(gameId));
    setGameSelect(games);
    setEditForm(true);
  };

  const handleUpdate = (gameId, newTitle, newCover) => {
    const updatedGames = filterGame("").map((game) =>
      game.id === gameId
        ? {
          ...game,
          title: newTitle,
          cover: newCover,
        }
        : game
    );
    updateGame({ id: gameId, title: newTitle, cover: newCover });
    setEditForm(false);
  };


  return {
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
  };
};

export default useGameCollection;
