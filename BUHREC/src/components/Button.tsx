interface ButtonProps {
  name: string;
  isLight: boolean;
  isAbsolute: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, isLight, isAbsolute }) => {
  return (
    <button
      className={`px-5 py-1 h-9 text-[13px] rounded-sm ${
        isLight
          ? "text-button font-semibold bg-lightButton hover:bg-button hover:text-lightButton"
          : " text-white bg-button hover:bg-darkBlue"
      } font-Montserrat ${isAbsolute ? "absolute" : null}`}
    >
      {name}
    </button>
  );
};

export default Button;
