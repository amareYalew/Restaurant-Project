import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action'
import { Link } from 'react-router-dom'
class Menu extends Component {

    componentDidMount = () => {
        this.props.onGetFood();
    }

    render() {

        // console.log(this.props.reducer.menuItems)
        const FoodItems = this.props.reducer.menuItems ? this.props.reducer.menuItems.map((item, index) => {
            return (
                <div style={foodCss}>
                    <h6>{item.title}</h6>
                    <Link to={`/fooditem/${index}`} key={index}>
                    <img src={item.image} style={imgcss}></img>
                    </Link>
                       <h6> ${item.price}</h6>
                </div>

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

    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {

        onGetFood: () => dispatch(actionCreators.fetchFoodAsync()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);




const foodCss = {
    borderRadius: "15px",
    // boxShadow: "px 5px 20px rgb(71,71,71)",
    margin: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}
const imgcss = {
    borderRadius: "1000%",
    width: "300px",
    hight: "300px",
    hover : 'true'

}