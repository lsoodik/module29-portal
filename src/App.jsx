import "./App.css";
import usePortal from "./components/portal/usePortal";

function App() {
  const { openPortal, closePortal, isOpen, Portal } = usePortal();
  return (
    <div className="App">
      <>
        <button onClick={openPortal}>Открыть портал</button>
        {isOpen && (
          <Portal>
            <p>
              Ого,  да это ваш собственный портал!
            </p>
            <button onClick={closePortal}>Закрыть портал </button>
          </Portal>
        )}
      </>
    </div>
  );
}

export default App;
