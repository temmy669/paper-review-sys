import { useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { useState } from "react";
import { uploadDoc, close, documentSuccesful } from "../../assets";

const Upload: React.FC = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };
  const navigate = useNavigate();

  const pay = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_7bdcbd1894244b2dd6ffa57b49805bae6068d969",
      amount: 5000 * 100,
      email: "damitigha@gmail.com",
      onSuccess(transaction) {
        const message = `Payment Complete  ${transaction?.reference}`;
        alert(message);
        navigate("/");
      },
      onCancel() {
        alert("You have canceled the trasaction");
      },
    });
  };
  return (
    <div className="bg-upload w-full h-full relative">
      {file == null ? (
        <div className="absolute left-28 top-0 translate-y-40 translate-x-96">
          <div className="bg-white w-56 text-center cursor-pointer relative rounded-lg h-min px-8 py-16">
            <img src={uploadDoc} alt="Upload Document" />
            <input
              type="file"
              name=""
              id=""
              className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
              onChange={handleFileChange}
            />
            <p>Upload Research Document</p>
          </div>
        </div>
      ) : (
        <div className="absolute left-28 top-0 translate-y-24 translate-x-96">
          <div className="bg-white w-80 text-center flex flex-col gap-6 items-center relative rounded-lg h-min px-8 pt-7 pb-4">
            <img
              className="self-start cursor-pointer"
              width={40}
              src={close}
              alt="Close"
              onClick={removeFile}
            />
            <p className="font-bold">New Upload</p>
            <img src={documentSuccesful} width={70} alt="Upload Document" />

            <p>
              {file.name} Selected <br /> Successfully
            </p>
            <p className="self-end mt-9 text-link cursor-pointer" onClick={pay}>
              Next
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
