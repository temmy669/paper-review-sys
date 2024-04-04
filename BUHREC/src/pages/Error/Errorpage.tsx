// import { useLoaderData } from "react-router-dom";
import { error } from "../../assets";
const ErrorPage: React.FC = () => {
  // const data = useLoaderData();
  // console.log(data);

  return (
    <div className="flex flex-col pt-10 text-4xl text-primary">
      <div className="self-center">Error Page</div>
      <p className="text-sm self-center pt-5">Page is comming soon... 👌</p>
      <img src={error} alt="Error" className=" h-52 w-full" />
    </div>
  );
};

// export async function ErrorLoader() {
//   const res = await fetch("http://localhost:4000/carrer");
//   return res.json();
// }

export default ErrorPage;
