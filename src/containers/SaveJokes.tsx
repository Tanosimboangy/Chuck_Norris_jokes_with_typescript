import React, { useState, useContext, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Plus from '../images/plus.svg'
import Minus from '../images/minus.svg'
import { GlobalContext } from '../context/GlobalContext'

interface IBtn {
  pay: string
}

interface Errorbtn {
  error: boolean
}

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
`
const CountingButtons = styled.div<Errorbtn>`
  display: flex;
  margin-right: 8px;
  border-radius: 6px;
  padding: 17px 15px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => (props.error ? '#f39a9a' : '#f5f6f8')};
`
const ImageSource = styled.img``
const IncreaseButton = styled.button<Errorbtn>`
  border-radius: 50%;
  background-color: ${(props) => (props.error ? '#f39a9a' : '#f5f6f8')};
`
const InputJokesValue = styled.input<Errorbtn>`
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
  background-color: ${(props) => (props.error ? '#f39a9a' : '#f5f6f8')};
}
`
const DecreaseButton = styled.button<Errorbtn>`
  border-radius: 50%;
  background-color: ${(props) => (props.error ? '#f39a9a' : '#f5f6f8')};
`
const SaveButtons = styled.button<IBtn>`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.63;
  font-style: normal;
  border-radius: 6px;
  font-stretch: normal;
  letter-spacing: -0.52px;
  padding: 16.8px 0 15.2px 0;
  background: ${(props) => (props.pay === 'true' ? '#34394f' : '#f5f6f8')};
  color: ${(props) => (props.pay === 'true' ? '#ffffff' : '#34394f')};
`
const ErrorText = styled.p`
  color: #f39a9a;
  font-weight: 600;
  margin-top: 12px;
  position: absolute;
  bottom: -32px;
  opacity: 0.6;
  font-weight: 600;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: left;
}
`

const Joke: React.FC = () => {
  const {
    decreaseJoke,
    increaseJoke,
    numberOfJoke,
    selectedCategory,
    firstName,
    lastName,
  } = useContext(GlobalContext)

  const [jokes, setJokes] = useState([])

  const namesFromInput = `firstName=${firstName}&lastName=${lastName}`

  const url = `https://api.icndb.com/jokes/random/${numberOfJoke}?${namesFromInput}&${selectedCategory}`

  const fetchMultiplesJokes = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJokes(data.value)
  }, [url, setJokes])

  useEffect(() => {
    fetchMultiplesJokes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfJoke, firstName, lastName, fetchMultiplesJokes])

  const saveJokeToDownload = () => {
    fetchMultiplesJokes()

    const item = jokes.map(
      (joke: { id: number; joke: string; categories: string[] }) =>
        '-' + joke.joke + '\r\n'
    )
    const textToPrint = item

    const ConvertIntoBLOB = new Blob(textToPrint, { type: 'text/plain' })
    const defaultFileName = 'savedjoke.txt'

    let link = document.createElement('a')
    link.download = defaultFileName

    if (window.webkitURL !== null) {
      link.href = window.webkitURL.createObjectURL(ConvertIntoBLOB)
    } else {
      link.href = window.URL.createObjectURL(ConvertIntoBLOB)
      link.style.display = 'none'
      document.body.appendChild(link)
    }

    link.click()
  }

  return (
    <ButtonsContainer>
      <CountingButtons error={numberOfJoke > 100 ? true : false}>
        <DecreaseButton
          error={numberOfJoke > 100 ? true : false}
          type='button'
          onClick={decreaseJoke}>
          <ImageSource src={Minus} alt='decrease_number_of_joke' />
        </DecreaseButton>
        <InputJokesValue
          error={numberOfJoke > 100 ? true : false}
          type='Text'
          value={numberOfJoke}
          readOnly
        />
        <IncreaseButton
          error={numberOfJoke > 100 ? true : false}
          type='button'
          onClick={increaseJoke}>
          <ImageSource src={Plus} alt='increase_number_of_joke' />
        </IncreaseButton>
      </CountingButtons>
      <SaveButtons
        type='button'
        pay={numberOfJoke > 0 ? 'true' : 'false'}
        disabled={numberOfJoke > 0 && numberOfJoke < 100 ? false : true}
        onClick={saveJokeToDownload}>
        Save Jokes
      </SaveButtons>
      {numberOfJoke > 100 && (
        <ErrorText>You can pick a number from 1 to 100.</ErrorText>
      )}
    </ButtonsContainer>
  )
}

export default Joke
