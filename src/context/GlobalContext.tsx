import { createContext, useEffect, useState } from 'react'

// var randomJoke: {
//   id: number
//   joke: string
//   categories: string[]
// }

var numberOfJoke: 0

interface names {
  randomJoke: {
    id: number
    joke: string
    categories: string[]
  }
  numberOfJoke: any
  impersonateName: string
  firstName: string
  lastName: string
  fetchJoke: () => {}
  getRandomJoke: () => {}
  handlingSelectCategory: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlingInputName: (e: React.ChangeEvent<HTMLInputElement>) => void
  decreaseJoke: any
  increaseJoke: any
}

const initialValues: names = {
  randomJoke: {
    id: 37,
    joke: '',
    categories: [],
  },
  numberOfJoke: 0,
  impersonateName: '',
  firstName: '',
  lastName: '',
  fetchJoke: async () => {},
  getRandomJoke: async () => {},
  handlingSelectCategory: async () => {},
  handlingInputName: async () => {},
  decreaseJoke: async () => {},
  increaseJoke: async () => {},
}

const GlobalContext = createContext(initialValues)

const GlobalProvider: React.FC = ({ children }) => {
  const [randomJoke, setRandomJoke] = useState(initialValues.randomJoke)
  const [impersonateName, setImpersonateName] = useState(
    initialValues.impersonateName
  )
  const [firstName, setFirstName] = useState<string>('Chuck')
  const [lastName, setLastName] = useState<string>('Norris')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [countJokesNumber, setCountJokesNumber] = useState(
    initialValues.numberOfJoke
  )

  const apiBase: any = 'https://api.icndb.com/'

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
  const getRandomJoke = async () => {
    if (selectedCategory !== '') {
      const joke = await fetchJoke(`jokes/random?category=${selectedCategory}`)
      return setRandomJoke(joke.value.joke)
    } else if (impersonateName !== '') {
      const joke = await fetchJoke(
        `jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
      return setRandomJoke(joke.value)
    } else if (selectedCategory !== '' && impersonateName !== '') {
      const joke = await fetchJoke(
        `jokes/random?category=${selectedCategory}&firstName=${firstName}&lastName=${lastName}`
      )
      return setRandomJoke(joke.value.joke)
    } else {
      const joke = await fetchJoke('jokes/random?')
      return setRandomJoke(joke.value)
    }
  }

  useEffect(() => {
    getRandomJoke()
  }, [])

  // Get joke with the selected category
  const handlingSelectCategory = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedCategory(e.target.value)
  }
  // Get joke with the selected category
  const handlingInputName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpersonateName(e.target.value)
    setFirstName(impersonateName.split(' ')[0])
    setLastName(impersonateName.slice(1).trim())
  }

  // Increase joke number
  const decreaseJoke = () => {
    if (countJokesNumber > 0) {
      setCountJokesNumber(countJokesNumber - 1)
    }
  }
  // Decrease joke number
  const increaseJoke = () => {
    setCountJokesNumber(countJokesNumber + 1)
  }

  return (
    <GlobalContext.Provider
      value={{
        randomJoke,
        fetchJoke,
        numberOfJoke,
        impersonateName,
        firstName,
        lastName,
        getRandomJoke,
        handlingSelectCategory,
        handlingInputName,
        decreaseJoke,
        increaseJoke,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
export { GlobalContext, initialValues, GlobalProvider }
