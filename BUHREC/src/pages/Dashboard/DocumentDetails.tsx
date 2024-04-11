import { useParams } from "react-router-dom";

const DocumentDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="bg-upload w-full h-full">
      <div className="px-5 mx-20 mt-5 py-5 rounded-md bg-white">
        <h2 className="text-2xl font-bold">Comments for {id}</h2>
        <p>
          General Comments: <br /> This research investigates an important topic
          - public knowledge of cardiovascular diseases (CVDs). Understanding
          knowledge gaps is crucial for developing effective educational
          interventions. <br /> <br /> Strengths: <br /> The research question
          is clearly defined . <br /> The literature review provides a good
          starting point for understanding existing research on CVD knowledge.
          <br /> <br />
          Weaknesses: <br /> The methodology section lacks detail. <br /> It
          would be beneficial to know: <br />
          The target population of the study (general public, specific risk
          group, etc.) <br /> The method used to assess knowledge (survey,
          interview, etc.) <br /> The specific areas of CVD knowledge
          investigated (symptoms, risk factors, prevention) <br /> The analysis
          of knowledge gaps could be more in-depth. <br /> <br /> Consider
          exploring:
          <br />
          The extent of the knowledge gaps identified Potential reasons for
          these gaps (e.g., education level, access to information) <br />
          <br />
          Specific Comments: <br />
          (Add a page number or section reference here if applicable) In the
          introduction, consider mentioning the global burden of CVDs to further
          emphasize the importance of public awareness. <br /> (Add a specific
          reference here) <br /> The literature review could be strengthened by
          citing a recent meta-analysis or systematic review on CVD knowledge,
          if available. <br /> <br /> Recommendations: <br /> Expand the
          methodology section to provide details on the study design, data
          collection methods, and instruments used. <br /> Deepen the analysis
          of knowledge gaps by exploring potential reasons for them and their
          implications for educational strategies. Consider including
          limitations of the study (e.g., sample size, generalizability) and
          future research directions. <br /> <br />
          <span className="">
            Overall, this research has the potential to be a valuable
            contribution to the field. By addressing the weaknesses and
            incorporating the recommendations, the authors can strengthen the
            manuscript and its impact.
          </span>
        </p>
      </div>
    </div>
  );
};

export default DocumentDetails;
