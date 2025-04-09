import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0
       
    }
    console.log(this.props.name+"child constructor")
  }
  componentDidMount(){
        console.log(this.props.name+"child component did mount")
  }
  render() {
    console.log(this.props.name+"child render")
    const { name, location, mail, phone } = this.props;
    const {count} = this.state
   
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h3>location - {location}</h3>
        <h3>contact - {mail}</h3>
        <h3>phone - {phone}</h3>
        <div>{"count : "+count}</div>
        <button onClick={()=>{
            this.setState({count:this.state.count+1})
        }}>increment</button>
      </div>
    );
  }
}
export default UserClass;

// never update state variablke directly-it will create inconsistency
// we can use this.setstate anywhere inside class , this object will contain updated value of state variable
// react will rerender the component on calling set state
// if therer are multiple values in state, react will only update whats inside setstate, it will not touch other values
