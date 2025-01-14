import { useParams } from 'react-router'

export default function HalArea() {
  const { area } = useParams()

  return <div> HAL {area}</div>
}
