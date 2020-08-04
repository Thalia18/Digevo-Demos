import styled from 'styled-components';

export const Box = styled.div`
  display: ${(props) => (props.boxDisplay ? 'flex' : 'block')};
  grid-column: ${(props) => (props.boxDisplay ? '1 / -1' : 'unset')};
  background-color: rgb(223, 223, 223);

  /*BOX EFFECTS*/
  border-radius: 5px;
  -webkit-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.7);
  box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.7);
  /*RESPONSIVE - DESIGN*/
  @media (max-width: 768px) {
    display: block;
    grid-column: unset;
  }
`;
// prettier-ignore
export const Image = styled.div`
  width: ${(props) => (props.boxDisplay ? '50%' : '100%')};
  img {
    ${(props) => (props.boxDisplay ?
    'border-top-left-radius:5px; border-bottom-left-radius: 5px;' :
    'border-top-right-radius:5px; border-top-left-radius:5px;')}
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
      width:100%;
    img{
        border-radius:unset;
        border-top-right-radius:5px; 
        border-top-left-radius:5px;
    }
  }
`;
export const Description = styled.div`
  width: ${(props) => (props.boxDisplay ? '50%' : '100%')};
  margin-bottom: ${(props) => (props.boxDisplay ? '0%' : '5%')};

  h3 {
    margin: 5%;
    font-size: ${(props) => (props.boxDisplay ? '2em' : '1em')};
  }
  p {
    margin: 5%;
    font-size: ${(props) => (props.boxDisplay ? '1.2em' : '1em')};
  }

  div {
    margin-left: ${(props) => (props.boxDisplay ? '80%' : '70%')};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5%;

    div {
      margin-left: 70%;
      font-size: 1.2em;
    }

    h3 {
      margin: 5%;
      font-size: 2em;
    }

    p {
      margin: 5%;
      font-size: 1.2em;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    margin-bottom: 5%;

    div {
      margin-left: 70%;
      font-size: 1em;
    }

    h3 {
      margin: 4%;
      font-size: 1em;
    }

    p {
      margin: 4%;
      font-size: 1em;
    }
  }
`;
