import React, { useState } from 'react';
import {Calendar, momentLocalizer  } from "react-big-calendar";
import moment from 'moment';
import "moment/locale/es";
import { messages } from "../../helpers/calendar-messages-es";
import { BigCalendarEvent } from './BigCalendarEvent';
import { useDispatch, useSelector } from 'react-redux';
import { consultaActive,clearActiveConsulta } from '../../actions/consultas';
import { openModal } from '../../actions/ui';
const localizer = momentLocalizer(moment);

export const BigCalendar = () => {

    const {consultas} = useSelector(state => state.consultas);
    const dispatch = useDispatch();
    const [ultimaVista, setUltimaVista] = useState(localStorage.getItem('ultimaVista')) || 'month';

    const onDoubleClick = (e) => {
        dispatch(openModal());
        //console.log(e);
    }

    const onSelectEvent = (e) => {
        dispatch(consultaActive(e));
    }

    const onViewChange = (e) => {
        setUltimaVista(e);
        localStorage.setItem('ultimaVista',e);
    }

    const onSelectSlot = () => {
        dispatch(clearActiveConsulta());
    }
    //estilos del evento 
    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const style = {
            backgroundColor:'#367CF7',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }

        return {
            style
        }
    }
    
    return (
        <Calendar
            localizer={localizer}
            events={consultas}
            startAccessor="start"
            endAccessor="end"
            
            messages={messages}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelectEvent}
            onView={onViewChange}
            view={ultimaVista}
            selectable={true}
            onSelectSlot={onSelectSlot}
            components={{
                event:BigCalendarEvent
            }}
        />

        
    )
}
