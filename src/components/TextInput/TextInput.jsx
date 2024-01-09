export default function TextInput({ id, label, value, setValue, onFilter }) {
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onFilter) {
      onFilter(e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        name="title"
        id={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
