import React, { useState } from 'react';

const Form = props => {
    
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setList([...props.list, formState])

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="name" name="name" value={formState.name} onChange={handleChanges} />
                <input type="email" placeholder="email" name="email" value={formState.email} onChange={handleChanges} />
                <input type="text" placeholder="role" name="role" value={formState.role} onChange={handleChanges} />
                <button>Add Team Member</button>
            </form>
        </div>
    );
};

export default Form;