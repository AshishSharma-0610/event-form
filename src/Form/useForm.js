
import { useState } from 'react';

const useForm = ({ initialValues, validate, onSubmit }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(values);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return { values, errors, handleChange, handleSubmit, resetForm };
};

export default useForm;