// react
import * as React from 'react';
// csstype
import { Property } from 'csstype';
// type
interface NameLogoProps {
  name?: string;
  bgColor?: Property.BackgroundColor;
  bgBorder?: Property.BorderRadius;
  fontSize?: Property.FontSize;
}

const NameLogo: React.FunctionComponent<NameLogoProps> = (props) => {
  const {
    name = 'Name',
    bgBorder = 4,
    bgColor = 'wheat',
    fontSize = 'inherit',
  } = props;
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        width: 'fit-content',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          backgroundColor: bgColor,
          borderRadius: bgBorder,
          display: 'flex',
          height: 30,
          width: 30,
        }}
      >
        <p
          style={{
            color: 'inherit',
            fontSize,
            fontWeight: 'bold',
            left: 10,
            position: 'absolute',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default NameLogo;
