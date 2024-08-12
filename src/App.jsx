import "./App.css";
import usePortal from "./components/portal/usePortal";

function App() {
  const { openPortal, closePortal, isOpen, Portal } = usePortal();
  return (
    <div className="App">
      <>
        <button onClick={openPortal}>Открыть модальное окно</button>
        {isOpen && (
          <Portal>
            <div className="bgpopup">
              <div className="popup">
                <h2>Модальное окно</h2>
                <button onClick={closePortal}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.8629 9.4597L10.9571 9.54289L18 16.585L25.0429 9.54289C25.4334 9.15237 26.0666 9.15237 26.4571 9.54289C26.8176 9.90338 26.8453 10.4706 26.5403 10.8629L26.4571 10.9571L19.415 18L26.4571 25.0429C26.8476 25.4334 26.8476 26.0666 26.4571 26.4571C26.0966 26.8176 25.5294 26.8453 25.1371 26.5403L25.0429 26.4571L18 19.415L10.9571 26.4571C10.5666 26.8476 9.93342 26.8476 9.54289 26.4571C9.18241 26.0966 9.15468 25.5294 9.4597 25.1371L9.54289 25.0429L16.585 18L9.54289 10.9571C9.15237 10.5666 9.15237 9.93342 9.54289 9.54289C9.87334 9.21245 10.3775 9.16161 10.7614 9.39038L10.8629 9.4597Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Portal>
        )}
      </>
    </div>
  );
}

export default App;
