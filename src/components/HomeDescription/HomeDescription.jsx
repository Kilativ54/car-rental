import car from 'assets/car.png';
import LinkToCatalog from 'components/LinkToCatalog/LinkToCatalog';
import { Text, TextWrapper, Image } from './HomeDescription.styled';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const HomeDescription = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <>
      <Text>
        Are you looking for a car for travel or work? Our service is ready to
        provide you with the best selection of vehicles for your needs.
      </Text>
      <TextWrapper>
        <Text>
          Let your journey be comfortable and unforgettable with our rental
          service. Start your journey with us today!
        </Text>
        <LinkToCatalog text="Get started" />
      </TextWrapper>
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 100, overflow: 'hidden' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true }}
          // , amount: 0.2
        >
          <Image src={car} alt="car" width="440" height="209" />
        </motion.div>
      )}
       </>
  );
};

export default HomeDescription;
