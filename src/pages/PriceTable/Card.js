import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const CardTypes = {
  light: {
    background: `${styles.whiteColor}`,
    color: `${styles.mainFontColor}`,
    border: `1px solid ${styles.greenColor}`,
  },
  dark: {
    background: `${styles.accentColor}`,
    color: `${styles.whiteColor}`,
    border: 'none',
  },
};

const DefaultCard = styled.li`
  width: 274px;
  padding: 24px;
  text-align: center;
  background-color: ${({ cardType }) => CardTypes[cardType].background};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border: ${({ cardType }) => CardTypes[cardType].border};
  border-radius: 8px;
  color: ${({ cardType }) => CardTypes[cardType].color};
  :hover,
  :focus {
    background: ${({ cardType }) =>
      cardType === 'light'
        ? CardTypes['dark'].background
        : CardTypes['light'].background};
    color: ${({ cardType }) =>
      cardType === 'light'
        ? CardTypes['dark'].color
        : CardTypes['light'].color};
  }
`;

export function Card({ children, cardType }) {
  return <DefaultCard cardType={cardType}>{children}</DefaultCard>;
}

Card.defaultProps = {
  cardType: 'light',
};
