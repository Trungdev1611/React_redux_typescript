import "./App.css";
import { UseContextValue2 } from "./context/Context2";
import { UseContextValue } from "./context/ContextMain";

function App() {
  const countContext = UseContextValue();
  const countContext2 = UseContextValue2();
  return (
    <>
      <div className="box">
        <h4>Giá trị của context name là: {countContext.name}</h4>
        <h4>Giá trị của context place là: {countContext.place}</h4>
      </div>

      <div className="box">
        <h4>Giá trị của context name là: {countContext2.name}</h4>
        <h4>Giá trị của context place là: {countContext2.place}</h4>
      </div>
    </>
  );
}

export default App;
