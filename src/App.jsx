import './Formulario'
import Formulario from './Formulario'
import './App.css'
import './Listado'
import Lista from './Lista'
import React,{useState} from "react"
import Listado from './Listado'
function App() {
  const [Empleados, setEmpleados] = useState([])
  

  return (
    <>
    <Formulario Empleados={Empleados} setEmpleados={setEmpleados} ></Formulario>
    <Listado Empleados={Empleados} setEmpleados={setEmpleados} ></Listado>
    </>
  )
}

export default App
