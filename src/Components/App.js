import React, {useEffect} from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Header from './Header'
import AddContacts from "./AddContacts"
import ContactList from "./ContactList"
import { useState } from "react"

function App() {

const [contacts, setContacts] = useState([])
const LOCAL_STORAGE_KEY = "contacts"

const addContactHandler = (contact) =>{
console.log(contact);
setContacts([...contacts, {id: uuidv4(), ...contact}])
}

const removeContactHandler = (id) =>{
  const newContactList = contacts.filter((contact) =>{
    return contact.id !== id
  }
  )
  setContacts(newContactList)
}

useEffect(() =>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  console.log(JSON.stringify(contacts));
}, [contacts])
  
  useEffect(() =>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(retrieveContacts);
    if(retrieveContacts)
    setContacts(retrieveContacts)
    }, [])

  
  return (
    <div className='ui container'>
    <Router>
    <Header />
    <Routes>
    <Route path = "/add" exact component={AddContacts}/>
    <Route path = "/" component={ContactList}/>
    </Routes>
    <AddContacts addContactHandler={addContactHandler} />
    <ContactList contacts = { contacts } getContactId = {removeContactHandler}/>
    </Router>
    </div>
  )
  
}

export default App