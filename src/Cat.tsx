import { useState } from 'react'
import './Cat.css'

export default function Cat() {
  const tags = ['black', 'orange', 'cute', 'tiger']

  return (
    <div>
      <h1>かわいい猫集めました</h1>
      <div className='container'>
        {tags.map((tag) => (
          <CatCard key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
}

function CatCard({ tag }: { tag: string }) {
  const [count, setCount] = useState(0)

  return (
    <div className='cat-card'>
      <img src={`https://cataas.com/cat/${tag}`} />
      <button
        onClick={() => {
          setCount(count + 1)
          console.log(count)
          console.log('ボタンが押されたにゃ')
        }}
      >
        {count} いいにゃ！
      </button>
      {/* TODO: ボタンが押されたら「ブックマーク済み」に変える */}
      <button>ブックマーク</button>
    </div>
  )
}
