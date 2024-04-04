import { documentSuccesful } from "../../assets";

interface PendingDocumentProps {
  name: string;
}

const PendingDocumentCard: React.FC<PendingDocumentProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-white w-36 py-4 cursor-pointer rounded-lg">
      <p>{name}</p>
      <img src={documentSuccesful} width={30} alt="" />

      <div className="text-yellow-500">Pending</div>
    </div>
  );
};

export default PendingDocumentCard;
