import * as colors from './colors';

const flexXYCenter = `
display: flex;
align-items: center;
justify-content: center;
`;
const pseudo = `
content: '';
position: absolute;
`;

export function getStyles(params) {
  return {
    accentColor: colors.accentColor,
    mainFontColor: colors.mainFontColor,
    secondaryFontColor: colors.secondaryFontColor,
    thirdFontColor: colors.thirdFontColor,
    fourthFontColor: colors.fourthFontColor,
    userRoleColor: colors.userRoleColor,
    userNameColor: colors.accentColor,
    whiteColor: colors.whiteColor,
    greenColor: colors.greenColor,
    blueColor: colors.blueColor,
    purpleColor: colors.purpleColor,
    redColor: colors.redColor,
    orangeColor: colors.orangeColor,
    yellowColor: colors.yellowColor,
    flexXYCenter,
    pseudo,
  };
}
