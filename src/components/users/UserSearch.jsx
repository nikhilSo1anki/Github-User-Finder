import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../../Context/UserContext'
import AlertContext from '../../Context/AlertContext';
import {fetchUsers} from '../../Context/UserAction'

function UserSearch() {
    const [text,setText] = useState("");
    const {users,dispatch} = useContext(UserContext)
    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handelSubmit = async (e) => {
        e.preventDefault();

        if(text === ""){
            setAlert("Please enter something!","err")
        }else {
            dispatch({
                type: "SET_LOADING"
            })
            const data = await fetchUsers(text);
            dispatch({
                type: "GET_USERS",
                payload: data
            })
            setText("")
        }
    }


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handelSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-base-content input input-lg text-neutral-content" value={text} onChange={handleChange} placeholder="search" />
                        <button className="absolute top-0 right-0 rounded-l-none w-35 btn btn-lg" type="submit">Go</button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && <div>
            <button className="btn btn-ghost btn-lg" onClick={()=>dispatch({type: "EMPTY_USERS"})}>Clear</button>
        </div>}
        
    </div>
  )
}

export default UserSearch