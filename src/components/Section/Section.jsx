import PropTypes from 'prop-types';
import { Box } from 'services/styles/Box';
import { Text } from 'services/styles/Text';

export const Section = ({ title, children }) => {
  return (
    <Box
      m="5px auto"
      py={4}
      width="700px"
      flexDirection="column"
      borderRadius="normal"
      boxShadow="normal"
      bg="background"
      as="section"
    >
      {title && <Text as="h2">{title}</Text>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
