import styled from "styled-components"
import { Title } from "../Title"

const Button = styled.button`
  background-color: #EB9B00;
  color: #FFF;
  font-size: 16px;
  font-weight: 900;
  border: none;
  padding: 10px 0px;
  width: 150px;
  display: block;
  text-align: center;

  &:hover {
    background-color: #FFA500;
    cursor: pointer;
  }
`

const Card = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  margin: 0 auto;
  padding: 25px 20px;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`

const Description = styled.p`
  max-width: 300px;
`

const Image = styled.img`
  width: 150px;
`

const Subtitle = styled.h3`
  color: #002F52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`

export default function Recommendations({ title, subtitle, description, image }) {
  return (
    <Card>
      <div>
        <Title
          fontSize="16px"
          color="#EB9B00"
          textAlign="left"
        >
          {title}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </div>
      <div>
        <Image src={image} alt={title} />
        <Button>Saiba mais</Button>
      </div>
    </Card >
  )
}
