import { createContext, ReactNode, useState } from "react";

interface DocumentContextProps {
  docName: string;
  setName: (name: string) => void;
}

export const DocumentContext = createContext<DocumentContextProps | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const DocumentProvider: React.FC<Props> = ({ children }) => {
  const [docName, setDocName] = useState<string | undefined>("Document.txt");

  const setName = (name: string) => {
    setDocName(name);
  };

  return (
    <DocumentContext.Provider value={{ setName, docName }}>
      {children}
    </DocumentContext.Provider>
  );
};
