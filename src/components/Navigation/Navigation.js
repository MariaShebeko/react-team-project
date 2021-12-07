import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const NavWrapper = styled.nav`
  margin-left: auto;
`;

const NavList = styled.ul`
  margin-right: 24px;
  width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  padding: 5px;
`;

const NavLink = styled.a`
font-weight: 400;
font-size: 16px;
line-height: 1.75;
color: ${styles.mainFontColor};
  }

  :hover,
  :focus {
    font-weight: 600;
  }
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink href="/">Product</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Customers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Resources</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
