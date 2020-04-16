
const initialState = {
    menuItems: null,
    menuForm: { title: "", price: "", image: "" ,description:""},
    login: { email: "", password: "" },
    signUp: { username: "",  email: '',password: "", role: ""},
    isLogin: false,
    isRegister: false,
    item: null,
    orders: [],
    totalPrice: 0,
    currentPrice: 0
}


const reducer = (state = initialState, action) => {

    // updating Menu Items from database;
    switch (action.type) {
        case ("ALL_FOODS"):
            return {
                ...state,
                menuItems: action.foods
               
            };
        
        // Adding orders
        case ('ADD_TO-ORDERS'):
            return {
                ...state,
                orders: state.orders.concat(action.orderedFood)
            }

        // Removing orders

        case ('REMOVE-ORDERS'):
         
            return {
                ...state,
                orders: state.orders.filter(item => item._id != action.foodid)
            }

        // calculate total price

        case ('TOTAL-PRICE'):
            return {
                ...state,
                totalPrice: state.totalPrice + action.value
            }

        // calculate current price

        case ('CURRENT-PRICE'):
            return {
                ...state,
                totalPrice: state.totalPrice - action.value
            }
        
        
        // Updating Login State from Login Form
        case 'LOGINFORMINPUT':   
            const copyoflogin = { ...state.login }//copy login state
            copyoflogin[action.field] = action.event.target.value;  // store user input in the state
            return {
                ...state,
                login:copyoflogin
               
            };
        // Updating SignUp  State from SignUp page
        case 'SIENUPFORMINPUT':   
            const copyofsignUp = { ...state.signUp }//copy login state
            copyofsignUp[action.field] = action.event.target.value  // store user input in the state
            return {
                ...state,
                signUp:copyofsignUp
               
            };
        
        // Updating FoodForm State from FoodForm Component 
        case 'FOODITEMFORM':   
            const copyOfMenuForm = { ...state.menuForm }//copy FoodMenu state
            copyOfMenuForm[action.field] = action.event.target.value  // store user input in the state
            return {
                ...state,
                menuForm:copyOfMenuForm
               
            };
       
        
 
               
    default:
         return state;
    }
}

export default reducer