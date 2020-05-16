import { UPDATE_HISTORY, TOGGLE_HISTORY } from '../actions/history/constants';

const initialState = {
    items: [],
    show: false
};

export const historyReducer = (state = initialState, {type, payload = null}) => {
    // Important de mettre ceci, car React appelle
    // initialement tous les reducers avec un payload indefini
    if(payload === null) {
        return state;
    }
    switch(type) {
        case UPDATE_HISTORY:
            const trimmedItem = payload.toString().trim();
            if (trimmedItem !== '0' &&
                state.items.filter(i => i === trimmedItem).length === 0) {
                let items = [...state.items, trimmedItem];
                return {...state, items: items};
            }
            return state;
        case TOGGLE_HISTORY:
            return {...state, show: !state.show};
        default:
            return state;
    }
}

export default historyReducer;
