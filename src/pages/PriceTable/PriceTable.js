import Section from '../../components/base/Section';
import Container from '../../components/base/Container';
import Title from '../../components/base/Title';
import { Card } from './Card';
import { DefaultButton } from '../../components/Button';
import CardsContent from '../../data/PriceTableContent.json';
import styled from 'styled-components';

const PriceTableText = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
const TableList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 1.66;
  font-weight: bold;
`;
const CardDescription = styled.p`
  font-size: 16px;
  line-height: 2.5;
`;
const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Price = styled.div`
  font-size: 76px;
  font-weight: bold;
  line-height: 1.3;
`;
const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Currency = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
`;
const Text = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.3;

  &:last-child {
    margin-bottom: 38px;
  }
`;
const ButtonOrder = styled(DefaultButton)`
  margin-bottom: 8px;
`;

const PriceTable = () => {
  return (
    <>
      <Section>
        <Container>
          <Title title="Price Table" />
          <PriceTableText>We offer competitive price</PriceTableText>
          <TableList>
            {CardsContent.map(card => (
              <Card cardType={card.cardType} key={card.title}>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <PriceWrapper>
                  <Price>
                    <p>{card.price}</p>
                  </Price>
                  <CurrencyWrapper>
                    <Currency>{card.currency}</Currency>
                    <div>{card.duration}</div>
                  </CurrencyWrapper>
                </PriceWrapper>
                <div>
                  <Text>{card.operators}</Text>
                  <Text>{card.notification}</Text>
                  <Text>{card.typeCite}</Text>
                </div>
                <ButtonOrder btnType={card.btnType}>{card.btnText}</ButtonOrder>
              </Card>
            ))}
          </TableList>
        </Container>
      </Section>
    </>
  );
};

export default PriceTable;
