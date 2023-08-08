/* eslint-disable react/prop-types */
// import styles from "./Input.module.css";
const InputText = ({
  value,
  onChange,
  placeholder,
  searchHandler,
  error,
  loading,
  onKeyPress,
}) => {
  return (
    <div className="inputbox-button">
      <h1>GitHub User Finder</h1>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button id="data-btn" onClick={searchHandler} disabled={loading}>
        Search
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default InputText;
