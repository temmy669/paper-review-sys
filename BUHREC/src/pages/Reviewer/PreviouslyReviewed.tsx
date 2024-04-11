const PreviouslyReviewed: React.FC = () => {
  const recruiters: recruitment[] = [
    {
      candidate: "Candidate",
      jobType: "Document",
      SubmissionDate: "Submission Date",
      approved: null,
    },
    {
      candidate: "Damilola",
      jobType: "Research.txt",
      SubmissionDate: "12 04 2023",
      approved: "Approved",
    },
    {
      candidate: "Damilola",
      jobType: "Undergraduate_Work.txt",
      SubmissionDate: "12 04 2023",
      approved: "Rejected",
    },
    {
      candidate: "Damilola",
      jobType: "Literature.txt",
      SubmissionDate: "12 04 2023",
      approved: "Rejected",
    },
  ];

  interface recruitment {
    candidate: string;
    jobType: string;
    SubmissionDate: string;
    approved: string | null;
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

          {value.candidate == "Candidate" ? null : (
            <div className="mt-2 col-span-2 flex justify-end">
              <div
                className={`bg-[#ABC8FF] ${
                  value.approved == "Approved" ? "" : "bg-[red] text-white "
                } rounded-xl px-4 py-[3px] w-min cursor-pointer text-[#10316B] font-bold font-Raleway`}
              >
                {value.approved}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreviouslyReviewed;
