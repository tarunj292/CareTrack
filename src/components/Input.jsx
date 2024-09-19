const Input = ({ label, type, name, handleChange, value }) => {
    return (
        <>
            <div className="form-group mb-3">
                <label>{label}</label>
                <input
                    type={type}
                    className="form-control"
                    name={name}
                    placeholder={label}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Input;