import { createContext, useCallback, useEffect, useState } from 'react'

interface names {
  randomJoke: {
    id: number
    joke: string
    categories: string[]
  }
  numberOfJoke: number
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
      throw new Error(`Could not fetch ${url}`)
    }
    return await response.json()
  }

  // Get joke randomly
  const getRandomJoke = useCallback(async () => {
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
  }, [selectedCategory, impersonateName, firstName, lastName])

  useEffect(() => {
    getRandomJoke()
  }, [])

  // Get joke with the selected category
  const handlingSelectCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value)
  }
  // Get joke with the selected category
  const handlingInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    var names = e.target.value
    setImpersonateName(names)
    var splitedName = names.split(' ')
    setFirstName(splitedName[0])
    setLastName(splitedName[1])
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
        numberOfJoke: countJokesNumber,
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
