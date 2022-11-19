const userReducer = (state, action) => {
    switch(action.type){
        case "GET_USERS":
            return {...state,
                users:action.payload,
                isLoading: false
            }
        case "GET_USER":
            return {...state,
                user:action.payload,
                isLoading: false
            }
        case "GET_USER_REPOS":
            return {...state,
                userRepos:action.payload,
                isLoading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "EMPTY_USERS":
            return {...state,users:[]}
        default:
            return state;
    }
}

export default userReducer