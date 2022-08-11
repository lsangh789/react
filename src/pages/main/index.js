import React, { useState } from 'react';
import Gnb from './components/Gnb';
import Header from './components/Header';
import Container from './components/Container'
import Content from './components/Content'

import '../main/css/root.css';

function Main() {
  return (
    <>
      <Gnb />
      <Container>
        <Header />
        <Content />
      </Container>
    </>
    
  );
}

export default Main;
