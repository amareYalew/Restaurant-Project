import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/adminAction'
import { Link } from 'react-router-dom'
class Home extends Component {

    componentDidMount = () => {
        this.props.onGetFoods();
    }

    render() {
        
        console.log(this.props)
        const FoodItems = this.props.adminReducer.menuItems ? this.props.reducer.menuItems.map((item, index) => {
            return (
                <Link  key={index}>
                        <div style={foodCss}>
                        <li>{item.recipe.label}</li>
                        <img src={item.recipe.image} style={imgcss}></img>
                        <h6>{item.recipe.yield}</h6>
                        <button onClick={(event) => { this.props.onDeleteFood(item.recipe.id) }}>Delete-Item</button>
                        <Link to={`edit/:id`} onClick={(event) => { this.props.onDeleteFood(item.recipe.id) }}>Edit-Item</Link>
                    </div>
                </Link>
            )

        }) : null

        return (
            <div>
                {FoodItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {

        onGetFoods: () => dispatch(actionCreators.fetchFoodItems()),
        onDeleteFood:(id) =>dispatch(actionCreators.DeleteItems (id)),
        onEditFood:(id) =>dispatch(actionCreators.EditItems (id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);




const foodCss = {   
    borderRadius: "15px",
    boxShadow: "0px 5px 20px rgb(70,71,71)",
    margin:"10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}
const imgcss = {
    borderRadius: "100%",
    width: "100px",
    hight :"100px"
}