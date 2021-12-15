import React from 'react'
import { Table } from "react-bootstrap";
function UserList({user}) {
    return (
        <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>City</th>
    </tr>
  </thead>
  </Table>
  {user?.map((e)=>(
      <div>
           <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>{e.id}</th>
      <th>{e.name}</th>
      <th>{e.username}</th>
      <th>{e.email}</th>
      <th>{e.address.city}</th>
    </tr>
  </thead>
  </Table>
      </div>
  ))}
        </div>
    )
}

export default UserList




