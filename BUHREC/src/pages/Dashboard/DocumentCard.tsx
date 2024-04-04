import { documentSuccesful } from "../../assets";

interface fileProps {
  name: string;
  status: boolean;
}

interface DocumentCardProps {
  file: fileProps;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ file }) => {
  const handleDownload = () => {
    const fileUrl = `https://drive.google.com/file/d/1bqIDAQpp_aerVa5YIWRJ6EMGLA22fLIW/view?usp=drive_link`;
    window.open(fileUrl, "_blank");
  };
  return (
    <div className="flex flex-col items-center gap-3 bg-white w-44 py-4 rounded-lg">
      <p>{file?.name}</p>
      <img src={documentSuccesful} width={30} alt="" />
      {file.status ? (
        <div className="flex items-center flex-col">
          <p className="text-green-500 pb-4">Approved</p>
          <button
            className="cursor-pointer py-3 px-2   rounded-sm text-white bg-button hover:bg-darkBlue"
            onClick={handleDownload}
          >
            Download Certificate
          </button>
        </div>
      ) : (
        <div className="text-red-700 justify-self-end">Not Approved</div>
      )}
    </div>
  );
};

export default DocumentCard;
