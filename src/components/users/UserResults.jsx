import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../layout/Spinner';

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    fetchUsers()
  }, [])
  //api call
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    //sets the state with the data and that loading is done
    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user)=> (
        <h3>{user.login}</h3>
      ))}
    </div>
    )
  } else {
    return <h3>{Spinner}</h3>
  }
  
}

export default UserResults