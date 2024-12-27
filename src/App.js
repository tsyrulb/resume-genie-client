// App.js
import React from 'react';
import { useAppLogic } from './AppLogic';
import AppUI from './AppUI';

function App() {
  const logic = useAppLogic();
  return <AppUI {...logic} />;
}

export default App;
