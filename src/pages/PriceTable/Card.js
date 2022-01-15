import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const DefaultCard = styled.li`
  width: 274px;
  padding: 24px;
  text-align: center;
  background-color: ${styles.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid ${styles.greenColor};
  border-radius: 8px;
  color: ${styles.mainFontColor};
  :hover,
  :focus {
    background-color: ${styles.accentColor};
    color: ${styles.whiteColor};
    border: none;
  }
`;

export function Card({ children }) {
  return <DefaultCard>{children}</DefaultCard>;
}
