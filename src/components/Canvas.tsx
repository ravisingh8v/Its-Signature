// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import Button from "../ui/Button";
// import ImagePreviewer from "./ImagePreviewer";

// export default function Canvas() {
//   const canvasRef = document.querySelector("canvas");
//   const ctx = canvasRef?.getContext("2d");

//   if (ctx) {
//     ctx.imageSmoothingEnabled = true;
//   }
//   const [writtenMode, setWrittenMode] = useState(false);
//   const [imageUrl, setImageUrl] = useState<string | undefined>("");

//   function getTargetPosition(event: any) {
//     const rect = event.target.getBoundingClientRect();
//     const scaleX = event.target.width / rect.width;
//     const scaleY = event.target.height / rect.height;
//     const positionX = (event.clientX - rect.left) * scaleX;
//     const positionY = (event.clientY - rect.top) * scaleY;
//     return [positionX, positionY];
//   }

//   function handleMouseDown(event: any) {
//     setWrittenMode(true);
//     ctx?.beginPath();
//     const [positionX, positionY] = getTargetPosition(event);
//     ctx?.moveTo(positionX, positionY);
//   }

//   function handleMouseUp() {
//     setWrittenMode(false);
//   }

//   if (ctx) {
//     ctx.lineWidth = 0.5;
//     ctx.lineJoin = ctx.lineCap = "round";
//   }
//   function handleMouseMove(event: any) {
//     if (!writtenMode) return;
//     const [positionX, positionY] = getTargetPosition(event);
//     ctx?.scale(1, 1);
//     ctx?.stroke();
//     ctx?.lineTo(positionX, positionY);
//   }

//   function generateImage() {
//     setImageUrl(canvasRef?.toDataURL());
//   }

//   return (
//     <div className="border border-red-500">
//       <canvas
//         className="canvas h-1/2 w-1/2 bg-slate-200"
//         onMouseDown={(e: any) => handleMouseDown(e)}
//         onMouseUp={handleMouseUp}
//         onMouseMove={(e: any) => handleMouseMove(e)}
//       ></canvas>
//       <Button onClick={() => generateImage()}>Generate Image</Button>
//       {canvasRef && imageUrl && (
//         <ImagePreviewer
//           src={imageUrl}
//           height={canvasRef?.height.toString()}
//           width={canvasRef?.width.toString()}
//         />
//       )}
//       <a href={canvasRef?.toDataURL()} download={true}>
//         Download
//       </a>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Button from "../ui/Button";
// import ImagePreviewer from "./ImagePreviewer";
import SignaturePad from "react-signature-canvas";
import ImagePreviewer from "./ImagePreviewer";
import ReactSignatureCanvas from "react-signature-canvas";
import SignatureFormatter from "./SignatureFormatter";
// import WithRerender from "./WithRerender";

export default function Canvas() {
  const [signature, setSignature] = useState("");
  const signatureRef = useRef<ReactSignatureCanvas | null>(null);
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(5);

  const [isBackgroundColor, setIsBackgroundColor] = useState<boolean>(false);
  const [backGroundColor, setBackgroundColor] = useState("#000000");

  // const SignaturePadWithRerender = WithRerender(SignaturePad);
  /**
   *
   */
  function generateSignature() {
    if (signatureRef.current) {
      console.log(signatureRef.current);
      setSignature(signatureRef.current.toDataURL());
    }
  }

  function clearSignature() {
    if (signatureRef.current) {
      signatureRef.current.clear();
      setSignature("");
    }
  }
  return (
    <div className="mx-auto mb-3 flex w-3/4 flex-col gap-2 lg:w-2/4">
      <SignatureFormatter
        fontSize={fontSize}
        textColor={textColor}
        setFontSize={setFontSize}
        setTextColor={setTextColor}
        isBackgroundColor={isBackgroundColor}
        setIsBackgroundColor={setIsBackgroundColor}
        setBackgroundColor={setBackgroundColor}
        backGroundColor={backGroundColor}
      />
      {/* <SignaturePadWithRerender
        ref={signatureRef}
        canvasProps={{
          className:
            "signatureCanvas bg-gray-100 border rounded w-full h-[300px]",
        }}
        backgroundColor={!isBackgroundColor ? "" : backGroundColor}
        penColor={textColor}
        minWidth={fontSize}
      /> */}

      {
        <SignaturePad
          ref={signatureRef}
          canvasProps={{
            className:
              "signatureCanvas bg-gray-100 rounded w-full h-[300px]",
          }}
          penColor={textColor}
          minWidth={fontSize}
        />
      }
	  <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-2">
        <div className="sm:col-span-1">
      <Button onClick={() => generateSignature()} type="primary">
        Generate Image
      </Button>
</div>	
<div className="sm:col-span-1">  
 <Button onClick={() => clearSignature()} type="secondary">
        Clear
      </Button>
	  </div>
	  </div>
      {signature && signatureRef.current && (
        <ImagePreviewer src={signature} clearSignature={clearSignature} />
      )}
    </div>
  );
}
