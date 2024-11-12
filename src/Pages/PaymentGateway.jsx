import React from 'react';

const PaymentGateway = () => {
    const handlePayment = () => {
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
            amount: 50000, // Amount in paise (e.g., 50000 paise = INR 500.00)
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo', // Optional: add your logo URL
            handler: function (response) {
                // This function is triggered after the payment is successful
                // console.log(response);
                alert(`Payment ID: ${response.razorpay_payment_id}`);
                alert(`Order ID: ${response.razorpay_order_id}`);
                alert(`Signature: ${response.razorpay_signature}`);
                // You can call an API to save the payment details in your database
            },
            prefill: {
                name: 'Your Name',
                email: 'your.email@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Razorpay Corporate Office'
            },
            theme: {
                color: '#F37254'
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <button onClick={handlePayment}>Pay with Razorpay</button>
    );
};

export default PaymentGateway;
