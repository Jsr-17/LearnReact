import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Jose',
        email: 'joseliyoro17@gmail.com',
    });

    const { username, email } = formState;
    
    const onInputChange = ({target})=>{
        const {name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    useEffect(()=>{
        console.log('useEffect called!');
    },[]);
    useEffect(()=>{
        console.log('useEffect changed!');
    },[formState]);
    useEffect(()=>{
        console.log('Email  changed!');
    },[email]);
    

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
                            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}

            />

        </>
    )
}
