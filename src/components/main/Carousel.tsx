import { useEffect } from 'react';
import { Container } from '../styled.components'


const Carousel = () => {
  const getData = async() => {
    const url = import.meta.env.VITE_BASE_URL;
    const items = await fetch(url);
    const response = await items.json();
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return(
  <>
    <Container height={50}>
      Contenedor
    </Container>
  </>)
};

export default Carousel;