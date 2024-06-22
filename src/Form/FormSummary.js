
import React from 'react';

const FormSummary = ({ data, onReset }) => {
    return (
        <div className="form_area">
            <h2 className="title">Registration Summary</h2>
            <div className="summary">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Age:</strong> {data.age}</p>
                <p><strong>Attending with Guest:</strong> {data.attendingWithGuest ? 'Yes' : 'No'}</p>
                {data.attendingWithGuest && <p><strong>Guest Name:</strong> {data.guestName}</p>}
            </div>
            <button className="btn" onClick={onReset}>Register Another</button>
        </div>
    );
};

export default FormSummary;