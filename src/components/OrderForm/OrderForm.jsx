import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';

const OrderForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        mail: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Label column="lg" lg={2}>
                        Nombre
                    </Form.Label>
                    <Form.Control
                        style={{ maxWidth: '950px' }}
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </Row>
                <Row className="mb-3">
                    <Form.Label column="lg" lg={2}>
                        Apellido
                    </Form.Label>
                    <Form.Control
                        style={{ maxWidth: '950px' }}
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                </Row>
                <Row className="mb-3">
                    <Form.Label column="lg" lg={2}>
                        Mail
                    </Form.Label>
                    <Form.Control
                        style={{ maxWidth: '950px' }}
                        type="text"
                        placeholder="Mail"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                    />
                </Row>
                <button type="submit" className="btn btn-primary mt-2">
                    Generar orden
                </button>
            </Form>
        </>
    );
};

export default OrderForm;