import { Field } from 'react-final-form'
import Button from '@mui/material/Button';

import { InputField } from 'components';

import './InputAction.css';

const InputAction = (props) => {
  const { action, label, name, validate, disabled, component, componentProps } = props
  return (
  <div className="input-action">
    <div className="input-action__item">
      <Field label={label} name={name} component={component} validate={validate} componentProps={componentProps} />
    </div>
    <div className="input-action__submit">
      <Button color="primary" variant="contained" type="submit" disabled={disabled}>
        {action}
      </Button>
    </div>
  </div>
)};

InputAction.defaultProps = {
  disabled: false,
  validate: () => false,
  component: InputField,
  componentProps: {},
}

export default InputAction;
