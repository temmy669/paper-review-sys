interface ButtonProps {
  name: string;
  isApprove: boolean;
  isAbsolute: boolean;
}

const ReviewButton: React.FC<ButtonProps> = ({
  name,
  isApprove,
  isAbsolute,
}) => {
  return (
    <button
      className={`px-5 py-1 h-9 text-[13px] rounded-sm ${
        isApprove
          ? "font-semibold text-white bg-button hover:bg-darkBlue"
          : " text-white bg-[red] hover:bg-[#da5353]"
      } font-Montserrat ${isAbsolute ? "absolute" : null}`}
      type="submit"
    >
      {name}
    </button>
  );
};

export default ReviewButton;
