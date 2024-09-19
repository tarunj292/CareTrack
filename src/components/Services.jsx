const Services = ({ services, edit, del }) => {
    return (
        <>
            <div className="row">
                {services.map((service) => (
                    <div key={service.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                                <p className="card-text"><strong>Price:</strong> ₹{service.price}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-warning btn-sm" onClick={() => edit(service)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => del(service.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services;