import DocumentCard from "./DocumentCard";

interface fileProps {
  name: string;
  status: boolean;
}

const files: fileProps[] = [
  {
    name: "New File",
    status: true,
  },
  {
    name: "New File",
    status: false,
  },
  {
    name: "New File",
    status: true,
  },
  {
    name: "New File",
    status: true,
  },
  {
    name: "New File",
    status: true,
  },
];
const PastSubmissions: React.FC = () => {
  return (
    <div className="bg-upload w-full h-full ">
      <div className="px-5 py-7 flex">
        <div className="flex gap-7 flex-wrap">
          {files.map((file, index) => (
            <DocumentCard key={index} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSubmissions;
