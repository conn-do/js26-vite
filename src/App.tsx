import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'こんどうです'

  return (
    <>
      <h1 className='name'>{name}</h1>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Button text='hoge hoge!'>Hoge</Button>
      <Button text='fuga fuga!'>Fuga</Button>
    </>
  )
}

function Button({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p>{text}</p>
      <button>{children}</button>
    </div>
  )
}

export default App
