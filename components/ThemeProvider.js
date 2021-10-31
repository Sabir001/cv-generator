import React, { useState, useEffect, useRef } from "react";
import validateColor from "validate-color";

function ThemeProvider() {
  const [mount, setMount] = useState(false);
  const dom = useRef(null);
  const [rootColors, setRootColors] = useState([]);

  const baseColors = {
    Background: "--bg",
    Foreground: "--color",
    Secondary: "--secondary",
    Success: "--success",
    Danger: "--danger",
  };

  useEffect(() => {
    dom.current = document;
    const getColors = {};
    Object.entries(baseColors).map(([key, value]) => {
      let color = getComputedStyle(dom.current.documentElement)
        .getPropertyValue(value)
        .trim();
      getColors[value] = color && validateColor(color) ? color : "transparent";
    });
    setRootColors(getColors);
    setMount(true);
  }, []);
  useEffect(() => {
    Object.entries(rootColors).map(([key, value]) => {
      dom.current.documentElement.style.setProperty(key, value);
    });
  }, [rootColors]);

  const getChangeColor = (e, key) => {
    const setColor = { ...rootColors };
    setColor[key] = e.target.value;
    setRootColors(setColor);
  };

  if (!mount) return null;
  return (
    <div>
      {Object.entries(rootColors).map(([key, value], index) => {
        return (
          <span key={index}>
            <input
              type="color"
              defaultValue={value}
              onChange={(e) => getChangeColor(e, key)}
            />
          </span>
        );
      })}
    </div>
  );
}

export default ThemeProvider;
