import PropTypes from 'prop-types';
import { Box } from 'utilities/styles/Box';
import { Text } from 'utilities/styles/Text';

export const Section = ({ title, children }) => {
  return (
    <Box
      m="30px auto"
      py={4}
      width="700px"
      flexDirection="column"
      borderRadius="normal"
      boxShadow="normal"
      bg="background"
      as="section"
    >
      {title && (
        <Text color="black" fontWeight="bold" as="h2">
          {title}
        </Text>
      )}
      {children}
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
