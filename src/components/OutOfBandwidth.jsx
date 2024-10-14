import { useState, useEffect } from "react";

function OutOfBandwidth() {
    const [counter, setCounter] = useState({
        hh: 0,
        mm: 0,
        ss: 0,
    });
    const [showCounter, setShowCounter] = useState(false);

    // const expiryDate = new Date("2024-10-14T23:59:59").getTime();
    const expiryDate = new Date("2024-10-21T23:59:59").getTime();

    const showExpiryDate = () =>
        new Date(expiryDate).toDateString() + " 11:59 PM";

    useEffect(() => {
        // change title of the page
        const checkTimeLeft = () => {
            const now = new Date().getTime();
            const distance = expiryDate - now;

            if (distance < 86400000) {
                document.title = "Out of Bandwidth";

                setShowCounter(true);

                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCounter({
                    hh: hours < 0 ? "00" : hours < 10 ? `0${hours}` : hours,
                    mm:
                        minutes < 0
                            ? "00"
                            : minutes < 10
                            ? `0${minutes}`
                            : minutes,
                    ss:
                        seconds < 0
                            ? "00"
                            : seconds < 10
                            ? `0${seconds}`
                            : seconds,
                });
            }
        };

        checkTimeLeft();
        const interval = setInterval(checkTimeLeft, 1000);

        return () => clearInterval(interval);
    }, [expiryDate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className=" p-8 rounded-lg text-center">
                <p>
                    <i className="fas fa-exclamation-triangle text-red-600 text-4xl"></i>
                </p>
                <p className="font-bold text-red-600 text-xl">
                    Seems Like This Website Has Run Out of Bandwidth
                </p>
                <p>Kindly contact the administrator to get more bandwidth.</p>

                {showCounter && (
                    <div className="flex justify-center items-center mt-4 text-2xl">
                        <div className="flex items-center mx-2">
                            <p className="font-bold">{counter.hh}</p>
                        </div>
                        <p className="-mt-1">:</p>
                        <div className="flex items-center mx-2">
                            <p className="font-bold">{counter.mm}</p>
                        </div>
                        <p className="-mt-1">:</p>
                        <div className="flex items-center mx-2">
                            <p className="font-bold">{counter.ss}</p>
                        </div>
                    </div>
                )}

                <div>
                    <p className="text-xs text-gray-500 mt-4">
                        If this site belongs to you, please contact the admin
                        before the expiry date to save your data.
                    </p>
                    <p className="text-xs text-gray-500">
                        Site is expiring on{" "}
                        <span className="font-bold">{showExpiryDate()}</span>
                    </p>
                </div>
            </div>
            {showCounter && (
                <div className="absolute bottom-2 w-full">
                    <p className="text-center text-gray-500 text-xs">
                        Powered by{" "}
                    </p>
                    <img
                        className="w-32 mx-auto"
                        src="https://raw.githubusercontent.com/rahoolsingh/Backend/refs/heads/master/public/assets/logo-white-border.png"
                        alt=""
                    />
                </div>
            )}
        </div>
    );
}

export default OutOfBandwidth;
