import { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";

const useDoc = () => {
  const { docName, setName } = useContext(DocumentContext);
  return { docName, setName };
};

export default useDoc;
