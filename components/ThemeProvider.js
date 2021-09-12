import React, {useState, useEffect, useRef} from 'react'

function ThemeProvider() {
    const [mount, setMount] = useState(false);
    const dom = useRef(null)
    const [rootColors, setRootColors] = useState([])

    const baseColors = {
        'Background':'--bg',
        'Foreground':'--color',
        'Secondary':'--secondary',
        'Success':'--success',
        'Danger':'--danger',
    }
    
    useEffect(() => {
      dom.current = document.documentElement;
      const getColors = {}
      Object.entries(baseColors).map(([key, value]) => {
        getColors[key] = getComputedStyle(dom.current).getPropertyValue(value).trim()
      })
      setRootColors(getColors)
      setMount(true)
    }, [])
    // console.log(rootColors)
  
    const getChangeColor = (e, key) => {
      const setColor = {...rootColors}
      setColor[key] = e.target.value
      setRootColors(setColor);
    }
  
    console.log(rootColors)
    useEffect(() => {
      Object.entries(baseColors).map(([key, value]) => {
        dom.current.style.setProperty(value, rootColors[key])
      })
    }, [rootColors])
    
    if (!mount) return null;
    
    return (
      <div>
        {Object.entries(rootColors).map(( [key, value], index ) => {
          return (
            <span key={index}>
            <input 
              type="color"
              defaultValue = {value}
              onChange = {(e) => getChangeColor(e, key)}
            />
          </span>
          )
        })}
      </div>
    )
}

export default ThemeProvider;
