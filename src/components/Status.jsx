import axios from "axios";

function Status({ response, userId }) {
    const checkStatus = () => {
        axios
            .post(`${BACKEND_URL}${backendPaymentVerifyUrl}`, {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: userId,
            })
            .then((verifyRes) => {
                console.log(verifyRes);
                setErrorMsg(
                    "Payment successful. Please check your email for confirmation."
                );
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setErrorMsg(
                    "An error occurred while verifying your payment. Please contact administrator."
                );
            });
    };
    return <div>Status</div>;
}

export default Status;
