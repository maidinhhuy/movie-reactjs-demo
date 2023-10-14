import React, {useEffect, useState} from 'react';

function LazyImage(props: { className?: string, style?: any, unloadedSrc?: string, alt: string, src: string }) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const img = new Image();

  useEffect(() => {
    img.onload = () => {
      setLoaded(true)
    };
    img.onerror = () => {
      setError(true)
    };
    img.src = props.src;
  }, [])

  if (error) {
    return <img
      className={props.className}
      style={props.style}
      src={props.unloadedSrc}
      alt={props.alt}/>
  } else if (!loaded) {
    return <img
      className={props.className}
      style={props.style}
      src={props.unloadedSrc}
      alt={props.alt}/>
  }
  return <img
    className={props.className}
    style={props.style}
    src={props.src}
    alt={props.alt}/>
}

export default LazyImage;
