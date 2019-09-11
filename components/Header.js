

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { useRouter } from 'next/router';
import { useState } from 'react';

import ApplicationForm from '../components/form/ApplicationForm'



const useStyles = makeStyles(theme => ({
    navbar: {
        marginBottom: theme.spacing(3)
    }
}));

const postNewApplication = async app =>
{
    const queryBody = {
        "application": {
            "user": app.email,
            "universityName":app.universityName ,
            "program": app.program,
            "degree": app.degree,
            "accepted": app.accepted,
            "attending": app.attending,
            "greQuantitative":app.greQuantitative,
            "greVerbal":app.greVerbal,
            "greWriting":app.greWriting,
            "comments": app.greComments,
            "dateApplied": app.dateApplied,
            "dateDecision": app.dateDecision
        }
    };

    const res = await fetch(`http://localhost:3000/api/create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryBody)
    });

    var response = await res.json();

    console.log(response)
}

export default function Header()
{
    const [state, setState] = useState({
        modalShow : false
    })

    const classes = useStyles();

    return (

        <Navbar className={classes.navbar} bg="light" expand="lg">
            <Navbar.Brand href="#home">GradClone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link><Nav.Link href="/search">Search</Nav.Link></Link>
                <Nav.Link onClick={() => setState({...state,modalShow : true})}>Submit</Nav.Link>
                <Link><Nav.Link href="/about">About</Nav.Link></Link>

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
        </Navbar>
    )
}
