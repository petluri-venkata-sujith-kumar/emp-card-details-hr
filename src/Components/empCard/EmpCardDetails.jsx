import { useEffect, useState } from "react";
import "./EmpCardDetails.css";
import axios from "axios";
import { GoDotFill } from "react-icons/go";
import Spinner from "../spinner/Spinner";
import { MdOutlineModeEdit } from "react-icons/md";
import { SlEyeglass } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";

const EmpCardDetails = () => {
  const [state, setState] = useState(null);

  let fun = async () => {
    let {
      data: { body },
    } = await axios.get("http://106.51.76.167:8080/user/all");
    console.log(body);
    setState(body);
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <section className="empContainer">
      <div className="createEmp">
        <span>create employee</span>
      </div>
      <div className="empcard">
        {state === null ? (
          <Spinner />
        ) : (
          [...state].reverse().map((employee, index) => {
            return (
              employee.userRole === "TRAINER" && (
                <div className="wrapper" key={index}>
                  <div className="empDetails">
                    <div className="empimg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFu5WDw6aMzlagbH8C4SjJ0NpznQXPSxAiw&usqp=CAU" alt="employee-img" />
                      <div className="name">{employee.name}</div>
                      <div className="role">{employee.userRole}</div>
                      <div className="status">
                        {employee.userStatus === "IN_ACTIVE" ? (
                          <GoDotFill color="red" />
                        ) : (
                          <GoDotFill color="green" />
                        )}
                      </div>
                      <span className="edit_icon">
                        <MdOutlineModeEdit /> <span className="tooltip">edit</span>
                      </span>
                      <span className="viewMore">
                          <SlEyeglass/> <span className="tooltip">view more</span>
                      </span>
                    </div>
                    <div className="info">
                      <div>
                        <span className="info_icons"><MdOutlineEmail /></span> {employee.email.length > 20 ? (employee.email.slice(0, 20)+"..." ):employee.email}
                      </div>
                      <div>
                        <span className="info_icons"><MdOutlinePermIdentity style={{ fontSize: "1.2em", fontWeight: "100" }} /></span> {employee.empId}
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })
        )}
      </div>
    </section>
  );
};

export default EmpCardDetails;
