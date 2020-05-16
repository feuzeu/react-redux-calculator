const initialState = 0;

export const expressionReducer = (state = initialState, {type, payload = null}) => {
    // Important de mettre ceci, car React appelle
    // initialement tous les reducers avec un payload indefini
    if(payload === null) {
        return state;
    }
    if(type === 'UPDATE_EXPRESSION')
        return payload;

    return state;
}

export default expressionReducer;
