export default  (state=[],action) =>{  
    switch(action.type){
        case 'FERCH_USER':
            return [...state,action.payload];
        default:
            return state;
    }
};