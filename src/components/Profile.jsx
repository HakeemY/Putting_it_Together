import { useState } from "react";

const Profile = (props) => {
  const [age, setAge] = useState(props.age);

  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>
        {props.firstName}, {props.lastName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={(Event) => setAge(age + 1)}>
        Birthday Button for {props.firstName} {props.lastName}
      </button>
    </div>
  );
};

export default Profile;
