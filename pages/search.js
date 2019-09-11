import { useRouter } from 'next/router';
import { useState } from 'react';

//Fetch
import fetch from 'isomorphic-unfetch';

//React Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//React Bootstrap Table
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

//Custom Components
import Layout from '../components/Layout';
import SearchBar from '../components/searchbar/SearchBar'
import SearchButton from '../components/searchbar/SearchButton'
import ApplicationForm from '../components/form/ApplicationForm'
import tableColumns from '../components/searchTable/TableSchema'

//Custom Styling
import '../styles/search.css'

export default function Search(props) {
    const [state, setState] = useState({
        query : props.url.query.query,
        modalShow : false
    })

    const router = useRouter();


    return (
    <Layout>
        <Row className="justify-content-md-center" style={{paddingTop:".8rem"}}>
            <Col xs={2} style={{textAlign:"center"}}>
                <h2>Search</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <SearchBar
                    id="MainSearch"
                    placeholder="Enter a University Name, Field of Study, or a Country"
                    onChange={(msg) =>
                    {
                        setState({...state,query : msg})
                    }}
                    defaultValue={state.query}/>
            </Col>
        </Row>

        <Row className="justify-content-md-center" style={{paddingTop:".8rem"}}>
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
                <BootstrapTable
                    keyField='id'
                    data={ props.searchResults }
                    columns={ tableColumns }
                    headerClasses='table-header'
                />
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
