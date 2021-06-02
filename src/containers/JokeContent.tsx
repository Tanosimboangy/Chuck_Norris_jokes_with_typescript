import React, { useContext } from 'react'
import chucknorris from '../images/chucknorris.png'
// import personal_image from '../images/personal_image.png'
import { GlobalContext } from '../context/GlobalContext'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 24px;
`
const JokeText = styled.p`
  font-size: 18px;
  color: #34394f;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
`

const JokeContent: any = () => {
  const { randomJoke } = useContext(GlobalContext)

  // {firstName === "Chuck" && lastName === 'Norris' ? (
  //   <img className='profile' src={personal_image} alt='personal_image' />
  //   ) : (
  //     <img className='profile' src={chucnorris} alt='Chuck Norris' />
  //   )
  // }

  return (
    <div>
      <Image className='profile' src={chucknorris} alt='Chuck Norris' />
      {randomJoke.joke === '' ? (
        <JokeText>Loading...</JokeText>
      ) : (
        <JokeText
          className='joke_text'
          dangerouslySetInnerHTML={{ __html: randomJoke.joke }}></JokeText>
      )}
    </div>
  )
}

export default JokeContent
