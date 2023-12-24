import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HennisHunt } from './Hunt/Index';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HennisHunt />
      </ChakraProvider>
    </div>
  );
}

export default App;
