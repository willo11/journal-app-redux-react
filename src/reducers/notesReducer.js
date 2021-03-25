import { types } from "../types/types";

/* 
    {
        notes: []
        active: null,
        active: {
            id: 'asdasdasdasd',
            title: '',
            body: '',
            imageUrl: '',
            date: 12030123012,
        }
    }
*/
const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {  
        case types.notesActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
           return state;
    }
}