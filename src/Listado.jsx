import Lista from "./Lista"
let Listado = ({ Empleados }) => {
    return (
        <>
            <h2>Pedidos Registrados</h2>
            {
                Empleados.map((empleado) =>
                    empleado.Empanadas.map((emp, idx) => (
                        <Lista
                            key={`${empleado.nombreEmpleado}-${idx}`}
                            nombreEmpleado={empleado.nombreEmpleado}
                            sector={empleado.TrabajoSector}
                            gustos={emp.Gusto}
                            cantidad={emp.CantidadEmpanadas}
                        />
                    ))
                )
            }
        </>
    );
};

export default Listado;