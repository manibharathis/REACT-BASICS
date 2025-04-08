import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0,
        count1:0
    }
  }
  render() {
    const { name, location, mail, phone } = this.props;
    const {count,count1} = this.state
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h3>location - {location}</h3>
        <h3>contact - {mail}</h3>
        <h3>phone - {phone}</h3>
        <div>{"count : "+count}</div>
        <div>{"count 1 : "+count1}</div>
      </div>
    );
  }
}
export default UserClass;
