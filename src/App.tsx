import React from 'react';

import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="App">
      <Game width={10} height={10} bombs={10} />
    </div>
  );
};

export default App;
