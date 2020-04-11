import * as actionTypes from '../actions/action'

const initialState = {
    menuItems: null
  
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ("ALL_FOODS"):
            return {
                ...state,
                menuItems: action.foods
               
            }
        
            case ("FOODITEM"):
                return {
                    ...state,
                    item: action.foods
                   
                }
    
        default: return state;
    }
}

export default reducer


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ("ALL_FOODS"):
//             return {
//                 ...state,
//                 menuItems: state.menuItems.concat(
//                     'salad', 'chicken', 'sandwitch', 'curry', 'hot dog', 'potato salad',
//                     'pankacke'
//                 )
//             }

//         // case actionTypes.AddFood:
//         //     return {
//         //         ...state,
//         //         orders: {
//         //             ...state.orders,
//         //             [action.item]: state.orders[action.item] + 1
//         //         }
//         //     }
//         // case actionTypes.removeFood:
//         //     return {
//         //         ...state,
//         //         orders: {
//         //             ...state.orders,
//         //             [action.item]: state.orders[action.item] - 1
//         //         }
//         //     }
//         default: return state;
//     }
// }

// export default reducer