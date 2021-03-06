import react from "react";
import { Component } from "react";
// import Cake from "./Cake";
import axios from 'axios';
import { useState, useEffect } from "react";
import {queryString} from "querystring"
import Cake from "./Cake";
import CartCake from "./CartCake";


class Cart extends Component {
    cakes = [];
    constructor(props) {
        super(props);
        this.state={
            cakes: []
        }
      }

      componentDidMount() {
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);
            this.cakes = Response.data.data
            console.log(this.cakes[0].name);
            this.setState({
                cakes: Response.data.data
            })
                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

      };

      render(){
        return(
            <div>
               
                {/* <h1>Home page</h1> */}
                <div  className="row">
                {
                                this.state.cakes.map((each, index) => {
                                    console.log(each,index)
                                    return <CartCake key={index} cakedata={each} />
                                    
                                })
                            }
                </div>
                
            </div>
        )
    }

    //   render() {
    //       return(
    //           <div>{this.cakes}</div>
    //       )
    //   }

}
export default Cart;


