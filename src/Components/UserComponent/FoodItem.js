import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class FoodItem extends Component {
    render() {



        return (


            <div style={foodCss}>
                <h4>{this.props.reducer.menuItems[this.props.match.params.id].title}</h4>
                <img style={imgcss} src={this.props.reducer.menuItems[this.props.match.params.id].image}></img>
                <p style={par}> Price: {'$'}{this.props.reducer.menuItems[this.props.match.params.id].price}</p>
                <h5> Ingredients:</h5>
                <p>{this.props.reducer.menuItems[this.props.match.params.id].description}</p>

                <Link to={`/orders/${this.props.match.params.id}`}><p> Add To Orders </p> </Link>


            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(FoodItem)
const foodCss = {
    textAlign: "center",
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
    width: "300px",
    hight: "300px"
}
const par = {
    textAlign: "center",
}