import { useSelector } from "react-redux"
import { FormPacientes } from "./FormPacientes"
import { ListPacientes } from "./ListPacientes"
import { TablePaciente } from "./TablePaciente"

export const PacientesScreen = () => {


    // useEffect(() => {
    //     localStorage.setItem('pacientes',JSON.stringify(pacientes));
    // }, [pacientes]);
    const {active} = useSelector(state => state.pacientes);

    return (
        <>
            <div className='cefire__row'>
                <FormPacientes />
                
                <ListPacientes />
            </div>
                {active &&<TablePaciente />}
        </>
    )
}