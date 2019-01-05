import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import { setNameText,setPriceText,setCategoryText,setExpDateText,save} from './FormPageModule';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FormPage extends React.Component{
  constructor(props){
    super(props)
   this.styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };
  }
  onChangeHandler1=e=>{
    this.props.setNameText(e.target.value);
  }
  onChangeHandler2=e=>{
    this.props.setPriceText(e.target.value);
  }
  handleChange1 = (event, index, value) =>{ 
    this.props.setCategoryText(value)
  };
  handleChange2 = (event,value) =>{
    console.log(value.toString());
    this.props.setExpDateText(value.toString());
    };
    
  render(){
  return (
    <PageBase title="Add Product"
              navigation="Application / Add Product">
      <form>

        <TextField
          hintText="Name"
          floatingLabelText="Name"
          fullWidth={true}
          value={this.props.name}
          onChange={this.onChangeHandler1}
        />

        <TextField
          hintText="Price"
          floatingLabelText="Price"
          fullWidth={true}
          type="number"
          value={parseInt(this.props.price)}
          onChange={this.onChangeHandler2}
        />

        <SelectField
          floatingLabelText="Category"
          value={this.props.category}
          fullWidth={true}
          onChange={this.handleChange1}>
          <MenuItem key={0} value="Conditioners" primaryText="Conditioners"/>
          <MenuItem key={1} value="Tv" primaryText="TV"/>
          <MenuItem key={2} value="Mobiles" primaryText="Mobiles"/>
          <MenuItem key={3} value="Computers" primaryText="Computers"/>
        </SelectField>

        <DatePicker
          hintText="Expiration Date"
          floatingLabelText="Expiration Date"
          fullWidth={true}
          value={new Date(this.props.expirationdate)}
          onChange={this.handleChange2}/>

        <div style={this.styles.toggleDiv}>
          <Toggle
            label="Disabled"
            labelStyle={this.styles.toggleLabel}
          />
        </div>

        <Divider/>

        <div style={this.styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>

          <RaisedButton label="Save"
                        style={this.styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
  }
};
const mapStateToProps = state => ({
  name:state.form.name,
  price:state.form.price,
  category:state.form.category,
  expirationdate:state.form.expirationdate,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setNameText,
  setPriceText,
  setCategoryText,
  setExpDateText,
  save
}, dispatch);

FormPage.propTypes = {
  setNameText: PropTypes.func.isRequired,
  setPriceText: PropTypes.func.isRequired,
  setCategoryText: PropTypes.func.isRequired,
  setExpDateText: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  expirationdate: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);

