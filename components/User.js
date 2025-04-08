import { useState } from "react";

useState;
const User = ({ name, phone, mail, location }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h3>location - {location}</h3>
      <h3>contact - {mail}</h3>
      <h3>phone - {phone}</h3>
      <div>count - {count}</div>
      <div>count 1 - {count1} </div>
    </div>
  );
};
export default User;
