import PropTypes from 'prop-types';
import { Box } from 'utilities/styles/Box';
import { Text } from 'utilities/styles/Text';
import { InputStyled } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <Box my={4} alignItems="flex-start" flexDirection="column" as="label">
      <Text fontSize="m" color="black">
        Find contacts by name
      </Text>
      <InputStyled
        type="text"
        value={filter}
        placeholder="Enter name"
        name="filter"
        onChange={changeFilter}
      />
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
