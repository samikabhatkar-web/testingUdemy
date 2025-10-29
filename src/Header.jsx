export default function Header() {
  const reactDescriptions = ['Crucial', 'Core', 'Fundamental'];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src="./assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
