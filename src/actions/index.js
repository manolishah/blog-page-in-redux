import jsonPlaceholder from '../api/JasonPlaceholder';
export const fetchPost =  () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type:'FERCH_POSTS' , payload:response.data});
};

export const fetchUser =  (id) =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FERCH_USER' , payload:response.data});
};
