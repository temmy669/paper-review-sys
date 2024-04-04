export interface HomeCardProps {
  text: string;
  img: string;
  heading: string;
  isReversed: boolean;
}

const HomeCard: React.FC<HomeCardProps> = ({
  text,
  img,
  heading,
  isReversed,
}: HomeCardProps) => {
  return (
    <>
      <div
        className={`flex pt-6 px-16 ${
          isReversed ? "flex-row-reverse" : "flex-row"
        } justify-center items-center gap-36`}
      >
        <div className="">
          <h3 className="font-bold text-xl">{heading}</h3>
          <p className="w-80">{text}</p>
        </div>
        <img className="w-96" src={img} alt={img} />
      </div>
    </>
  );
};

export default HomeCard;
