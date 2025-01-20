import { useEffect, useState } from 'react'

const API_KEY =
  'live_6FgSbW5fngQ5Uy7LfYSDVZqsrvQKrPbEqoKMjBL3MSZwSSM0YmV9tPAS5mzVmZ4D'

export default function Ajax() {
  const [cats, setCats] = useState<string[]>([])
  const [breeds, setBreeds] = useState<string[]>([])

  async function getCatImage() {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=5&breed_id=sava&api_key=${API_KEY}`
    )
    const data = (await response.json()) as {
      url: string
      breeds: { name: string }[]
    }[]

    const catImages = data.map((cat) => cat.url)
    setCats(catImages)
  }

  async function getBreeds() {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`
    )
    const data = (await response.json()) as { id: string }[]
    const breedNames = data.map((breed) => breed.id)
    setBreeds(breedNames)
  }

  useEffect(() => {
    // getCatImage()
    getBreeds()
  }, [])

  return (
    <div>
      <h1>Ajax</h1>
      <div>
        <button onClick={getCatImage}>Get Cat</button>
      </div>
      {cats.map((cat, index) => (
        <img key={index} src={cat} alt='cat' width='100' />
      ))}
      {breeds.map((breed, index) => (
        <p key={index}>{breed}</p>
      ))}
    </div>
  )
}
