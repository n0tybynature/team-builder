import React from "react"

export default function MemeberForm(props){

  const { value, update, submit } = props

  const onChange = evt => {




  }

  const onSubmit = evt => {





  }


  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name
          <input type='text' name='name' onChange={onChange} value={value.name}/>
        </label>
        <label>Email
          <input type='email' name='email' onChange={onChange} value={value.email} placeholder="email here" maxLength='30'/>
        </label>
        <label>Role
          <select  name='role' onChange={onChange} value={value.role}/>
          <option value=''>---WYD---</option>
          <option value=''>Dancer</option>
          <option value=''>Necromancer</option>
          <option value=''>Monk</option>
        </label>
      </div>
    </form>
  )
}