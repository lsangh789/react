import React, { useState } from 'react';
import Gnb from './components/Gnb';
import Header from './components/Header';
import Container from './components/Container'
import SearchWrap from './components/SearchWrap';
import SubContent from './contents/SubContent';

import '../main/css/root.css';


function Main() {
  return (
    <>
      <Gnb />
      <Container>
        <Header />
        <SearchWrap />

      </Container>
    </>
    
  );
}

export default Main;
