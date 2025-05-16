import useLight from "../../hooks/ThemeProvider";
import "./ToggleTheme.css";

function ToggleTheme() {
  const { light, setLight } = useLight();
  return (
    <label className="toggle">
      <input
        className="toggle-checkbox"
        type="checkbox"
        onClick={() => setLight(!light)}
      />
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;
