

const searchBarStyle = {
  padding: 5,
  border: '1px solid #DDD',
  borderRadius:5,
  outline:'none',
  width:"100%"
};

export default class SearchBar extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            text : this.props.defaultValue
        }

        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({text : event.target.value});
        this.props.onChange(this.state.text)
    }

    render() {
        return (
            <div>
              <input type="text" id={this.props.id} style={searchBarStyle} placeholder={this.props.placeholder} onChange={this.handleChange} value={this.state.text || ''}/>
            </div>
        );
    }

}
