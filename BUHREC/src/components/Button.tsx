interface ButtonProps {
  name: string;
  isLight: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, isLight }) => {
  return (
    <button
      className={`px-5 py-1 h-9 text-[13px] rounded-sm ${
        isLight ? "text-button bg-lightButton" : " text-white bg-button"
      } font-Montserrat`}
    >
      {name}
    </button>
  );
};

export default Button;
