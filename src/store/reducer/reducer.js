
const initialState = {
    // menuItems: null,
    menuForm: { title: "", price: "", ingredient: "", image: "" ,description:""},
    login: { email: "", password: "" },
    signUp: { fullName: "", password: "", email: '' },
    isLogin: false,
    isRegister: false,
    item: null
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ("ALL_FOODS"):
            return {
                ...state,
                menuItems: action.foods
               
            };
        
            case ('FOODITEM'):
                return {
                    ...state,
                    item: action.foods
                }
        
        case 'CREATEMENU': 
            const copyOfMenu = { ...state.menu };
            copyOfMenu[action.field] = action.event.target.value;
            return {
                ...state,
                menu: copyOfMenu
               
            };
        // Updating Login State from Login Form
        case 'LOGINformInput':   
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
            const copyOfMenuForm = { ...state.menuForm }//copy login state
            copyOfMenuForm[action.field] = action.event.target.value  // store user input in the state
            return {
                ...state,
                menuForm:copyOfMenuForm
               
            };
        
         // Updating  isLogin state from action page; 
        case 'loginSubmit':
            return { ...state, isRegister: action.success };
            
        
        // Updating isRegister state from action page; 
        case 'signUpSubmit':     
            return { ...state, isRegister: action.success };
        

            
    default:
         return state;
    }
}

export default reducer