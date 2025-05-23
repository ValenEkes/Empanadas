import './Formulario'
import Formulario from './Formulario'
import './App.css'
import './Listado'
import Lista from './Lista'
import React,{useState} from "react"
import Listado from './Listado'
function App() {
  const [Empleados, setEmpleados] = useState([])
  const[empanadas,setEmpanadas]=useState([
    { Gusto: "Carne", CantidadEmpanadas: "" }
  ])

  return (
    <>
    <Formulario Empleados={Empleados} setEmpleados={setEmpleados} empanadas={empanadas} setEmpanadas={setEmpanadas}></Formulario>
    <Listado Empleados={Empleados} setEmpleados={setEmpleados} empanadas={empanadas} setEmpanadas={setEmpanadas}></Listado>
    </>
  )
}

export default App
