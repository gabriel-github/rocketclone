import React from "react";

import GlobalStyles from "./components/GlobalStyle/style";
import Navbar from './components/Navbar'

import BoardTheRocket from './components/BoardTheRocket'
import ImageMain from './components/ImageMain'

import Sponsors from './components/Sponsors'
import Conection from './components/Conection'

import Reward from './components/Reward'
import Devs from './components/Devs'

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar/>
      <BoardTheRocket/>
      <ImageMain/>
      <Sponsors/>
      <Conection/>
      <Reward/>
      <Devs/>
    </>
  );
}

export default App;
