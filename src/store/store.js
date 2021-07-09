import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';
import { uiRedurer } from "../reducers/uiRedurer";
import { pacientesReducer } from "../reducers/pacientesReducer";
import { empleadosReducer } from "../reducers/empleadosReducer";
import { especialidadeReducer } from "../reducers/especialidadeReducer";
import { consultasReducer } from "../reducers/consultasReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
        auth: authReducer,
        ui:uiRedurer,
        pacientes: pacientesReducer,
        empleados: empleadosReducer,
        especialidad:especialidadeReducer,
        consultas:consultasReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    
);