

const searchButtonStyle = {
    padding:5,
    border:'1px solid grey',
    borderRadius:5,
    backgroundColor:'white',
    cursor:'pointer',
    outline:'none',
    width:"100%"
};

const SearchButton = props => (
    <button
        style={searchButtonStyle}
        data-for={props.for}
        onClick={props.callback}
    >
    {props.children}
    </button>
);

export default SearchButton;
