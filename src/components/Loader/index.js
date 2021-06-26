import React from "react";
import PropTypes from "prop-types";
import { Container, Spinner } from "./styled";

export default function LoaderComponent({
  isLoading,
  inline,
  fullscreen,
  background,
  color,
  size,
}) {
  const display = !isLoading ? "none" : inline ? "inline" : "flex";

  return (
    <Container
      display={display}
      background={background}
      fullscreen={fullscreen}
    >
      <Spinner>
        <svg
          width={`${size}px`}
          height={`${size}px`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.3249 96.5353C86.8737 89.2252 100 71.1455 100 50C100 22.3858 77.6142 0 50 0V8C73.196 8 92 26.804 92 50C92 67.8815 80.8254 83.1529 65.0786 89.2121L68.3249 96.5353Z"
            fill={color || "black"}
          />
        </svg>
      </Spinner>
    </Container>
  );
}

LoaderComponent.propTypes = {
  isLoading: PropTypes.bool,
  inline: PropTypes.bool,
  fullscreen: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};
