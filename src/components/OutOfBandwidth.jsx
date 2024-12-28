function OutOfBandwidth() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className=" p-8 rounded-lg text-center">
                <p>
                    <i className="fas fa-exclamation-triangle text-red-600 text-4xl"></i>
                </p>
                <p className="font-bold text-red-600 text-xl">
                    This site is down due to bandwidth limit exceeded.
                </p>
                <p>Kindly contact the developer to resolve this issue.</p>

                <div>
                    <p className="text-xs text-gray-500 mt-4">
                        If this site belongs to you, please contact the
                        developer to resolve this issue as soon as possible.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-2 w-full">
                <p className="text-center text-gray-500 text-xs">Powered by </p>
                <img
                    className="w-32 mx-auto"
                    src="https://raw.githubusercontent.com/rahoolsingh/Backend/refs/heads/master/public/assets/logo-white-border.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default OutOfBandwidth;
