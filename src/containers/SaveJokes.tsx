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
  max-width: 146px;
  margin-right: 8px;
  border-radius: 6px;
  padding-left: 17px;
  padding-right: 17px;
  align-items: center;
  flex-direction: row;
  background-color: #f5f6f8;
  justify-content: space-between;
`
const ImageSource = styled.img``
const IncreaseButton = styled.button`
  border-radius: 50%;
  margin-left: 21px;
`
const DecreaseButton = styled.button`
  margin-right: 21px;
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
        <p className='jokes_number--value'>{numberOfJoke}</p>
        <IncreaseButton type='button' onClick={increaseJoke}>
          <ImageSource src={Plus} alt='increase number joke' />
        </IncreaseButton>
      </CountingButtons>
      <SaveButtons type='button'>Save Jokes</SaveButtons>
    </ButtonsContainer>
  )
}

export default Joke
