const loggingMiddleware = (store) => (next) => (action) => {
    console.log('Action', action);
    console.log('Etat avant', store.getState())
    next(action)
    console.log('Etat après', store.getState())
}

export default loggingMiddleware;
