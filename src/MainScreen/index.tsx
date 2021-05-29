import React, { useEffect, useState } from 'react'
import chucnorris from '../images/chucnorris.png'
// import styled from 'styled-components'
import './index.css'

const MainScreenView: React.FC = () => {
  const [jokeValue, setJokeValue] = useState('')
  const [firstName, setFirstName] = useState('Chuck')
  const [lastName, setLastName] = useState('Norris')
  // const [jokeWithCategory, setJokeWithCategory] = useState([])
  // const [selectedCategory, setSelecteCategory] = useState([])

  const apiBase = 'https://api.icndb.com/'

  const fetchJoke: any = async (url: string) => {
    const response = await fetch(`${apiBase}${url}`)

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}` + `, received ${response.status}`
      )
    }
    return await response.json()
  }

  // Get joke randomly
  const getRandomJoke: any = async () => {
    setFirstName('')
    setLastName('')
    const joke = await fetchJoke(
      `jokes/random?firstName=${firstName}&lastName=${lastName}`
    )
    return setJokeValue(joke.value.joke)
  }

  useEffect(() => {
    getRandomJoke()
  }, [])

  // // Get joke randomly
  // const getJokeByCategory: any = async (category: string) => {
  //   const joke = await fetchJoke(`jokes/random?category=${category}`)
  //   return setJokeValue(joke.value.joke)
  // }

  // useEffect(() => {
  //   getJokeByCategory()
  // }, [])

  // // Get joke with the selected category
  // const handlingSelectCategory: any = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSelecteCategory(e.target.value)
  // }

  // Get joke with the selected category
  const handlingInputName: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value.split(' ')[0])
    setLastName(e.target.value.substring(firstName.length).trim())
  }

  return (
    <div className='container'>
      <img className='profile' src={chucnorris} alt='chuck norris' />
      <p className='joke_text'>{jokeValue}</p>
      <form className='form_container'>
        <select className='select_category'>
          <option value='defaultValue'>Select a category</option>
          <option value='Explicit'>Explicit</option>
          <option value='Nerdy'>Nerdy</option>
        </select>
        <input
          type='text'
          className='input_name'
          onChange={handlingInputName}
          placeholder='Impersonate Chuck Norris '
        />
      </form>
      <button className='jokeBtn' onClick={getRandomJoke}>
        Draw a random {firstName} {lastName} Joke
      </button>
    </div>
  )
}

export default MainScreenView
