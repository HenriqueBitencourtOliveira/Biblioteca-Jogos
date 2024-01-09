import editIcon from "/editIcon.svg";

export default function Game({ title, cover, onRemove, onEdit }) {
  return (
    <div>
      <img src={cover} alt="" />
      <div>
        <h2>{title}</h2>
        <div>
          <button id="editIcon" onClick={onEdit}>
            <img src={editIcon} alt="" />
          </button>
          <button onClick={onRemove}>Remover</button>
        </div>
      </div>
    </div>
  );
}
