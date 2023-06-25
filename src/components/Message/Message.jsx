import PropTypes from 'prop-types';
import { Text } from 'utilities/styles/Text';

export const Message = ({ text }) => {
  return <Text>{text}</Text>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
