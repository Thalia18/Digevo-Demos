import styled from 'styled-components';

export const Estilos = styled.div`
  @keyframes anim {
    0% {
      color: #000;
    }
    33% {
      color: rgb(13, 224, 183);
    }
    66% {
      color: rgb(106, 27, 154);
    }
    100% {
      color: rgb(36, 103, 217);
    }
  }
  .logo {
    animation-name: anim;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    float: left;
    font-size: 2.1em;
    color: black;
    text-align: center;
    padding-left: 2.4em;
    font-weight: 550;
    text-decoration: none;
    font-family: 'VremenaGroteskRegular', sans-serif;
  }
  .principal {
    background-color: #f8f8f8;
    width: 100%;
    height: 12em;
    margin-top: 1.5em;
    padding-left: 5em;
  }
  .contacto {
    color: black;
    font-weight: 500;
  }
  .secundario {
    display: block;
    background-color: #f8f8f8;
    width: 100%;
    height: 4em;
    border-top: 1px solid #999;
    padding-left: 5em;
  }
  .infos {
    padding-top: 0.5em;
    float: left;
  }
  .redes {
    float: right;
    padding-top: 0.5em;
    padding-right: 5em;
  }
  .icono {
    color: black;
    background-color: #f8f8f8;
    margin-left: 0.5em;
  }
`;
