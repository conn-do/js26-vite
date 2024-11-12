import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Name = {
  name: string
}
type Age = {
  age: number
}

type Person = Name &
  Age & {
    isStudent?: boolean
  }

function sample() {
  let sampleText: string = 'sample'
  sampleText = 100
  let sampleBoolean: boolean = false
  sampleBoolean = 'true'
  const sampleArray: number[] = [1, 2, '3']
  console.log(sampleText)
  console.log(sampleBoolean)
  console.log(sampleArray)

  // ? を付けると任意のプロパティになる
  const sampleObject: Person = {
    name: 'こんどう',
    age: 31,
  }
  sampleObject.isStudent = true

  console.log(sampleObject)
}

function sample2({
  a,
  b,
  twice: c,
  ...rest
}: {
  a: string
  b: number
  twice: (d: number) => number
  hoge: string
  fuga: number
}): number {
  console.log(a + b.toString())
  console.log(c(20))
  console.log(rest)
  return Number.parseInt(a) + b
}

function App() {
  const [count, setCount] = useState(0)
  const name = 'こんどうです'
  sample()
  function twice(d: number): number {
    return d * 2
  }
  const a = '10'
  const result = sample2({
    a,
    b: 20,
    twice,
    hoge: 'hoge',
    fuga: 100,
  })
  console.log(result)

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
