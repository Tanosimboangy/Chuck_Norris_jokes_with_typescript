import React from 'react'
import styled from 'styled-components'
import FormJokes from './FormJokes'
import JokeContent from './JokeContent'
import SaveJokes from './SaveJokes'

const Container = styled.div`
  background-color: #f9f9f9;
`
const Wrapper = styled.div`
  display: flex;
  max-width: 555px;
  max-height: 704px;
  margin: auto;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 98 px;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
`
const MainScreenView: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <JokeContent />
        <FormJokes />
        <SaveJokes />
      </Wrapper>
    </Container>
  )
}

export default MainScreenView
