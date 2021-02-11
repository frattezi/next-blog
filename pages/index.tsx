import styled from 'styled-components'

const Title: React.FC = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return <Title>My page</Title>
}