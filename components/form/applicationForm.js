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



export default function ApplicationForm(props)
{
    const [dateApplied, setDateApplied] = useState();
    const [dateDecision, setDateDecision] = useState();
    const [greQuant, setGreQuant] = useState(0);
    const [greVerbal, setGreVerbal] = useState(0);
    const [greWriting, setGreWriting] = useState(0);

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
                                            <Form.Control type="text" placeholder="Name of the University" />
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formProgram">
                                            <Form.Label>Program</Form.Label>
                                            <Form.Control type="text" placeholder="Program or Department" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formDegree">
                                            <Form.Label>Degree</Form.Label>
                                            <Form.Control as="select">
                                                <option>PhD</option>
                                                <option>Masters</option>
                                                <option>Masters (Research)</option>
                                                <option>Masters (Coursework)</option>
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
                                                    selected={dateApplied}
                                                    onChange={(val) =>
                                                    {
                                                        setDateApplied(val)
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
                                                    selected={dateDecision}
                                                    onChange={(val) =>
                                                    {
                                                        setDateDecision(val)
                                                    }}
                                                />
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col xs={2}>
                                        <Form.Group controlId="formAccepted">
                                            <Form.Check type="checkbox" label="Accepted" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={2}>
                                        <Form.Group controlId="formAccepted">
                                            <Form.Check type="checkbox" label="Attending" />
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
                                                value={greQuant}
                                                onChange={(event) =>
                                                {
                                                    if(!!(event.target.value) && event.target.value <= 170 && event.target.value >= 0)
                                                    {
                                                        setGreQuant(event.target.value);
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
                                                value={greVerbal}
                                                onChange={(event) =>
                                                {
                                                    if(!!(event.target.value) && event.target.value <= 170 && event.target.value >= 0)
                                                    {
                                                        setGreVerbal(event.target.value);
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
                                                value={greWriting}
                                                step=".5"
                                                onChange={(event) =>
                                                {
                                                    if(!!(event.target.value) && event.target.value <= 6 && event.target.value >= 0)
                                                    {
                                                        setGreWriting(event.target.value);
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
                                                placeholder="Comments"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Email Address" />
                                            <Form.Text className="text-muted">
                                                Optional, but allows you to post followups later.
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
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}
