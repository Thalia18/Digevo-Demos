/* eslint-disable react/react-in-jsx-scope */
import { Box, Image, Description } from '../styles/BoxHome';

const BoxHome = ({ isBigBox, title, description }) => {
  return (
    <Box boxDisplay={isBigBox}>
      <Image boxDisplay={isBigBox}>
        <img src='https://i.ibb.co/bgJrQ2n/portada.jpg' alt='' />
      </Image>
      <Description boxDisplay={isBigBox}>
        <h3>{title}</h3>
        <p>{description}</p>
        <br />
        <div>Probar</div>
      </Description>
    </Box>
  );
};

export default BoxHome;
