export default  (state=[],action) =>{  
    switch(action.type){
        case 'FERCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};