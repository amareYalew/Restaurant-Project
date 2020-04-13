import axios from "axios";
export const ALL_FOODS = 'ALL_FOODS';


const APP_ID = "7476e566";
const APP_KEY = "c00a2e2ceb4cccfb20b49cbed5261c26";


export const allFood= (foods) => {
    return {
    type: ALL_FOODS,
    foods: foods
    }
}
   
   export const fetchFoodItems = () => {
    return dispatch => {
    axios.get(`https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => {
        console.log(response.data)
       dispatch(allFood(response.data.hits));
    });
    }
}
export const DeleteItems = (id) => {
       console.log(id)
    return dispatch => {
    axios.delete(``)
        .then(response => {
        console.log(response.data)
       dispatch(allFood(response.data.hits));
    });
    }
}
export const EditItems = (id) => {
       console.log(id)
    return dispatch => {
    axios.Update(``)
        .then(response => {
        console.log(response.data)
       dispatch(allFood(response.data.hits));
    });
    }
}