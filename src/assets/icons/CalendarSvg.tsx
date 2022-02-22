import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CalendarSvg = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path d="M3.25 2.438h19.5" stroke={props.color} />
    <Path
      d="M1.625 4.063v17.875M24.375 4.063v17.875M3.25 2.438c-.897 0-1.625.727-1.625 1.624M22.75 2.438c.898 0 1.625.727 1.625 1.624"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M22.75 23.563H3.25" stroke={props.color} />
    <Path
      d="M22.75 23.563a1.625 1.625 0 0 0 1.625-1.625M3.25 23.563a1.624 1.624 0 0 1-1.625-1.625M13 4.063V.813M16.25 4.063V.813M19.5 4.063V.813M9.75 4.063V.813M6.5 4.063V.813M1.625 8.938h22.75"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarSvg;
