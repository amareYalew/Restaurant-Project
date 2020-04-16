import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardDeck'
import StarRating from '../../Components/StarRating/StarRating';

class Menu extends Component {

    componentDidMount = () => {
        this.props.onGetFood();
    }

    render() {

        // console.log(this.props.reducer.menuItems)

        const FoodItems = this.props.reducer.menuItems ? this.props.reducer.menuItems.map((item, index) => {

            return (
                <div className="container font-weight-bold font-italic">
                    <Card style={foodCss} >
                        
                       
                        <div >
                            <p className= "">{item.title}</p>
                            <Link to={`/fooditem/${index}`} key={index}>
                            <img variant="top" src={item.image} style={imgcss} /></Link>
                                <p> $ {item.price}</p>
                    
                        </div>

                    </Card>
                   
                    <StarRating>
        </StarRating>
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
    width: "200px",
    hight: "200px",
    hover: 'true'

}