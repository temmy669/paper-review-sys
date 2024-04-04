export interface slideProps {
  heading: string;
  body: string;
}

const Slide: React.FC<slideProps> = ({ heading, body }) => {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="flex justify-between px-28 basis-1/3">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <span className="h-1 bg-lightBlue mt-2 w-14"></span>
        </div>
        <div className="text-lg w-2/4 font-Montserrat">{body}</div>
      </div>
    </div>
  );
};

export default Slide;
