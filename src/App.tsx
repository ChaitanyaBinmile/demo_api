import './App.css'
import { Button } from './components/button/Button'
import { Result } from './components/result/Result'

function App() {
  return (
    <div className='bg-[#20272c] h-screen w-screen flex flex-col justify-center items-center gap-8'>
      <Button/>
      <Result/>
    </div>
  )
}

export default App
