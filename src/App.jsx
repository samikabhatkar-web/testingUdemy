import { CORE_CONCEPTS } from "./app.js";
import Header from "./Header.jsx";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx"; 

function App() {
  function handleSelect(selectedButton) {
    // selectedButton is string to identify which tab was selected
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))} 
          </ul>
          <h2>Time to get started!</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Overview</TabButton>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('components')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('components')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('components')}>State</TabButton>
          </menu>
            Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
