import React, { useEffect, createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";

export default ({children}) => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({ type: 'image/jpeg' });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const getImage = () => takeScreenShot(ref.current);

  useEffect(() => {
    if (image) {
      download(image, { name: "MoonPhase", extension: "jpg" });
    }
  }, [image]);

  return (
    <div>
      <button onClick={getImage}>Take screenshot</button>
      <div 
        className="phase-container"
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      >
        {children}
      </div>
    </div>
  );
};