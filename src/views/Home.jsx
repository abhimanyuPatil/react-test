import React, { Component } from "react";
const employees = [
  {
    firstName: "amit",
    lastName: "rawat",
    dob: "25/10/1996",
    designation: "Tech Lead",
    experience: "2",
    profile:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    firstName: "amit",
    lastName: "rawat",
    dob: "25/10/1996",
    designation: "Tech Lead",
    experience: "2",
    profile:
      "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    firstName: "amit",
    lastName: "rawat",
    dob: "25/10/1996",
    designation: "Tech Lead",
    experience: "2",
    profile:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    firstName: "amit",
    lastName: "rawat",
    dob: "25/10/1996",
    designation: "Tech Lead",
    experience: "2",
    profile:
      "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    firstName: "amit",
    lastName: "rawat",
    dob: "25/10/1996",
    designation: "Tech Lead",
    experience: "2",
    profile:
      "https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Home</h2>
        <div className="row d-flex flex-row justify-content-between">
          <h3>Employee List</h3>
          <button
            onClick={() => this.props.history.push("/add")}
            className="btn btn-primary"
          >
            Add New
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Sr. No.</th>
              <th className="text-center">Profile</th>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">DOB</th>
              <th className="text-center">Designation</th>
              <th className="text-center">Experience</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>
                    <img
                      style={{ width: 200, height: 200 }}
                      src={emp.profile}
                    />
                  </td>
                  <td className="text-center">{emp.firstName}</td>
                  <td className="text-center">{emp.lastName}</td>
                  <td className="text-center">{emp.dob}</td>
                  <td className="text-center">{emp.designation}</td>
                  <td className="text-center">{emp.experience} years</td>
                  <td className="text-center">
                    <button className="btn btn-warning">Edit</button>
                    <button
                      onClick={() =>
                        window.alert("Are you sure want to delete this user?")
                      }
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger mx-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
