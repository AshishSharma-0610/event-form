
import React from 'react';

const FormField = ({ label, name, type = 'text', value, onChange, error, placeholder }) => {
    return (
        <div className="form_group">
            <label className="sub_title" htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="form_style"
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default FormField;