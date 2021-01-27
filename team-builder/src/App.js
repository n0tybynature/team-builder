import React, {useState} from "react"
import MemberForm from "./MemberForm"
import Member from "./Member"

const initialFormValues = {
    name:'',
    email:'',
    role:'',
}




function App() {

  const [members,setMember] = useState([])

  const [formValues,setFormValues] = useState(initialFormValues)

  const updateForm = (inputName,inputValue) => {


  }



  const submitForm = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        
        <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
        
        />
        {members.map((member) => {
          return <Member key={member.id} details={member}/>
        })}



      </header>
    </div>
  );
}

export default App;
