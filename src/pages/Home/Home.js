import Container from '../../components/base/Container/Container';
import Section from '../../components/base/Section/Section';
import Icon from '../../components/Icon';
import { getStyles } from '../../layout/layouts';
import styled from 'styled-components';
import { Button } from '../../components/Button';
const styles = getStyles();

const Title = styled.h1`
  font-size: 40px;
  line-height: 1.5;
  color: ${styles.mainFontColor};
  margin-bottom: 18px;
  max-width: 353px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.56;
  margin-bottom: 45px;
  max-width: 377px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 306px;
`;
const VideoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: underline;
  color: ${styles.accentColor};
  .icon-triangle {
    margin-right: 8px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  padding-top: 115px;
  padding-bottom: 115px;
`;
const ImageWrapper = styled.div`
  min-width: 600px;
  height: 566px;
  background: url(${require('../../img/hero/hero.png').default});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Home = params => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <TextWrapper>
            <Title>Work at the speed of thought</Title>
            <Text>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </Text>
            <LinksWrapper>
              <Button btnType="bright" type="button">
                Get started
              </Button>
              <VideoLink href="/">
                <Icon
                  fill={styles.accentColor}
                  iconName="triangle"
                  width="20"
                  height="17"
                />
                <span>Watch the Video</span>
              </VideoLink>
            </LinksWrapper>
          </TextWrapper>
          <ImageWrapper />
        </ContentWrapper>
      </Container>
    </Section>
  );
};
export default Home;
