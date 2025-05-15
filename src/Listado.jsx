import Lista from "./Lista"
let Listado=({Empleados})=>{    
    return(
        <>
        <h2>Pedidos Registrados</h2>
       {
        Empleados.map((c)=><Lista nombreEmpleado={c.nombreEmpleado} sector={c.TrabajoSector} gustos={c.Empanadas[0].Gusto} cantidad={c.Empanadas[0].CantidadEmpanadas}/>)
       }
        </>
    )
}
export default Listado

