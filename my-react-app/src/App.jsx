import React from 'react';

function App() {
  // Pwede mong palitan yung laman dito
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>Welcome to my React app using Vite.</p>

      {/* Example: render simple JSX variable */}
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
