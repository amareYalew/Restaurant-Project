
// export const fodItems = 'ALL-FOODS'
// export const AddFood = 'ADD-FOOD'
// export const removeFood = 'REMOVE-FOOD'
// export const price = 'FOOD_PRICE'
import axios from "axios";
export const ALL_FOODS = 'ALL_FOODS';
export const FOODITEM = 'FOODITEM';



const APP_ID = "7476e566";
const APP_KEY = "c00a2e2ceb4cccfb20b49cbed5261c26";




export const initFood= (foods) => {
    return {
    type: ALL_FOODS,
    foods: foods
    }
}
   
   export const fetchFoodAsync = () => {
    return dispatch => {
    axios.get(`https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => {
        console.log(response.data)
       dispatch(initFood(response.data.hits));
    });
    }
}
export const fetchFood= (food) => {
    return {
    type: FOODITEM,
    foods: food
    }
}
export const fetchPostFood = (id) => {
    return dispatch => {
    axios.post(`https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`, id )
        .then(response => {
        console.log(response.data)
       dispatch(fetchFood(response.data.hits));
    });
    }
}









// export const allFoods = () => {

//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveResult())
//         },2000);
    
//     }
// }


