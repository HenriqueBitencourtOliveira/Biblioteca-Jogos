import { useState } from "react";
import TextInput from "../TextInput/TextInput";

export default function GameForme({ addGame, filterGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id={title} label="Titulo:" value={title} setValue={setTitle} />
      <TextInput id={cover} label="Capa:" value={cover} setValue={setCover} />

      <button>Adicionar</button>
      <TextInput
        id={query}
        label="Busca:"
        value={query}
        setValue={setQuery}
        onFilter={(inputValue) => filterGame(inputValue)}
      />
    </form>
  );
}
