import PropTypes from "prop-types";

const FormField = ({
    name,
    label,
    type,
    options = [],
    value,
    style,
    handleChange,
    placeholder = "",
    required = false,
    error = "",
    charLimitText = "",
    img = null,
    loading,
}) => {
    return (
        <div className="">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            {type === "text" ||
            type === "email" ||
            type === "tel" ||
            type === "number" ||
            type === "date" ? (
                <input
                    type={type}
                    name={name}
                    id={name}
                    style={style}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={loading}
                    className={`mt-1 p-2 border outline-none ${
                        error ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm`}
                />
            ) : type === "dropdown" ? (
                <select
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    disabled={loading}
                    className="mt-1 p-2 border outline-none bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm disabled:bg-gray-100"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : type === "file" ? (
                <>
                    <input
                        id={name}
                        name={name}
                        type={type}
                        accept="image/*"
                        onChange={handleChange}
                        required={required}
                        disabled={loading}
                        className="mb-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                    />
                    {img && (
                        <img src={img} alt="Instructions" className="w-full" />
                    )}
                </>
            ) : null}

            <p className="flex justify-between">
                {error ? (
                    <span className="text-red-500 text-sm mt-1">{error}</span>
                ) : (
                    <span className="text-gray-500 text-sm mt-1"></span>
                )}
                {charLimitText && (
                    <span className="text-gray-500 text-sm mt-1 text-right">
                        {charLimitText}
                    </span>
                )}
            </p>
        </div>
    );
};

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string,
    style: PropTypes.object,
    charLimitText: PropTypes.string,
    img: PropTypes.string,
    loading: PropTypes.bool,
};

export default FormField;
