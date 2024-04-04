import PendingDocumentCard from "./PendingDocumentCard";

const PendingSubmissions: React.FC = () => {
  const names: string[] = [
    "New FIle",
    "New FIle",
    "New FIle",
    "New FIle",
    "New FIle",
    "New FIle",
    "New FIle",
    "New FIle",
    "New FIle",
  ];
  return (
    <div className="bg-upload w-full h-full ">
      <div className="px-5 py-7 flex ">
        <div className="flex gap-7 flex-wrap">
          {names.map((file, index) => (
            <PendingDocumentCard key={index} name={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingSubmissions;
