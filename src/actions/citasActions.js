import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA } from './types'

export const obtenerCitas = () => {
    return {
        type: MOSTRAR_CITAS
    }
}

export const agregarCita = cita => {
    return {
        type: AGREGAR_CITA,
        payload: cita
    }
}


export const borrarCita = id => {
    return {
        type: BORRAR_CITA,
        payload: id
    }
}