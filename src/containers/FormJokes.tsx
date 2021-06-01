import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'

const FormContainer = styled.form`
  width: 100%;
  display: grid;
`
const SelectCategory = styled.select`
  width: 100%;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  line-height: 1.63;
  font-style: normal;
  border-radius: 6px;
  font-stretch: normal;
  margin: 0px 0 16px 0;
  letter-spacing: -0.52px;
  border: 2px solid #34394f;
  background-color: #ffffff;
  padding: 16.8px 0 15.2px 16px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`
const InputName = styled.input`
  outline: none;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  line-height: 1.63;
  font-style: normal;
  border-radius: 6px;
  margin: 0 0 32px 0;
  font-stretch: normal;
  letter-spacing: -0.52px;
  border: 2px solid #34394f;
  background-color: #ffffff;
  padding: 16.8px 0 15.2px 16px;
`
const JokeButton = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.63;
  font-style: normal;
  border-radius: 6px;
  margin: 0 0 52px 0;
  padding-top: 16.8px;
  font-stretch: normal;
  padding-bottom: 16.8px;
  letter-spacing: -0.52px;
  background-color: #34394f;
`

const Joke: any = ({}) => {
  const {
    firstName,
    lastName,
    getRandomJoke,
    impersonateName,
    // handlingSelectCategory,
    handlingInputName,
  } = useContext(GlobalContext)

  return (
    <FormContainer>
      <SelectCategory
        // onChange={handlingSelectCategory}
        placeholder='Select a category'>
        <option value='Explicit'>Explicit</option>
        <option value='Nerdy'>Nerdy</option>
      </SelectCategory>
      <InputName
        type='text'
        value={impersonateName}
        onChange={handlingInputName}
        placeholder='Impersonate Chuck Norris '
      />
      <JokeButton type='button' onClick={getRandomJoke}>
        Draw a random {firstName} {lastName} Joke
      </JokeButton>
    </FormContainer>
  )
}

export default Joke
