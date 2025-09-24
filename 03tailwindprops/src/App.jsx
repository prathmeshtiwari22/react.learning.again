
import './App.css'
import Card from './components/card'
function App() {

  // let myobject={
  //   username:'prathmesh',
  //   age:21
  // }
  // let newArray=[1,2,3,2]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="chaiaurcode" btnText="click me"/>
     <Card username="hitesh" btnText="visit me"/>
    </>
  )
}

export default App
