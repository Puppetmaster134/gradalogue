import { useRouter } from 'next/router';
import { useState } from 'react';

//Fetch
import fetch from 'isomorphic-unfetch';

//React bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

//Material UI Grid
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Moment
import Moment from 'react-moment';
import 'moment-timezone';

//Custom Components
import Layout from '../components/Layout';
import SearchBar from '../components/searchbar/SearchBar'
import SearchButton from '../components/searchbar/SearchButton'
import ApplicationForm from '../components/form/ApplicationForm'

//Custom Styling
import '../styles/search.css'


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

export default function Search(props) {
    const [state, setState] = useState({
        query : props.url.query.query,
        modalShow : false
    })

    const router = useRouter();

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
        },
        table: {
            minWidth: 650
        },
        tablecell: {
            fontSize: '.6rem'
        }
    }));

    const classes = useStyles();

    return (
    <Layout>
        <Row>
            <Col xs={12}>
                <h2>Search</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={10}>
                <SearchBar
                    id="MainSearch"
                    placeholder="Enter a University Name, Field of Study, or a Country"
                    onChange={(msg) =>
                    {
                        setState({...state,query : msg})
                    }}
                    defaultValue={state.query}/>
            </Col>
            <Col xs={2}>
                <SearchButton
                    for="MainSearch"
                    callback={() => {
                        if(state.query)
                        {
                            router.push({
                                pathname: '/search',
                                query: { q: state.query }
                            });
                        }
                        else {
                            router.push('/search');
                        }
                    }}>
                    Run Search!
                </SearchButton>
            </Col>
        </Row>


        <Row>
            <Col xs={12}>
                <ButtonToolbar
                >
                    <Button variant="primary" onClick={() => setState({...state,modalShow : true})}>
                        Add
                    </Button>

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
                </ButtonToolbar>
            </Col>
        </Row>


        <Row>
            <Col xs={12}>
                <Paper className={classes.root}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tablecell} align="left">Accepted</TableCell>
                                <TableCell className={classes.tablecell}  align="left">Attending</TableCell>
                                <TableCell className={classes.tablecell}  align="left">University</TableCell>
                                <TableCell className={classes.tablecell}  align="left">Program</TableCell>
                                <TableCell className={classes.tablecell}  align="left">Degree</TableCell>
                                <TableCell className={classes.tablecell}  align="left">GRE</TableCell>
                                <TableCell className={classes.tablecell}  align="left">Applied</TableCell>
                                <TableCell className={classes.tablecell}  align="left">Decision</TableCell>
                                <TableCell className={classes.tablecell}  align="left">Comments</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.searchResults.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell className={classes.tablecell}  component="th" scope="row">{row.accepted ? "Accepted" : "Rejected"}</TableCell>
                                        <TableCell className={classes.tablecell}  align="left">{row.accepted ? (row.attending ? "Attending" : "Not Attending") : "Rejected, Not Attending"}</TableCell>
                                        <TableCell className={classes.tablecell}  align="left">{row.universityName}</TableCell>
                                        <TableCell className={classes.tablecell} align="left">{row.program}</TableCell>
                                        <TableCell className={classes.tablecell} align="left">{row.degree}</TableCell>
                                        <TableCell className={classes.tablecell} align="left">{row.greVerbal}/{row.greQuantitative}/{row.greWriting}</TableCell>
                                        <TableCell className={classes.tablecell} align="left"><Moment format="MMM DD,YYYY">{row.dateApplied}</Moment></TableCell>
                                        <TableCell className={classes.tablecell} align="left"><Moment format="MMM DD,YYYY">{row.dateDecision}</Moment></TableCell>
                                        <TableCell className={classes.tablecell} align="left">{row.comments}</TableCell>
                                    </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Col>
        </Row>
    </Layout>
    );
}


Search.getInitialProps = async function(context) {
    var searchResults = [];

    if(context.query)
    {
        const {
            q
        } = context.query;

        const queryBody = {
            "params": {
                "text": q
            }
        };



        const res = await fetch(`http://localhost:3000/api/search`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queryBody)
        });

        var {
            searchResults
        } = await res.json();

        if(!searchResults)
            searchResults = [];
    }


    return { searchResults };
};
