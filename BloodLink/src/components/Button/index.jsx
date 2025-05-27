import "./styles.css";

export function Button({ children, onClick, type = "primary", disabled = false }) {
  return (
    <button
      className={`btn ${type} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
