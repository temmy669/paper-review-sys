const ReviewerPanel: React.FC = () => {
  const recruiters: recruitment[] = [
    {
      candidate: "Candidate",
      jobType: "Document",
      SubmissionDate: "Submission Date",
    },
    {
      candidate: "Damilola",
      jobType: "Research.txt",
      SubmissionDate: "12 04 2023",
    },
    {
      candidate: "Damilola",
      jobType: "Undergraduate_Work.txt",
      SubmissionDate: "12 04 2023",
    },
    {
      candidate: "Damilola",
      jobType: "Literature.txt",
      SubmissionDate: "12 04 2023",
    },
  ];

  interface recruitment {
    candidate: string;
    jobType: string;
    SubmissionDate: string;
  }

  return (
    <div className="">
      {recruiters.map((value, index) => (
        <div
          className={`grid py-3 rounded-md grid-cols-5 ${
            value.candidate === "Candidate" ? "bg-ash px-7" : null
          }`}
          key={index}
        >
          <div className="flex items-end">
            {value.candidate !== "Candidate" ? (
              <span className="flex flex-row items-center gap-3 ">
                <input
                  className="basis-[10%] cursor-pointer"
                  type="checkbox"
                  name=""
                  id=""
                />
                {value.candidate}
              </span>
            ) : (
              value.candidate
            )}
          </div>
          <div className="flex items-end">
            <span>{value.jobType}</span>
          </div>

          <div className="flex items-end">
            <div>{value.SubmissionDate}</div>
          </div>

          {value.candidate === "Candidate" ? null : (
            <div className="mt-2">
              <div className="bg-[#ABC8FF] hover:bg-[#10316B] hover:text-[#ABC8FF] transition-all rounded-xl w-min px-3 py-[2px] cursor-pointer text-[#10316B] font-bold font-Raleway">
                Download
              </div>
            </div>
          )}

          <div>
            {value.candidate === "Candidate" ? (
              ""
            ) : (
              <div className="mt-2">
                <div className="bg-[#ABC8FF] hover:bg-[#10316B] hover:text-[#ABC8FF] transition-all rounded-xl w-min px-3 py-[2px] cursor-pointer text-[#10316B] font-bold font-Raleway">
                  Review
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewerPanel;
