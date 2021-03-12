import { css } from 'styled-components';

const paragraph2Styles = css`
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.6;
`;

const standardsTheme = {
  primaryColour: '#FBC81B',
  primaryColour2: '#FAD141',
  primaryColourLight: '#FDE57F',
  primaryColourLighter: '#FDF8DA',
  lightGrey: '#D8D8D8',
  darkGrey: '#242424',
  darkGrey2: '#282828',
  darkGrey3: '#3C3C3E',
  darkGrey4: '#444447',
  darkGrey5: '#636366',
  darkGrey6: '#969696',
  red: '#F72F4F',
  black: '#000000',
  black2: '#070707',
  white: '#FFFFFF',
  white2: '#FEFEFE',
  white3: '#F4F4F4',
  sectionPadding: 146,
  elementPadding: 34,
  heading1: 'font-size: 4.209rem; font-weight: normal; line-height: 1;',
  heading2: 'font-size: 3.157rem; font-weight: normal; line-height: 1.1;',
  heading3: 'font-size: 2.369rem; font-weight: normal; line-height: 1.2;',
  heading4: 'font-size: 1.777rem; font-weight: normal; line-height: 1.25;',
  paragraph1: 'font-size: 1.333rem; font-weight: normal; line-height: 1.6;',
  paragraph2: 'font-size: 1rem; font-weight: normal; line-height: 1.6;',
  paragraph2Styles,
  breakpointXs: '0px',
  breakpointSm: '576px',
  breakpointMd: '768px',
  breakpointLg: '992px',
  breakpointXl: '1200px',
  breakpointXsInt: 0,
  breakpointSmInt: 576,
  breakpointMdInt: 768,
  breakpointLgInt: 992,
  breakpointXlInt: 1200,
  maxWidthContainer: 1200,
  foreground: '#050505',
  background: 'white',
  faded: '#888',
};

export default standardsTheme;
