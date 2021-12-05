import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getStyles } from '../../../layout/layouts';
const styles = getStyles();

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  color: ${styles.mainFontColor};
`;

const Title = ({ title, className }) => (
  <SectionTitle className={className ? className : ''}>{title}</SectionTitle>
);

Title.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
