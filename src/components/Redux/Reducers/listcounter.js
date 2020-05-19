
import todos from "../../../Todo"

const listCounterReducer = (state = () => {
    let initState = [];
    let size = todos.length;
    while(size--) initState.push(0);
    return initState;
}, action) => {
    switch(action.type) {
        case 'LIST_INCREMENT':
            let result = state.map((elem) => {
            if (action.payload === state.indexOf(elem))
                elem += 1;
            });
            return result;
        default:
            return state;
    }
}
export default listCounterReducer