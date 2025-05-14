import './Formulario'
import Formulario from './Formulario'
import './App.css'
import React,{useState} from "react"
function App() {
  const [Empleados, setEmpleados] = useState([])

  return (
    <>
    <Formulario Empleados={Empleados} setEmpleados={setEmpleados}></Formulario>
    </>
  )
}

export default App
