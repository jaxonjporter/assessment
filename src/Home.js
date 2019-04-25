import React from 'react';
import styled from 'styled-components'

const Home = () => {

  return(
    <All>
    <Middle>
      <EH>Star Wars</EH>
    </Middle>
    <Middle>
      <Mid>An Encyclopedia</Mid>

    </Middle>
    </All>
  )
}

const Middle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
`
const All = styled.div`
  margin-top: 20%;
`

const EH = styled.h1`
  font-size: 3em;
  color: yellow;
`

const Mid = styled.h3`
  color: yellow;
  display: block;
  font-size: 1em;

`

export default Home