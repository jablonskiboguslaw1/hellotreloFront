import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList() {
    const [list, setList] = useState(null);
    const [tes, setTes] = useState("");
    useEffect(() => {

        const myFetch = async () => {
            const response = await fetch(`http://localhost:8080/user`);
            const responseParsed = await response.json()
            setList(responseParsed)
            console.log(responseParsed)
        }
        myFetch()
    }, [tes]);

    return (<div>
        {list ? <div>
            <ul>
                {list.map(user =>
                    <li
                        key={user.id}>{user.id 
                        +' '+ user.email}
                    </li>)}
            </ul>
        </div>
            : <div> </div>
        }<button
            onClick={() => { setTes("cos") }}>hgfhg
            </button>
    </div>

        //
    )
}
