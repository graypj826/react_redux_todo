import React, { Component } from "react";
import Booch from "./Booch";
import NewBoochForm from "./NewBoochForm";
import { connect } from "react-redux"
import {addBooch, removeBooch, getBoochs} from "./actionCreators";
import {Route} from "react-router-dom";

import './style.css';

class BoochList extends Component {
    constructor (props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this)
        this.removeBooch = this.removeBooch.bind(this);
    }
    componentDidMount(){
        this.props.getBoochs();
    }
    handleAdd(val){
        this.props.addBooch(val)
    }
    removeBooch(id){
        this.props.removeBooch(id)
    }
    render(){
        let boochs = this.props.boochs.map((val => 
        <Booch  
            removeBooch={this.removeBooch.bind(this, val._id)}
            task={val.task} 
            key={val._id} 
        />))
        return(
            <div>
                <Route path="/boochs/new" component={props => (<NewBoochForm {...props} handleSubmit={this.handleAdd}/>)}/> 

                <Route exact path="/boochs" component={()=> <div><ul>{boochs}</ul></div>}>                

                </Route>
            </div>
        )    
    }
}

function mapStateToProps (reduxState) {
    return {
        boochs: reduxState.boochs
    }
}
export default connect(mapStateToProps, {addBooch, removeBooch, getBoochs})(BoochList);