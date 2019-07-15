import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="name" name="name" />
                <input type="email" placeholder="email" name="email" />
                <input type="text" placeholder="role" name="role" />
                <button>Add Team Member</button>
            </form>
        </div>
    );
};

export default Form;