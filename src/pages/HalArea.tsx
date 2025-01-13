import { useParams } from 'react-router'

type AreaType = 'tokyo' | 'osaka' | 'nagoya'

export default function HalArea() {
  const { area } = useParams<{ area: AreaType }>()
  const areaMap = {
    tokyo: '東京',
    osaka: '大阪',
    nagoya: '名古屋',
  }

  if (!area) {
    return null
  }

  return <div>{areaMap[area] && <h1>HAL {areaMap[area]}</h1>}</div>
}
