import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function Index() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  return (
    <>
      <h1>TOPページ</h1>
      <Link to='/cat'>猫</Link>
      <br />
      <Link to='/dog'>犬</Link>
      <div>
        <input
          type='text'
          placeholder='学校名検索'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button
          onClick={() => {
            navigate(`/result?query=${query}`)
          }}
        >
          検索
        </button>
      </div>
    </>
  )
}
