import React,{useState} from "react"
let Formulario = ({ Empleados, setEmpleados }) => {
    const [empanadas, setEmpanadas] = useState([
        { Gusto: "Carne", CantidadEmpanadas: "" }
    ]);

    const agregarCampo = () => {
        setEmpanadas([...empanadas, { Gusto: "Carne", CantidadEmpanadas: "" }]);
    };

    const actualizarCampo = (index, campo, valor) => {
        const MasEmpanadas = [...empanadas];
        MasEmpanadas[index][campo] = valor;
        setEmpanadas(MasEmpanadas);
    };

    const agregarEmpleado = (e) => {
        e.preventDefault();

        const empleado = {
            nombreEmpleado: e.target.Nombre.value,
            TrabajoSector: e.target.Sector.value,
            Empanadas: empanadas
        };

        setEmpleados([...Empleados, empleado]);

        
        e.target.Nombre.value = "";
        setEmpanadas([{ Gusto: "Carne", CantidadEmpanadas: "" }]);
    };

    return (
        <>
            <form onSubmit={agregarEmpleado}>
                <h2>Pedido de empanadas</h2>

                <p>Nombre</p>
                <div>
                    <input
                        type="text"
                        name="Nombre"
                        className="u-full-width"
                        placeholder="Nombre del empleado"
                    />
                </div>

                <p>Sector Empleo</p>
                <div>
                    <select name="Sector">
                        <option value="Sistemas">Sistemas</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Ventas">Ventas</option>
                    </select>
                </div>

                <p>Empanadas</p>
                {empanadas.map((emp, index) => (
                    <div key={index}>
                        <p>Tipo de Empanada</p>
                        <select
                            value={emp.Gusto}
                            onChange={(e) => actualizarCampo(index, "Gusto", e.target.value)}
                        >
                            <option value="Carne">Carne</option>
                            <option value="Pollo">Pollo</option>
                            <option value="Jamon y Queso">Jamon y Queso</option>
                        </select>

                        <p>Cantidad de Empanadas</p>
                        <input
                            type="number"
                            className="u-full-width"
                            placeholder="Cantidad empanadas"
                            value={emp.CantidadEmpanadas}
                            onChange={(e) => actualizarCampo(index, "CantidadEmpanadas", e.target.value)}
                        />
                    </div>
                ))}

                <button type="button" onClick={agregarCampo}>Agregar más empanadas</button>

                <div>
                    <button type="submit">Validar</button>
                </div>
            </form>
        </>
    );
};

export default Formulario;