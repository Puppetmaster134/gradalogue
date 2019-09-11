import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';


import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

import ApplicationForm from '../components/form/ApplicationForm'
import postNewApplication from '../components/form/PostApplication'




export default function Header()
{
    const [state, setState] = useState({
        modalShow : false
    })


    return (

        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/index">GradClone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link onClick={() => setState({...state,modalShow : true})}>Submit</Nav.Link>
                    <Nav.Link href="/donate">Donate</Nav.Link>

                    <ApplicationForm
                        show={state.modalShow}
                        onHide={async (formState) =>
                        {
                            setState(state =>
                            {
                                return {...state,modalShow : false};
                            })


                            if(formState)
                            {
                                postNewApplication(formState);
                            }


                        }}
                    />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
