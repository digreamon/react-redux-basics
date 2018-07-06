const initialState = {
    likes: 0,
};

function likeReducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_LIKE":
            return {...state, likes: state.likes + 1}
    }
    return state
}

export default likeReducer