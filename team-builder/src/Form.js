import React, {useState} from 'react';




export default function TeamForm(){


    const teamList = [
        {name: "Bryant", email: "242424@gmail.com", role: "nbaLegend"},
        {name: "Tony", email: "tonyyang@lambdastudent.com", role: "lambdaStudent"},
        {name: "Kobe", email: "beef@yahoo.com", role: "dinner"},
        {name: "Morty", email: "rickSanchez@cn.com", role: "highSchoolStudent"}
      ];
    
    
    const initialFormValues = {name:"", email:"", role:""};
    
 
    const [team,setTeam] = useState(teamList)
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const change = (evt) => {
      const {name, value} = evt.target;
      setFormValues({...formValues, [name]:value})
    };
    const submit = (evt) => {
      evt.preventDefault();
      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim()
      };
      setTeam([...team, newMember]);
      setFormValues(initialFormValues)
    };
  
    return <div className="container">
      <h1>THE SQUADDDDDD</h1>
      {team.map((member, idx) => {
        return (
          <div>
          <h1>{member.name}</h1>
          <p>{member.email}</p>
          <h5>ROLE: {member.role}</h5>
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input type="text" name="name" value={formValues.name} onChange={change} placeholder="input name"></input>
        <input type="text" name="email" value={formValues.email} onChange={change} placeholder="input email"></input>
        <input type="text" name="role" value={formValues.role} onChange={change} placeholder="input role"></input>
        <button>submit</button>
      </form>
    </div>
    
    



  }