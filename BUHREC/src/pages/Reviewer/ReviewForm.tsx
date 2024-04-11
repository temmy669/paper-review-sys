import { Form, useNavigate, useParams } from "react-router-dom";
import { ReviewButton } from "../../components";
import { useState } from "react";

const ReviewForm: React.FC = () => {
  const navigate = useNavigate();
  const ApproveSubmit = (e) => {
    e.preventDefault();
    console.log("Approved");
    alert("Document Approved, Review Sent Successfully");
    navigate("/reviewer");
  };

  const RejectSubmit = (e) => {
    e.preventDefault();
    console.log("Not Approved");
    alert("Document Not Approved");
    navigate("/reviewer");
  };
  const { doc } = useParams();
  const [approve, setApprove] = useState<boolean>(true);
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="font-bold text-3xl">Review for {doc}</h2>
      </div>
      <Form
        method="post"
        className="pt-5"
        onSubmit={approve == true ? ApproveSubmit : RejectSubmit}
      >
        <p>Write your Review here:</p>
        <textarea
          name="review"
          id="review"
          rows={7}
          placeholder="Write your review"
          className="w-full resize-none border border-black mt-6 p-2"
        ></textarea>
        <div className=" flex justify-end gap-6">
          <div onClick={() => setApprove(true)}>
            <ReviewButton
              isAbsolute={false}
              isApprove={true}
              name="Approve"
              key="d"
            />
          </div>
          <div onClick={() => setApprove(false)}>
            <ReviewButton
              isAbsolute={false}
              isApprove={false}
              name="Reject"
              key="dda"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ReviewForm;
