const createStore = (slice) => {
    
    const initialsValue = {};
    Object.entries(slice)
    .map(([sliceName , value]) => {
        initialsValue[sliceName] = value
    });


    return {
        value : initialsValue.value,
    };
}


export default createStore;