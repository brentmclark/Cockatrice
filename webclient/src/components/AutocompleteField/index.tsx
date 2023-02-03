import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

import { InputField } from 'components';

import './AutocompleteField.css';

const PREFIX = 'AutocompleteField';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    '& .AutocompleteField-error': {
      color: theme.palette.error.main
    },

    '& .AutocompleteField-warning': {
      color: theme.palette.warning.main
    },
  },
}));

const AutocompleteField = ({ input, meta, componentProps, ...args }) => {
  console.log({args, meta, input})
  const { touched, error, warning } = meta;
  const { onChange, value, ...inputRemaining } = input

  return (
    <Root className={'AutocompleteField ' + classes.root}>
      { touched && (
        <div className="AutocompleteField-validation">
          {
            (error &&
              <div className="AutocompleteField-error">
                {error}
                <ErrorOutlinedIcon style={{ fontSize: 'small', fontWeight: 'bold' }} />
              </div>
            ) ||

            (warning && <div className="AutocompleteField-warning">{warning}</div>)
          }
        </div>
      ) }

      <Autocomplete
        autoComplete='off'
        { ...inputRemaining }
        { ...componentProps }
        className="rounded"
        variant="outlined"
        margin="dense"
        size="small"
        fullWidth={true}
        inputValue={value}
        onInputChange={onChange}
        renderInput={params => {
          return <InputField {...params} meta={meta} input={input} {...args} />
        }}
      />
    </Root>
  );
};

export default AutocompleteField;
