import React, { useState } from "react";

const CoworkerList = (props) => {
  const { coworkers } = props;
  const initialState = coworkers.reduce((a, b) => {
    const name = b.first_name + b.last_name;
    a[name] = true;
    return a;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);
  // console.log(initialState);
  const changeStatus = (name) => {
    setEmployeeStatus({ ...employeeStatus, [name]: !employeeStatus[name] });
  };
  return coworkers.map(({ first_name, last_name }) => {
    const name = first_name + last_name;
    return (
      <div key={name} onClick={() => changeStatus(name)}>
        <p>
          Name: {first_name} {last_name}
        </p>
        <p>Status: {employeeStatus[name] ? "Online" : "Offline"}</p>
      </div>
    );
  });
};

CoworkerList.defaultProps = {
  coworkers: [
    { first_name: "Naruto", last_name: "Uzumaki" },
    { first_name: "Sasuke", last_name: "Uchiha" },
    { first_name: "Sakura", last_name: "Haruno" },
  ],
};

export default CoworkerList;
