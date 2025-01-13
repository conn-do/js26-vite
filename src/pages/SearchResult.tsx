import { useSearchParams } from 'react-router'

export default function SearchResult() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const schools = [
    'HAL東京',
    'HAL大阪',
    'HAL名古屋',
    '首都医校',
    '大阪医専',
    '名古屋医専',
    'モード東京',
    'モード大阪',
    'モード名古屋',
  ]

  if (!query) {
    return null
  }

  return (
    <div>
      <h1>検索結果</h1>
      <ul>
        {schools
          .filter((school) => school.includes(query.toUpperCase()))
          .map((school) => (
            <li key={school}>{school}</li>
          ))}
      </ul>
    </div>
  )
}
