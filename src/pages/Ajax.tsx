import { useState } from 'react'

const API_KEY =
  'live_6FgSbW5fngQ5Uy7LfYSDVZqsrvQKrPbEqoKMjBL3MSZwSSM0YmV9tPAS5mzVmZ4D'

export default function Ajax() {
  const [catImages, setCatImages] = useState<string[]>([])

  async function getCatImages() {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=5&breed_id=sava&api_key=${API_KEY}`
    )
    const data = (await response.json()) as { url: string }[]
    setCatImages(data.map((d) => d.url))
    console.log(data)
  }

  return (
    <div>
      <div>Aajx 使ってみる</div>
      <button onClick={getCatImages}>猫の画像を取得</button>
      <div>
        {catImages.map((url) => (
          <img key={url} src={url} width='100' />
        ))}
      </div>
    </div>
  )
}
