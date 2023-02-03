import { Form } from 'react-final-form'

import { InputAction } from 'components';
import AutocompleteField from 'components/AutocompleteField';

const AddToBuddies = ({ onSubmit, users }) => (
  <Form onSubmit={values => onSubmit(values)}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <InputAction
          action="Add"
          label="Add to Buddies"
          name="userName"
          component={AutocompleteField}
          componentProps={{
            options: users,
            getOptionLabel: user => user?.name ?? '',
            freeSolo: true,
          }}
        />
      </form>
    )}
  </Form>
);

export default AddToBuddies;
