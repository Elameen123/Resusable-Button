import React, { useState } from 'react';
import styled from 'styled-components';

const Button = () => {

  const [color, setcolor] = useState("#3F3F3F");
  const [width, setwidth] = useState("5.79rem");
  const [shadow, setshadow] = useState("0px 2px 3px rgba(51, 51, 51, 0.2)");
  const [bordercolor, setbordercolor] = useState("#EOEOEO");
  const [Background, setBackground] = useState("#E0E0E0");
  const [hoverBackground, sethoverBackground] = useState("#AEAEAE");

  const ReusableButton = styled.button.attrs({type: "submit"})`
    position: absolute;
    width: ${width};
    height: 2.57rem;
    background: ${Background};
    box-shadow: ${shadow};
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.43rem;
    text-align: center;
    color: ${color};
    display: block;
    border: 1px solid ${bordercolor};
    transition: 1.5s ease;

    &:hover {
      background: ${hoverBackground};
      border: 1px solid ${bordercolor};
      color: ${color};

    }

    &:focus {
      background: ${hoverBackground};
      border: 1px solid ${bordercolor};
      color: ${color};
    }

    ${(props) => {
      if (props.variant === "outline") {
        setcolor("#3D5AFE");
        setBackground("white");
        setbordercolor("#3D5AFE");
        sethoverBackground("rgba(41, 98, 255, 0.1)")
        setwidth("6.29rem");
      }

      else if (props.disabled && (props.variant === "text") ) {
        setshadow("none");
        setcolor("#9E9E9E");
        setBackground("white");
        setbordercolor("white");
        sethoverBackground("none");
      }

      else if (props.variant === "text") {
        setcolor("#3D5AFE");
        setBackground("white");
        setbordercolor("white");
        setshadow("none");
        sethoverBackground("rgba(41, 98, 255, 0.1)")
        setwidth("6.29rem");
      }

      else if (props.disableShadow) {
        setshadow("none");
        setcolor("white");
        setBackground("#3D5AFE");
        setbordercolor("#3D5AFE");
        sethoverBackground("#3D5AFE");
      }

      else if (props.disabled) {
        setshadow("none");
        setcolor("#9E9E9E");
        setBackground("#E0E0E0");
        setbordercolor("#E0E0E0");
        sethoverBackground("#E0E0E0");
        setwidth("6.29rem");
      }
    }}
  `;
  return (
    <>
      <ReusableButton>Default</ReusableButton>
    </>
  )
}

export default Button