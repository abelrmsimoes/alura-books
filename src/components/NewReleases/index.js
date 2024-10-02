import styled from 'styled-components';

import bookImage from '../../images/livro2.png';
import Recommendations from '../Recommendations';
import { Title } from '../Title';
import { books } from './newReleasesData';

const ReleasesContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: #EBECEE;
`

const Results = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`
const BookItem = styled.div`
  color: #000;
  padding: 2em;
  text-align: center;
  
  cursor: pointer;

  img {
    width: 120px;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`

export default function NewReleases() {
  return (
    <ReleasesContainer>
      <Title
        color="#EB9B00"
        fontSize="36px"
        textAlign="center"
      >
        Novos lançamentos
      </Title>
      <Results>
        {books.map(book => (
          <BookItem key={book.id}>
            <h4>{book.title}</h4>
            <img
              src={book.src}
              alt={book.title}
            />
          </BookItem>
        ))}
      </Results>
      <Recommendations
        title="Talvez você se interesse por:"
        subtitle="As Crônicas de Nárnia"
        description="As Crônicas de Nárnia é uma série de sete livros de alta fantasia, escrita pelo autor irlandês C. S. Lewis."
        image={bookImage}
      />
      <Recommendations
        title="Talvez você se interesse por:"
        subtitle="O Pequeno Príncipe"
        description="O Pequeno Príncipe é um romance do escritor francês Antoine de Saint-Exupéry."
        image={bookImage}
      />
    </ReleasesContainer >
  );
}