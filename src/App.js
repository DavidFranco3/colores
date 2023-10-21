import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const MapChartWithCanvas = () => {
  const canvasRef = useRef(null);
  const [markerX, setMarkerX] = useState(0);
  const [markerY, setMarkerY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Cargar la imagen de fondo
    const backgroundImage = new Image();
    backgroundImage.src =
      "https://res.cloudinary.com/omarlestrella/image/upload/v1697844608/cancun/laboratorio/1697844606962_DP.7707b4c6390858bcff33.jpg.jpg";

    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      // Dibujar un marcador en las coordenadas ingresadas en los campos de entrada
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(markerX, markerY, 10, 0, Math.PI * 2);
      ctx.fill();
    };
  }, [markerX, markerY]);

  return (
    <div className="containerCanvasMap">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="canvas-map"
      ></canvas>

      <div>
        <label htmlFor="markerX">Coordenada X:</label>
        <input
          type="number"
          id="markerX"
          value={markerX}
          onChange={(e) => setMarkerX(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="markerY">Coordenada Y:</label>
        <input
          type="number"
          id="markerY"
          value={markerY}
          onChange={(e) => setMarkerY(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MapChartWithCanvas;
