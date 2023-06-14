import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { contactConfig } from './content-option';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            content,
        };

        axios
            .post('https://64841f99ee799e3216264d01.mockapi.io/contact', formData)
            .then((response) => {
                alert('Gửi biểu mẫu thành công');
            })
            .catch((error) => {
                // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi
                console.error('Lỗi khi gửi biểu mẫu:', error);
            });
    };

    return (
        <Container>
            <Row className="mb-5 mt-3">
                <Col lg="8">
                    <h1 className="display-4 mb-4">Contact Me</h1>
                    <hr className="t_border my-4 ml-0 text-left" />
                </Col>
            </Row>
            <Row className="sec_sp">
                <Col lg="5" className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                            {contactConfig.YOUR_EMAIL}
                        </a>
                        <br />
                        <br />
                        {contactConfig.hasOwnProperty('YOUR_FONE') ? (
                            <p>
                                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                            </p>
                        ) : (
                            ''
                        )}
                    </address>
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                    <form className="contact__form w-100" onSubmit={handleSubmit}>
                        <Row>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Tên"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-0"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Col>
                        </Row>
                        <textarea
                            className="form-control rounded-0"
                            id="message"
                            name="message"
                            placeholder="Nội dung tin nhắn"
                            rows="5"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg="12" className="form-group">
                                <button className="btn ac_btn" type="submit">
                                    Gửi
                                </button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
