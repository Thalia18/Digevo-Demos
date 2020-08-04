import { Estilos } from '../styles/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

export default class extends React.Component {
  render() {
    return (
      <Estilos className="footer">
        <div className="logo">DIGEVO</div>
        <div className="principal">
          <br />
          <br />
          <br />
          <div className="info">Oficina central - Santiago de Chile </div>
          <a className="contacto" href="https://digevo.com/contacto/">
            contacto@digevo.com
          </a>
          <div className="info">Empresa 3G Motion SpA </div>
        </div>
        <div className="secundario">
          <div className="infos">© Copyright Digevo 2020 </div>
          <div className="redes">
            <a href="https://www.linkedin.com/company/digevo/">
              <FontAwesomeIcon
                className="icono"
                icon={['fab', 'linkedin']}
                size="2x"
              />
            </a>
            <a href="https://www.facebook.com/DigevoGroup/">
              <FontAwesomeIcon
                className="icono"
                icon={['fab', 'facebook']}
                size="2x"
              />
            </a>
          </div>
        </div>
      </Estilos>
    );
  }
}
