import { UPDATE_HISTORY, TOGGLE_HISTORY } from './constants';

// Show or hide the hystory panel
export const updateHistory = (expression) => {
    return { type: UPDATE_HISTORY, payload: expression };
}

// Show or hide the hystory panel
export const toggleHistory = () => {
    return { type: TOGGLE_HISTORY, payload: true };
}
