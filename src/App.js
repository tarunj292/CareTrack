import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/Heading'
import Services from './components/Services'
import Input from './components/Input';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'General Consultation', description: 'Primary care physician consultation.', price: 50 },
    { id: 2, name: 'Blood Test', description: 'Routine blood work to check for conditions.', price: 30 },
  ]);

  const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addService = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price) return;

    const newService = {
      id: services.length + 1,
      ...formData,
      price: parseFloat(formData.price),
    };

    setServices([...services, newService]);
    setFormData({ name: '', description: '', price: '' });
  };

  const editService = (service) => {
    setIsEditing(true);
    setCurrentServiceId(service.id);
    setFormData({ name: service.name, description: service.description, price: service.price });
  };

  const updateService = (e) => {
    e.preventDefault();

    setServices(
      services.map((service) =>
        service.id === currentServiceId
          ? { ...service, ...formData, price: parseFloat(formData.price) }
          : service
      )
    );

    setFormData({ name: '', description: '', price: '' });
    setIsEditing(false);
    setCurrentServiceId(null);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="container">
      <Heading />

      <form onSubmit={isEditing ? updateService : addService} className="mb-4">
        <Input
          label="Service Name"
          type="text"
          name="name"
          value={formData.name}
          handleChange={handleInputChange}
        />
        <Input
          label="Service Description"
          type="text"
          name="description"
          value={formData.description}
          handleChange={handleInputChange}
        />
        <Input
          label="Service Price"
          type="number"
          name="price"
          value={formData.price}
          handleChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Service' : 'Add Service'}
        </button>
      </form>

      <h2 className="text-center display-4 text-body-emphasis">Available Services</h2>
      <Services services={services} edit={editService} del={deleteService} />
    </div>
  );
}

export default App;
