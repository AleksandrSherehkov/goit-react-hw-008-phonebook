import { Section } from 'components/Section/Section';
import PhoneBook from 'services/PhoneBook.jpg';

const HomePage = () => {
  return (
    <Section>
      <img src={PhoneBook} alt="Phone book" />
    </Section>
  );
};

export default HomePage;
