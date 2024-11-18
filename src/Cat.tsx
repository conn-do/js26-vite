import { useState } from 'react'
import './Cat.css'

export default function Cat() {
  const tags = ['orange', 'black', 'white', 'black and white', 'tiger']

  return (
    <div>
      <h1>かわいい猫集めました</h1>
      <div className='cards'>
        {tags.map((tag) => (
          <CatCard key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
}

function CatCard({ tag }: { tag: string }) {
  const [like, setLike] = useState(0)
  const [expands, setExpands] = useState(false)

  return (
    <div className='cat-card'>
      <img
        className={expands ? 'expand' : ''}
        src={`https://cataas.com/cat/${tag}`}
        onClick={() => setExpands(!expands)}
      />
      <button
        onClick={() => {
          setLike(like + 1)
          console.log('ボタンが押されたにゃん')
        }}
      >
        {like}
        いいにゃ！
      </button>
      <button>ブックマーク</button>
    </div>
  )
}
