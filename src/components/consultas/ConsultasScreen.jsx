import React from 'react';
import { useSelector } from 'react-redux';
import { AddNewFab } from '../ui/AddNewFab';
import { BigCalendar } from './BigCalendar';
import { BigCalendarModal } from './BigCalendarModal';
import { BtnDelete } from './BtnDelete';

export const ConsultasScreen = () => {

    const {contultaActive} = useSelector(state => state.consultas);
   
    return (
        <div className="calendar__screen">
            <BigCalendar />
            <BigCalendarModal />
            <AddNewFab />
            {contultaActive && <BtnDelete/>}
            
        </div>
    )
}
