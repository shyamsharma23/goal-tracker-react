import React, { useRef, useState } from 'react'
import axios from 'axios'

const Goals = () => {

    const goalRef = useRef();

    const [data, setData] = useState([]);

    let config = {
        maxBodyLength: Infinity,
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      };

    axios.get("http://localhost:8000/api/goals", config).then((res)=>{
        setData(res.data);
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(goalRef.current.value)
const obj = {
    text: goalRef.current.value
}

let config = {
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  };

  setData([obj, ...data])

        axios.post("http://localhost:8000/api/goals", obj, config).then((res)=>{
            console.log(res)
        })

    }




  return (
    <div className='container'>
      <form action="POST" onSubmit={handleSubmit}>
        <input type="text" placeholder='Type your goal' ref={goalRef}/>
        <button className='btn btn-primary'>Add</button>
      </form>
      {
        data.map((item)=>{
           return  <div key={item._id} className='container'>{item.text}
           <button className='btn btn-danger mb-5' onClick={()=>{
            let config = {
                maxBodyLength: Infinity,
                headers: { 
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
              };
            axios.delete(`http://localhost:8000/api/goals/${item._id}`, config)
           }}>Delete</button>
           </div>
        })
      }
    </div>
  )
}

export default Goals
