const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomElement = (arr) => {
  return arr[getRandomInt(arr.length)];
}

const generateCode = () => {
  const code = [
    "import React from 'react';",
    "import ReactDOM from 'react-dom';",
    "import './styles.css';",
    "",
    "function App() {",
    "  return (",
    "    <div>",
    "      <h1>Hello World</h1>",
    "    </div>",
    "  );",
    "}",
    "",
    "ReactDOM.render(<App />, document.getElementById('root'));",
  ].join('\n');

  return code;
}
