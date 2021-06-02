import React, { useContext } from 'react'
import styled from 'styled-components'
import Plus from '../images/plus.svg'
import Minus from '../images/minus.svg'
import { GlobalContext } from '../context/GlobalContext'

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const CountingButtons = styled.div`
  display: flex;
  margin-right: 8px;
  border-radius: 6px;
  padding: 17px 15px;
  align-items: center;
  flex-direction: row;
  background-color: #f5f6f8;
  justify-content: space-between;
`
const ImageSource = styled.img``
const IncreaseButton = styled.button`
  border-radius: 50%;
`
const InputJokesValue = styled.input`
  width: 50px;
  font-weight: 
  color: #34394f;
  font-size: 18px;
  text-align: center;
  line-height: 1.44;
  letter-spacing: -0.52px;
  background-color: #f5f6f8;
  border: none;
  outline: none;

}
`
const DecreaseButton = styled.button`
  border-radius: 50%;
`
const SaveButtons = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.63;
  font-style: normal;
  border-radius: 6px;
  font-stretch: normal;
  letter-spacing: -0.52px;
  background-color: #f5f6f8;
  padding: 16.8px 0 15.2px 0;
`

const Joke: React.FC = () => {
  const { decreaseJoke, increaseJoke, numberOfJoke } = useContext(GlobalContext)

  return (
    <ButtonsContainer>
      <CountingButtons>
        <DecreaseButton type='button' onClick={decreaseJoke}>
          <ImageSource src={Minus} alt='decrease number joke' />
        </DecreaseButton>
        <InputJokesValue type='Text' value={numberOfJoke} />
        <IncreaseButton type='button' onClick={increaseJoke}>
          <ImageSource src={Plus} alt='increase number joke' />
        </IncreaseButton>
      </CountingButtons>
      <SaveButtons type='button'>Save Jokes</SaveButtons>
    </ButtonsContainer>
  )
}

export default Joke
