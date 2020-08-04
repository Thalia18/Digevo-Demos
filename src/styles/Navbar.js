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
  .nav {
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.2),
      0 1px 4px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
  .mr-auto {
    padding-left: 35em;
    font-family: 'VremenaGroteskRegular', sans-serif;
    font-weight: 640;
  }
  .opcion {
    float: right;
    font-size: 1em;
    color: black;
    text-align: center;
    padding: 0.8em 3em;
    margin-top: 1em;
  }
  .opcion.active {
    border-bottom: 3px solid black;
  }
  .lista {
    margin-top: 0.5em;
    padding: 0.8em 3em;
  }
  @media only screen and (max-width: 1080px) {
    .mr-auto {
      padding-left: 30em;
      float: right;
    }
  }
  @media only screen and (max-width: 900px) {
    .mr-auto {
      padding-left: 25em;
      float: right;
    }
    @media only screen and (max-width: 768px) {
    .mr-auto {
      padding-left: 20em;
      float: right;
    }
  }
`;
