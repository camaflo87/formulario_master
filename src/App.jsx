import "./App.css";
import Formulario from "./Components/Formulario";
import Promo from "./Components/Promo";

function App() {
  return (
    <>
      <section className="app__section">
        <h1 className="app__title">Learn to code by watching others</h1>
        <p className="app__texto">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </section>
      <main className="app__main">
        <Promo />
        <Formulario />
      </main>
    </>
  );
}

export default App;
