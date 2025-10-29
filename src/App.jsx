import { CORE_CONCEPTS } from "./app.js";
import Header from "./Header.jsx";
import CoreConcept from "./CoreConcept.jsx";  // ← already imported

const reactDescriptions = ["Crucial", "Core", "Fundamental"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul>
          <h2>Time to get started!</h2>
        </section>

        <section id="examples-to-follow-along">
          <h2>Examples to follow along</h2>
          <menu>{/* Add example buttons or links here later */}</menu>
        </section>
      </main>
    </div>
  );
}

export default App;
