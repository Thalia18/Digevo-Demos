/* eslint-disable react/react-in-jsx-scope */
import { Container } from '../styles/DemosHome';
import Box from './BoxHome';

const demosHome = () => {
  return (
    <div>
      <Container>
        <Box
          isBigBox={true}
          title='Demo1'
          description='Esto es un demo interactivo y una prueba para el diseño de la pagina
          web a mayor longitud voy a probar como se acomodan los componentes de esta pagina web'
        />
        <Box
          title='Demo1'
          description='Esto es un demo interactivo y una prueba para el diseño de la pagina
          web'
        />
        <Box
          title='Demo1'
          description='Esto es un demo interactivo y una prueba para el diseño de la pagina
          web'
        />
        <Box
          title='Demo1'
          description='Esto es un demo interactivo y una prueba para el diseño de la pagina
          web'
        />
      </Container>
    </div>
  );
};

export default demosHome;
