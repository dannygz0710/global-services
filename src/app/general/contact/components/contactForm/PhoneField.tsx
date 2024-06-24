import React from 'react';
import { Field } from 'formik';
import PhoneInput from 'react-phone-number-input';

const PhoneInputField = ({ field }:any) => (
  <div className="input-field">
    <PhoneInput
      placeholder="Enter phone number"
      name={field.name}
    
   
    />
  </div>
);

export default PhoneInputField;
