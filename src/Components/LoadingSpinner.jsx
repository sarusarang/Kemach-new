import React from 'react'
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {



    return (



        <>

            <div style={spinnerContainer}>

                <Spinner animation="border" role="status" style={spinnerStyle}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

            </div>

        </>




    )





}


const spinnerContainer = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop:"15rem",
    height: '100vh',
    backgroundColor: '#f8f9fa', // light background
};

const spinnerStyle = {
    width: '4rem',
    height: '4rem',
    color: 'red',
};

export default LoadingSpinner