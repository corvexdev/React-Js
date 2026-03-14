import { useState } from "react";

function Counter() {
    // state number
    const [count, setCount] = useState(0);
    // state string
    const [name, setName] = useState("");
    // state boolean
    const [show, setShow] = useState(true);

    const [users, setUsers] = useState([
        { id: 1, firstName: "egzon", role: "instructor" },
        { id: 2, firstName: "leon", role: "instructors" },
        { id: 3, firstName: "leotrim", role: "instructorsss" },
    ])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                increase
            </button>
            <h1>{count}</h1>
            <div>
                <input type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <h1>{name}</h1>
            </div>
            <div>
                {show && <p>this is hiddennnmm</p>}
            </div>
            <div>
                <div>
                    {users.map(user => (
                        <p key={user.id}>{user.firstName} {user.role}</p>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Counter;