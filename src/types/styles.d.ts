// import original module declarations
import 'styled-components';
import {} from 'styled-components/cssprop';
import { CSSProp } from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
}

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

type ByBreakpoint<T> = {
  [key in Breakpoint]: T;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColour: string;
    primaryColour2: string;
    primaryColourLight: string;
    primaryColourLighter: string;
    lightGrey: string;
    darkGrey: string;
    darkGrey2: string;
    darkGrey3: string;
    darkGrey4: string;
    darkGrey5: string;
    darkGrey6: string;
    red: string;
    black: string;
    black2: string;
    white: string;
    white2: string;
    white3: string;
    sectionPadding: number;
    elementPadding: number;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    paragraph1: string;
    paragraph2: string;
    paragraph2Styles: FlattenSimpleInterpolation;
    breakpointXs: string;
    breakpointSm: string;
    breakpointMd: string;
    breakpointLg: string;
    breakpointXl: string;
    breakpointXsInt: number;
    breakpointSmInt: number;
    breakpointMdInt: number;
    breakpointLgInt: number;
    breakpointXlInt: number;
    maxWidthContainer: number;
    foreground: string;
    background: string;
    faded: string;
  }
}
