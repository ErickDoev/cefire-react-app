import React, {  useEffect, useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { /*clearActiveConsulta,*/  consultasAdd, consultaUpdate } from '../../actions/consultas';
import Swal from 'sweetalert2';
import { closeModal } from '../../actions/ui';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root'); 

  const now = moment().minutes(0).add(1,'hours');
  const nowPlus1 = now.clone().add(1,'hours');

  const initEvent = {
    start:now.toDate(),
    end:nowPlus1.toDate(),
    motivo:'',
    notes:''
  }

export const BigCalendarModal = () => {

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  const [formValues,handleInputChange,setFormValues] = useForm(initEvent);
  const {motivo,notes,start,end} = formValues;

  const [pacienteFiltrado, setPacienteFiltrado] = useState([]);
  const {pacientes} = useSelector(state => state.pacientes);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState({});

  const {modalOpen} = useSelector(state => state.ui);
  const {contultaActive} = useSelector(state => state.consultas);

  const dispatch = useDispatch();
  useEffect(() => {

    if(contultaActive){
      setFormValues(contultaActive);
      setPacienteFiltrado([contultaActive.paciente]);


    }else{
      setFormValues(initEvent);
      setPacienteFiltrado([]);
    }
        
  }, [contultaActive,setFormValues,setPacienteFiltrado]);

  const getPacientes = (p) => {
      return pacientes.filter(paciente => paciente.nombre.toLocaleLowerCase().includes(p.toLocaleLowerCase()));
  }
 
  const handleInputNameChange = ({target}) => {
    
    if(target.value.length > 3){
      const paciente = getPacientes(target.value);
      setPacienteFiltrado(paciente);
      //console.log(pacienteFiltrado);
    }
        
  }

  
  const handleSubmit = (e) => {
      e.preventDefault();
      const momentStart = moment(dateStart);
      const momentEnd = moment(dateEnd);
      //console.log({...formValues,start:dateStart,end:dateEnd});
      if(momentStart.isSameOrAfter(momentEnd)){
        return Swal.fire('Error','La hora y la fecha fin deben ser mayor a la de inicio','error');
      }
      if(motivo.trim().length < 2){
        return Swal.fire('Error','El motivo debe tener mas de 3 caracteres','error');
      }
      if(contultaActive){
        //console.log(pacienteSeleccionado[0]);
        dispatch(consultaUpdate({
          ...formValues,
          paciente:{
            ...pacienteSeleccionado[0]  
          }
        }));
        Swal.fire('Consulta actualizada');
      }else{
        
        dispatch(consultasAdd({
          ...formValues,
          paciente:{
            ...pacienteSeleccionado[0]  
          }
        }));
        Swal.fire('Consulta agendada');
        
      }
      dispatch(closeModal());
      setPacienteFiltrado([]);
        
    }

    const onRequestClose = () => {
      dispatch(closeModal());
      //dispatch(clearActiveConsulta());
    } 

    const handleStartDateChange = (e) => {
      setDateStart(e);
      setFormValues({
        ...formValues,
        start:e
      });
    }

    const handleEndDateChange = (e) => {
      setDateEnd(e);
      setFormValues({
        ...formValues,
        end:e
      });
    }

    const handleSelectChange = ({target}) => {
      
      setPacienteSeleccionado(pacienteFiltrado.filter(p => p.id === target.value));
    }

    return (
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> Nuevo consulta </h1>
        <hr />
        <form className="container" onSubmit={handleSubmit}>  

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                <DateTimePicker
                  onChange={handleStartDateChange}
                  value={start}
                  className="form-control"
                />
            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker
                  onChange={handleEndDateChange}
                  value={end}
                  className="form-control"
                  minDate={ start }
                />
            </div>

            <hr />
            <div className="form-group">
                <label> Paciente</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Buscar por nombre"
                    autoComplete="off"
                    readOnly={contultaActive? true : undefined}
                    onChange={handleInputNameChange}
                />
            <select 
              required 
              className="form-select" 
              size="3" 
              aria-label="size 3 select example" 
              name="idEmpleado" 
              onChange={handleSelectChange}
              value={contultaActive ? contultaActive.paciente.id : undefined}
            >

            {
              pacienteFiltrado.map(e => <option key={e.id} value={e.id}> {`${e.nombre} ${e.app} ${e.apm}`} </option>)
            }
              
            </select>
            </div>
            <div className="form-group">
                <label> Motivo y notas</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Motivo de la visita"
                    name="motivo"
                    value={motivo}
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">

                  <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={notes}
                    onChange={handleInputChange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>

      </Modal>
    )
}
