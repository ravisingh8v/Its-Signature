interface SignatureFormatter {
  fontSize: number;
  textColor: string;
  setFontSize: (arg: number) => void;
  setTextColor: (arg: string) => void;
  isBackgroundColor: boolean;
  setIsBackgroundColor: (arg: boolean) => void;
  setBackgroundColor: (arg: string) => void;
  backGroundColor: string;
}

export default function SignatureFormatter({
  fontSize,
  textColor,
  setFontSize,
  setTextColor,
  // setIsBackgroundColor,
  // setBackgroundColor,
  // isBackgroundColor,
  // backGroundColor,
}: SignatureFormatter) {
  return (
    <div className="my-4 grid grid-cols-1 gap-y-2 rounded p-4 text-lg sm:grid-cols-2 sm:gap-x-3">
      {/* Set Color  */}
      <div className="flex flex-col">
        <label htmlFor="text-color" className="mb-1 text-center">
          Text color picker
        </label>
        <div className="flex rounded border py-1 align-middle">
          <input
            id="text-color"
            className="w-full border-none"
            type="color"
            defaultValue={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
      </div>
      {/* Set Font Size  */}
      <div className="flex flex-col">
        <label htmlFor="font-size" className="mb-1 text-center">
          Font size
        </label>
        <div className="flex ">
          <input
            id="font-size"
            className="w-full rounded border px-2 py-1 align-middle"
            defaultValue={fontSize}
            onChange={(e) => setFontSize(+e.target.value)}
            type="number"
          />
        </div>
      </div>
      {/* Checkbox
      <div className="flex flex-col sm:col-span-4">
        <div className="mb-1">
          <input
            id="transparent"
            className="me-1 rounded border px-2 py-1 align-middle accent-slate-950"
            onChange={() => setIsBackgroundColor(!isBackgroundColor)}
            checked={isBackgroundColor}
            type="checkbox"
          />
          <label htmlFor="transparent" className="text-center">
            Background
          </label>
        </div> */}

      {/* <div className="w flex rounded border py-1 align-middle">
          <input
            id="text-color"
            className={`${!isBackgroundColor ? "cursor-not-allowed" : ""} w-full border-none`}
            type="color"
            defaultValue={backGroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            disabled={!isBackgroundColor}
          />
        </div> */}
      {/* </div> */}
    </div>
  );
}
