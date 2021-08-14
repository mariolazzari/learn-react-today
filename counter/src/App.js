import { createContext, useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("red");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter class
      <Counter initialCount={0} />
      Counter hooks
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme(prevTheme => (prevTheme === "red" ? "blue" : "red"))
        }
      >
        Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
