
import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
//import jwtDecode from 'jwt-decode';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const ALL_FOODS = 'ALL_FOODS';
export const FOODITEM = 'FOODITEM';
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP"
export const initFood = (foods) => {
    return {
        type: ALL_FOODS,
        foods: foods
    }
}

export const fetchFoodAsync = () => {
    return dispatch => {
        axios.get(`http://localhost:5000/products`)
            .then(response => {
                console.log(response.data)
                dispatch(initFood(response.data));
            });
    }
}


export const userLogin = () => {

    return (dispatch, getState) => {

        const userLogin = getState().reducer.login
        console.log(getState().reducer.login)

        axios({
            method: 'post',
            url: 'http://localhost:5000/users/login',
            data: {
                email: userLogin.email,
                password: userLogin.password
            }
        }).then(res => {
            console.log(res, 'server response')
            if (res) {
                dispatch({ type: 'loginsubmit', role: res.data.role });
            }
            else {
                dispatch({ type: 'loginsubmit', success: false });
            }
        })

    }


}

export const userSignUpRegis = () => {

    return (dispatch, getState) => {

        const userSignUp = getState().reducer.signUp
        console.log(getState().reducer.signUp)

        axios({
            method: 'post',
            url: 'http://localhost:5000/users/add',
            data: {
                username: userSignUp.username,
                email: userSignUp.email,
                password: userSignUp.password,
                role: userSignUp.role
            }
        }).then(res => {
            if (res === true) {
                dispatch({ type: 'signUpSubmit', success: true });
            }


            else {
                dispatch({ type: 'signUpSubmit', success: false });
            }
        })

    }

}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}
export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}


export const foodItemFetching = () => {


    return (dispatch, getState) => {

        const FoodItemForm = getState().reducer.menuForm;
        console.log(getState().reducer.menuForm)


        axios({
            method: 'post',
            url: 'http://localhost:5000/products/add',
            data: {
                title: FoodItemForm.title,
                price: FoodItemForm.price,
                image: FoodItemForm.image,
                description: FoodItemForm.description

            }
        })

    }


}










