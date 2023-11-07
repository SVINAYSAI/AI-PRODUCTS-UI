import React, { useState, useEffect, useRef } from 'react';

function CanvasEditor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [text, setText] = useState('Edit this text');
  const [font, setFont] = useState('30px Arial');
  const [color, setColor] = useState('black');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      setCtx(context);
    }
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFont(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const drawText = () => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.font = font;
      ctx.fillStyle = color;
      ctx.fillText(text, 10, 50);
    }
  };

  return (
    <div>
      <h1>Canvas Text Editor</h1>
      <div>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
      </div>
      <div>
        <label>
          Font Size:
          <input type="text" value={font} onChange={handleFontChange} />
        </label>
      </div>
      <div>
        <label>
          Text Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
      </div>
      <canvas ref={canvasRef} width={400} height={150} />
      <button onClick={drawText}>Draw Text</button>
    </div>
  );
}

export default CanvasEditor;
