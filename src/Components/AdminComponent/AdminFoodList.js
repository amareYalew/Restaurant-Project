import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/adminAction'


class Home extends Component {

    componentDidMount = () => {
        this.props.onGetFoods();
    }

    render() {


        const FoodItems = this.props.adminReducer.menuItems ?
            this.props.reducer.menuItems.map((item, index) => {
                return (
                    <div style={foodCss} key={index}>
                        <div style={foodCss} >
                            <h5>{item.title}</h5>
                            <img src={item.image} style={imgcss}></img>
                            <h6> $ {item.price}</h6>

                        </div>
                        <button onClick={() => { this.props.onDeleteFood(item._id) }}>Delete-Item</button>
                    </div>)

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

        onGetFoods: () => dispatch(actionCreators.fetchFoodItems()),
        onDeleteFood: (id) => dispatch(actionCreators.DeleteItems(id)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);




const foodCss = {
    borderRadius: "15px",
    boxShadow: "0px 5px 20px rgb(70,71,71)",
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
    hight: "100px"
}