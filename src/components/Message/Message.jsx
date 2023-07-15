import PropTypes from 'prop-types';
import { Text } from 'service/styles/Text';

export const Message = ({ text }) => {
  return <Text>{text}</Text>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
