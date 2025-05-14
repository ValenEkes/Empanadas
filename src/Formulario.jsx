let Formulario = ({ Empleados, setEmpleados }) => {
    const agregarEmpleado = (e) => {
        e.preventDefault()
        const empleado = {
            nombreEmpleado: e.target.Nombre.value,
            TrabajoSector:e.target.Sector.value,
            Empanadas:[
            {
            Gusto:e.target.Gustos.value,
            CantidadEmpanadas:e.target.Cantidad.value    
            }
            ]
        }
        setEmpleados([...Empleados, empleado]);

        e.target.Nombre.value = "";
        e.target.Cantidad.value=""
    }
    return (
        <>
            <form onSubmit={agregarEmpleado}>
                <p>Nombre</p>
                <div>
                <input type="text" name="Nombre" class="u-full-width" placeholder="Nombre del empleado" />
                </div>
                
                <p>Sector Empleo</p>
                <div>
                <select name="Sector">
                <option value="Sistemas">Sistemas</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Ventas">Ventas</option>
                </select>            
                </div>
                
                <p>Tipo de Empanada</p>
                <div>
                <select name="Gustos">
                <option value="Carne">Carne</option>
                <option value="Pollo">Pollo</option>
                <option value="Jamon y Queso">Jamon y Queso</option>
                </select>  
                
                <p>Cantidad de Empanadas</p>
                <div>
                <input type="number" name="Cantidad" class="u-full-width" placeholder="Cantidad empanadas"/>
                </div>
                  
                </div>
                <div>
                    <button>Validar</button>
                </div>
            </form>
        </>
    )
}
export default Formulario 