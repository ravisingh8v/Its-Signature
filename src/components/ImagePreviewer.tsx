import Button from "../ui/Button";

interface ImagePreviewer {
  src: string | undefined;
  clearSignature: () => void;
}

export default function ImagePreviewer({
  src,
  clearSignature,
}: ImagePreviewer) {
  return (
    <>
      <img src={src} className="h-[300px] w-full rounded border bg-gray-100" />
      <div className="grid sm:grid-cols-2 justify-between gap-x-2">
        <div className="sm:col-span-1 ">
          <a
            href={src}
            className="block h-full w-full border border-green-200"
            download={true}
          >
            <Button type="primary">Download</Button>
          </a>
        </div>
        <div className="sm:col-span-1">
          <Button type="secondary" onClick={() => clearSignature()}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
