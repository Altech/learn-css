import React, { useState, useEffect } from 'react';
import jinja from './jinja.png';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [blur, setBlur] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [grayscale, setGrayscale] = useState<number>(0);
  const [invert, setInvert] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [saturate, setSaturate] = useState<number>(100);
  const [sepia, setSepia] = useState<number>(0);
  const [hueRotate, setHueRotate] = useState<number>(0);

  return (
    <div className="App">
      <img
        src={jinja}
        style={{
          filter: `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${invert}) opacity(${opacity}) saturate(${saturate}%) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`,
        }}
      />
      <div className="controls">
        img {'{'} filter:
        <div className="control">
          <label>blur: {blur}px</label>
          <input
            type="range"
            min="0"
            max="100"
            value={blur}
            onChange={(e) => setBlur(parseInt(e.target.value))}
          />
          (0px~100px)
        </div>
        <div className="control">
          <label>brightness: {brightness}%</label>
          <input
            type="range"
            min="0"
            max="200"
            value={brightness}
            onChange={(e) => setBrightness(parseInt(e.target.value))}
          />
          (0%~200%)
        </div>
        <div className="control">
          <label>contrast: {contrast}%</label>
          <input
            type="range"
            min="0"
            max="200"
            value={contrast}
            onChange={(e) => setContrast(parseInt(e.target.value))}
          />
          (0%~200%)
        </div>
        <div className="control">
          <label>grayscale: {grayscale}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={grayscale}
            onChange={(e) => setGrayscale(parseInt(e.target.value))}
          />
          (0%~100%)
        </div>
        <div className="control">
          <label>invert: {invert}</label>
          <input
            type="range"
            min="0"
            max="1"
            value={invert}
            onChange={(e) => setInvert(parseInt(e.target.value))}
          />
          (0,1)
        </div>
        <div className="control">
          <label>opacity: {opacity}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
          />
          (0~1)
        </div>
        <div className="control">
          <label>saturate: {saturate}%</label>
          <input
            type="range"
            min="0"
            max="200"
            value={saturate}
            onChange={(e) => setSaturate(parseInt(e.target.value))}
          />
          (0%~200%)
        </div>
        <div className="control">
          <label>sepia: {sepia}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={sepia}
            onChange={(e) => setSepia(parseInt(e.target.value))}
          />
          (0%~100%)
        </div>
        <div className="control">
          <label>hue-rotate: {hueRotate}deg</label>
          <input
            type="range"
            min="0"
            max="360"
            value={hueRotate}
            onChange={(e) => setHueRotate(parseInt(e.target.value))}
          />
          (0deg~360deg)
        </div>
        {';}'}
      </div>
    </div>
  );
}

export default App;
