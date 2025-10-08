import styled from "styled-components"

const CardWrapper = styled.div`
    background-color: #fff0f5;
    border: 1px solid $888;
    padding: 20px;
    border-radius: 10px;
    max-width: 300px;
    `
const Title = styled.h2`
    font-size: 20px;
    color: purple;
`
const Text = styled.p`
    color: #333;
`

const Button = styled.button`
    background: purple;
    color: white;
    border: none;
    padding: 8px 14px;
    margin-top: 10px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background: darkviolet;
    }
`

export default function CardStyledComponents(){

    return (
        <CardWrapper>
            <Title>Naslov kartice</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore velit necessitatibus perspiciatis ut eveniet porro libero enim veritatis nesciunt quis vero, atque temporibus iusto maxime deleniti deserunt fugit obcaecati magni!
            </Text>
            <Button>Klikni me</Button>
        </CardWrapper>
    )
}