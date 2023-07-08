import { FaTrash } from 'react-icons/fa';
import { FcCellPhone } from 'react-icons/fc';
import { Box } from 'utilities/styles/Box';
import { Text } from 'utilities/styles/Text';
import { IconUser, ButtonTrash } from 'components/Contact/Contact.styled';

export const Contact = ({ contact: { id, name, number }, onRemoveContact }) => {
  return (
    <Box justifyContent="space-around" width="650px" bg="white" as="li">
      <Box gridGap={4} justifyContent="flex-start" width="200px">
        <IconUser />
        <Text fontSize="m" fontWeight="bold" color="black">
          {name}
        </Text>
      </Box>
      <Box gridGap={3} justifyContent="flex-start" width="200px">
        <FcCellPhone />
        <Text fontSize="m" fontWeight="bold" color="black">
          {number}
        </Text>
      </Box>
      <ButtonTrash as="button" type="button" onClick={() => onRemoveContact(id)}>
        <FaTrash />
      </ButtonTrash>
    </Box>
  );
};
