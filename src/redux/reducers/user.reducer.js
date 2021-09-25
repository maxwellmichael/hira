

const userReducer = (state = null, action)=>{

    switch(action.type){

        case 'REGISTER_SUCCESS':
            return action.currentUser;

        case 'LOGIN_SUCCESS':
            return action.currentUser;

        case 'LOGOUT_SUCCESS':
            return null;
        
        default:
            return state;

    }
}

export default userReducer;