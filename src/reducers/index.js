import { combineReducers } from 'redux';
import postsReducer from './PostReducser';
import usersReducer from './UserReducser';
export default combineReducers({
    posts:postsReducer,
    users:usersReducer
});
