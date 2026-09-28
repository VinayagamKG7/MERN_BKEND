import Primitive from "./components/Primitive"

const App = () => {

let arr = {name : "React"}
  return (
    <>
    <div>App</div>
    
    <Primitive sendData = {arr} /> 

    </>
  )
}

export default App 