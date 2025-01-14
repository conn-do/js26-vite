import { Link } from 'react-router'

export default function TopPage() {
  return (
    <div>
      <h1>TopPage</h1>
      <div>
        <Link to='/cat'>猫ページ</Link>
      </div>
    </div>
  )
}
