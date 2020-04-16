
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchFoodAsync } from '../../store/actions/action';
class Orders extends Component {

    componentDidMount = () => {
        //  allways page  be renderd when the page is reload
        this.props.onGetFood();

        console.log(this.props.reducer.menuItems)

        // iterate through menu items and add order on the orders array 
        if (this.props.reducer.menuItems) {
            const ordersArray = this.props.reducer.menuItems
            const orderedFood = ordersArray[this.props.match.params.id]
            this.props.onAddOrder(orderedFood);
        // calculate the total price 
            this.props.onTotalPrice(orderedFood.price);
        }

    }
    render() {
        // calculate the total price 
        let totalPrice = this.props.reducer.totalPrice.toFixed(2)

        // iterate to the order array and display the detail 
        // whenever the remove button is clicked remove the item and deduct the total pice
        // from the removed price and display
        // the conditioned is checked not tobe rendered if the arry is null

        const orderdItems = this.props.reducer.orders ? this.props.reducer.orders.map((item, index) => {
            return (
                <div style={foodBeutify}>
                    <img style={imgcss} src={item.image}></img>
                    <p>  Price: {'$'}{item.price}</p>
                    <p>{item.title}</p>
                    <button onClick={() => {
                        this.props.onRemoveOrder(item._id)
                        this.props.onCurrentPrice(item.price)
                        }
                    }
                    > Remove </button>
                    {console.log('current price...', this.props.reducer.currentPrice)}

                </div>
            )
        }) : null

        return (

            <div style={foodBeutify}>
                {console.log('price...', this.props.price)}
                {orderdItems}
                <Link to={`/menu/`}>
                    <p> Order More</p>
                </Link>
                <p> Total price: {'$'}{totalPrice}</p>
                <Link to={`/payment/`}> Place Order </Link>
            </div>
        )
    }
}

// map the state to prop and bring all the state properties here
const mapStateToProps = state => {

    console.log('state is ...', state)
    return {
        ...state
    }
}

// dispatching the action object


const mapDiapatchToProps = dispatch => {
    return {
        onAddOrder: (orderedFood) => dispatch({ type: "ADD_TO-ORDERS", orderedFood: orderedFood }),
        onRemoveOrder: (foodid) => dispatch({ type: "REMOVE-ORDERS", foodid: foodid }),
        onTotalPrice: (price) => dispatch({ type: "TOTAL-PRICE", value: price }),
        onCurrentPrice: (price) => dispatch({ type: "CURRENT-PRICE", value: price }),
        onGetFood: () => dispatch(fetchFoodAsync())
    }
}

export default connect(mapStateToProps, mapDiapatchToProps)(Orders);

// css on the dispaly
const foodBeutify = {
    borderRadius: "5px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}

// css on the image 
const imgcss = {
    borderRadius: "50%",
    width: "100px",
    hight: "100px",
    hover:{
        backgroundColor: "green"
      }
}