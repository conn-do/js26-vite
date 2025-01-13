import { Outlet } from 'react-router'

export default function ModeLayout() {
  return (
    <>
      <h1>モード学園</h1>
      <div>
        <Outlet />
      </div>
    </>
  )
}
