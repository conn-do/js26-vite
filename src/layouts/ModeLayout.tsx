import { Outlet } from 'react-router'

export default function ModeLayout() {
  return (
    <>
      <header>モード学園</header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
