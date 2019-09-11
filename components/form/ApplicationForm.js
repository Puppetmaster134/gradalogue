import { useState } from 'react';

import Modal from 'react-bootstrap/Modal'
import {
    Button,
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap'

//Custom CSS
import '../../styles/form/applicationForm.css'

//React-DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const getDefaultState = () =>
{
    return {
        email : '',
        universityName : '',
        program : '',
        degree : 'Masters',
        accepted : false,
        attending : false,
        greQuantitative : 0,
        greVerbal : 0,
        greWriting : 0,
        comments : '',
        dateApplied : new Date(),
        dateDecision : new Date()
    }
}

export default function ApplicationForm(props)
{
    const [state, setState] = useState(getDefaultState())

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Submit a new entry</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formUniversityName">
                                            <Form.Label>University</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Name of the University"
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, universityName: event.target.value }
                                                    });
                                                }} />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formProgram">
                                            <Form.Label>Program</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Program or Department"
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, program: event.target.value }
                                                    });
                                                }} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formDegree">
                                            <Form.Label>Degree</Form.Label>
                                            <Form.Control
                                                as="select"
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, degree: event.target.value }
                                                    });
                                                }}>
                                                <option>Masters</option>
                                                <option>Masters (Research)</option>
                                                <option>Masters (Coursework)</option>
                                                <option>PhD</option>
                                                <option>Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formDateApplied">
                                            <Form.Label>Date Applied</Form.Label>
                                            <Form.Control as="div" className="datepicker-container">
                                                <DatePicker
                                                    selected={state.dateApplied}
                                                    onChange={(val) =>
                                                    {
                                                        setState(state => {
                                                            return { ...state, dateApplied: val }
                                                        });
                                                    }}
                                                />
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formDateDecision">
                                            <Form.Label>Date Decision</Form.Label>
                                            <Form.Control as="div" className="datepicker-container">
                                                <DatePicker
                                                    selected={state.dateDecision}
                                                    onChange={(val) =>
                                                    {
                                                        setState(state => {
                                                            return { ...state, dateDecision: val }
                                                        });
                                                    }}
                                                />
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col xs={2}>
                                        <Form.Group controlId="formAccepted">
                                            <Form.Check
                                                type="checkbox"
                                                label="Accepted"
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, accepted: event.target.checked }
                                                    });
                                                }} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={2}>
                                        <Form.Group controlId="formAttending">
                                            <Form.Check
                                                type="checkbox"
                                                label="Attending"
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, attending: event.target.checked }
                                                    });
                                                }} />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>






                                <Form.Row>
                                    <Col>
                                        GRE
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formGreQuant">
                                            <Form.Label>Quantitative</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={state.greQuantitative}
                                                onChange={(event) =>
                                                {
                                                    if(!!(event.target.value) && event.target.value <= 170 && event.target.value >= 0)
                                                    {
                                                        event.persist();
                                                        setState(state => {
                                                            return { ...state, greQuantitative: Number(event.target.value) }
                                                        });
                                                    }
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formGreVerbal">
                                            <Form.Label>Verbal</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={state.greVerbal}
                                                onChange={(event) =>
                                                {
                                                    if(!!(event.target.value) && event.target.value <= 170 && event.target.value >= 0)
                                                    {
                                                        event.persist();
                                                        setState(state => {
                                                            return { ...state, greVerbal: Number(event.target.value) }
                                                        });
                                                    }
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formGreWriting">
                                            <Form.Label>Analytical Writing</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={state.greWriting}
                                                step=".5"
                                                onChange={(event) =>
                                                {
                                                    if(!!(event.target.value) && event.target.value <= 6 && event.target.value >= 0)
                                                    {
                                                        event.persist();
                                                        setState(state => {
                                                            return { ...state, greWriting: Number(event.target.value) }
                                                        });
                                                    }
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formComments">
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control
                                                type="textarea"
                                                placeholder="Number of Publications, Professor of Interest, Undergraduate GPA, etc."
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, comments: event.target.value }
                                                    });
                                                }}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email Address"
                                                onChange={(event) =>
                                                {
                                                    event.persist();
                                                    setState(state => {
                                                        return { ...state, email: event.target.value }
                                                    });
                                                }} />
                                            <Form.Text className="text-muted">
                                                Optional, but allows you to post followups later. Nobody will ever see this but us and we will never spam you. I promise.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>


                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() =>
                {
                    props.onHide(state);
                    setState(getDefaultState())
                }}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
