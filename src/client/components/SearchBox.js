import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setSearchText,search} from './SearchBoxModule';
class SearchBox extends React.Component{
constructor(props){
  super(props);
  this.styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: white,
      backgroundColor: blue500,
      borderRadius: 2,
      height: 35
    },
    inputStyle: {
      color: white,
      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: white
    }
  };
}
  onChangeHandler=(e)=>{
    this.props.setSearchText(e.target.value);
  };
  render(){
  return (
    <div>
      <IconButton style={this.styles.iconButton} >
        <Search color={white} />
      </IconButton>
      <TextField
        underlineShow={false}
        fullWidth={true}
        style={this.styles.textField}
        inputStyle={this.styles.inputStyle}
        hintStyle={this.styles.hintStyle}
        value={this.props.searchtext}
        onChange={this.onChangeHandler}
      />
    </div>
  );
}
}
const mapStateToProps = state => ({
searchtext:state.search.searchtext,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearchText,
  search
}, dispatch);
SearchBox.propTypes={
  searchtext:PropTypes.string.isRequired,
  setSearchText:PropTypes.func.isRequired,
  search:PropTypes.func.isRequired
};
export default  connect(mapStateToProps, mapDispatchToProps)(SearchBox);
