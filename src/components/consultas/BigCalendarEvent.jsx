import React from 'react'

export const BigCalendarEvent = ({event}) => {
    const {motivo,paciente} = event;
    return (
        <div>
            <span>{motivo}</span>
            <span> - {paciente.nombre}</span>
        </div>
    )
}
