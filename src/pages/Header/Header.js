import styled from 'styled-components';
// import { getStyles } from '../../layout/layouts';
// const styles = getStyles();
import Container from '../../components/base/Container/Container';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import { Button } from '../../components/Button';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 22px;
`;

const List = styled.ul`
  margin-right: 24px;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  :not(:last-child) {
    margin-right: 24px;
  }
`;

const Header = () => {
  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Logo children="Product" />
          <Navigation />
          <List>
            <Item>
              <Button btnType="light" type="button">
                Sign In
              </Button>
            </Item>
            <Item>
              <Button btnType="light" type="button">
                Sign Up
              </Button>
            </Item>
          </List>
          <input type="checkbox" />
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export default Header;
