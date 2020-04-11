// import * as actionTypes from './action'

// const initialState = {
//     menuItems: {
//         chicken :0,
//         salad:0,
//         burger:0
//     },
//     price: 5
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.AddFood:
//             return {
//                 ...state,
//                 menuItems: {
//                     ...state.menuItems,
//                  [action.item]:state.menuItems[action.item]+1
//                 }
//             }
//             case actionTypes.removeFood:
//             return {
//                 ...state,
//                 menuItems: state.menuItems.concat('salad', 'chicken', 'sandwitch')
//             }

//         default: return state;

//     }
// }
// export default reducer