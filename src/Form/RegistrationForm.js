
import React from 'react';
import useForm from './useForm';
import FormField from './FormField';

const RegistrationForm = ({ onSubmit }) => {
    const { values, errors, handleChange, handleSubmit } = useForm({
        initialValues: {
            name: '',
            email: '',
            age: '',
            attendingWithGuest: false,
            guestName: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) errors.name = 'Name is required';
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email is invalid';
            }
            if (!values.age) {
                errors.age = 'Age is required';
            } else if (isNaN(values.age) || Number(values.age) <= 0) {
                errors.age = 'Age must be a number greater than 0';
            }
            if (values.attendingWithGuest && !values.guestName) {
                errors.guestName = 'Guest name is required';
            }
            return errors;
        },
        onSubmit: onSubmit,
    });

    return (
        <div className="form_area">
            <p className="title">EVENT REGISTRATION</p>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Enter your full name"
                />
                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="Enter your email"
                />
                <FormField
                    label="Age"
                    name="age"
                    type="number"
                    value={values.age}
                    onChange={handleChange}
                    error={errors.age}
                    placeholder="Enter your age"
                />
                <div className="form_group checkbox_group">
                    <label className="sub_title">
                        <input
                            type="checkbox"
                            name="attendingWithGuest"
                            checked={values.attendingWithGuest}
                            onChange={handleChange}
                        />
                        Are you attending with a guest?
                    </label>
                </div>
                {values.attendingWithGuest && (
                    <FormField
                        label="Guest Name"
                        name="guestName"
                        value={values.guestName}
                        onChange={handleChange}
                        error={errors.guestName}
                        placeholder="Enter guest's name"
                    />
                )}
                <div>
                    <button className="btn" type="submit">REGISTER</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;