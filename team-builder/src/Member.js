import React from "react"


export default function Member(props){
const {details} = props








return (
  <div>
    <h1>{details.name}</h1>
    <p>{details.email}</p>
    <h5>ROLE: {details.role}</h5>
  </div>
  )

}