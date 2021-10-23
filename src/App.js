import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
     const [users,setUsers]=useState([]);
     const nameRef=useRef();
     const emailRef=useRef();

     useEffect(()=>{
fetch('http://localhost:5000/users')
.then(res=>res.json())
.then(data=>setUsers(data))

     },[])

     const handelAdUsers=e=>{
       const name=nameRef.current.value;
       const email=emailRef.current.value;
       const newUser={name:name,email:email};
fetch('http://localhost:5000/users',{
  method:'post',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newUser)
})
.then()


e.preventDefault();
     }
  return (
 <div className="App">
<form onSubmit={handelAdUsers}>
<input type="text" ref={nameRef}  placeholder="Your Name"/>
<input type="email" name=""ref={emailRef} id=""  placeholder="Your Email"/>
<input type="submit" value="Submit" />
</form>






     <h2>Found :{users?.length}</h2>




     <ul>
       {
         users.map(user=><li key={user.id}>{user.id} : {user.name} : {user.email}</li>)
       }
     </ul>
    </div>
  );
}

export default App;
