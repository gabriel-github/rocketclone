import React from "react";

import GlobalStyles from "./components/GlobalStyle/style";
import Navbar from './components/Navbar'

import BoardTheRocket from './components/BoardTheRocket'
import ImageMain from './components/ImageMain'

import Sponsors from './components/Sponsors'
import Conection from './components/Conection'

import Reward from './components/Reward'
import Devs from './components/Devs'

import Alert from './components/Alert'
import Journey from './components/Journey'

import Footer from './components/Footer'

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
      <Alert/>
      <Journey/>
      <Footer/>
    </>
  );
}

export default App;
