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
                    <>{item.title}</>
                    <Link to={`/fooditem/${index}`} key={index}>

                        <img src={item.image} style={imgcss}></img>
                    </Link>
                        $ {item.price}
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
    borderRadius: "5px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    margin: "10px",
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
    hight: "100px",
    hover : 'true'

}