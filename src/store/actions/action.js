
import axios from "axios";
export const ALL_FOODS = 'ALL_FOODS';
export const FOODITEM = 'FOODITEM';
export const CREATE_PROJECT = "CREATE_PROJECT";
export const LOGIN = "LOGIN";
export const SIGNUP ="SIGNUP"

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


export const userLogin = () => { 

    return (dispatch, getState) => {
            
        const userLogin = getState().reducer.login
        console.log(getState().reducer.login)
            
            axios({
                method: 'post',
                url: '/user/12345',
                data: {
                  email:userLogin.email,
                  password: userLogin.password
                }
            }).then(res => { 
                if (res == true) { 
                    dispatch({ type: 'loginsubmit',success:true });
                }
                else {
                    dispatch({ type: 'loginsubmit',success:false });
                }
            })
           
        }
    

}

export const userSignUpRegis= () => { 

    
    return (dispatch, getState) => {
            
        const userSignUp = getState().reducer.signUp
        console.log(getState().reducer.signUp)
            
            axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    fullName:userSignUp.fullName,
                    password: userSignUp.password,
                    email:userSignUp.email,
                }
            }).then(res => { 
                if (res == true) { 
                    dispatch({ type: 'signUpSubmit',success:true });
                }


                else {
                    dispatch({ type: 'signUpSubmit',success:false });
                }
            })
           
        }
    

}
export const foodItemFetching= () => { 

    
    return (dispatch, getState) => {
            
        const FoodItemForm = getState().reducer.menuForm;
         console.log(getState().reducer.menuForm)
     
       
            axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    title:FoodItemForm.title,
                    price:FoodItemForm.price,
                    ingredient: FoodItemForm.ingredient,
                    image: FoodItemForm.image,
                    description:FoodItemForm.image
                }
            }).then(res => { 
                if (res == true) { 
                    dispatch({ type: 'signUpSubmit',success:true });
                }
                else {
                    dispatch({ type: 'signUpSubmit',success:false });
                }
            })
           
        }
    

}








