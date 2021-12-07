import Container from '../../components/base/Container/Container';
import Section from '../../components/base/Section/Section';
import { getStyles } from '../../layout/layouts';
import styled from 'styled-components';
const styles = getStyles();

const StartText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.62;
  margin-bottom: 8px;
  color: ${styles.mainFontColor};
`;

const TitleTwo = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${styles.mainFontColor};
  margin-bottom: 23px;
`;

const TitleThree = styled.h3`
  font-size: 16px;
  line-height: 1.62;
  margin-bottom: 12px;
  color: ${styles.mainFontColor};
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.62;
  max-width: 376px;
  color: ${styles.mainFontColor};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ImageWrapper = styled.div`
  min-width: 540px;
  height: 474px;
  background: url(${require('../../img/management/management.png').default});
  background-size: contain;
  background-repeat: no-repeat;
`;
const List = styled.ul`
  margin-top: 30px;
`;

const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;
const Management = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <TextWrapper>
            <StartText>Effortless Validation for</StartText>
            <TitleTwo>Management</TitleTwo>
            <Text>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </Text>
            <List>
              <ListItem>
                <TitleThree>Accessory makers</TitleThree>
                <Text>
                  While most people enjoy casino gambling, sports betting,
                  lottery and bingo playing for the fun.
                </Text>
              </ListItem>
              <ListItem>
                <TitleThree>Alterationists</TitleThree>
                <Text>
                  If you are looking for a new way to promote your business that
                  won’t cost you more money.
                </Text>
              </ListItem>
            </List>
          </TextWrapper>
          <ImageWrapper />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Management;
