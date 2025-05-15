let Lista=({nombreEmpleado,sector,gustos,cantidad})=>{
    return(
        <>
        <div>
            <p>Nombre del Empleado</p>
            <span>{nombreEmpleado}</span>
        </div>
        <div>
        <p>Nombre del Sector</p>
            <span>{sector}</span>
        </div>
        <div>
        <p>Nombre del gusto de la empanada</p>
            <span>{gustos}</span>
        </div>
        <div>
        <p>Cantidad de Empanadas</p>
        <span>{cantidad}</span>
        </div>
        </>
    )
}
export default Lista