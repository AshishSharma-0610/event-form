
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import FormSummary from './FormSummary';
import './EventRegistrationForm.css';

const EventRegistrationForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
        setSubmittedData(formData);
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setSubmittedData(null);
    };

    return (
        <div className="container">
            {isSubmitted ? (
                <FormSummary data={submittedData} onReset={handleReset} />
            ) : (
                <RegistrationForm onSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default EventRegistrationForm;