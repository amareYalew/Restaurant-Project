import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class FoodItem extends Component {
    render() {
        console.log(this.props.reducer.menuItems)
        console.log('display params id', this.props.match.params.id)

    
        return (
          
                
             
               <Link to={`/Orders/`}> 
                <div style={foodCss}>
                    <p>{this.props.reducer.menuItems[this.props.match.params.id].title}</p>
                    <img src={this.props.reducer.menuItems[this.props.match.params.id].imgURL}></img>
                    <p> Price: {'$'}{this.props.reducer.menuItems[this.props.match.params.id].price}</p>
                
                    <p> Click To Add To Orders </p> 
               
                </div>
               </Link>
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
    borderRadius: "5px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
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