import React, {useState, useEffect} from 'react'

const AddContacts = (props) =>{

const [data, setData] = useState({name: "", email:""})

 const add = (e) =>{
  e.preventDefault()
if(data.name !== "" && data.email !== ""){
props.addContactHandler(data)
setData({name:"", email: ""})
 }
 }

    return(
      <div className='ui main'>
        <h2>Add Contact</h2>
          <form className='ui form' onSubmit={add}>
            <div className='field'>
              <label>Name</label>
              <input type="text" name="name" placeholder='Name' value={data.name} onChange={(e) => {setData({...data,  name: e.target.value})}} />
            </div>
            <div className='field'>
              <label>Email</label>
              <input type="text" email="email" placeholder='Email' value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}}/>
              <button className='ui button blue'>Add</button>
            </div>
      </form>
      </div>
    )
  }
export default AddContacts