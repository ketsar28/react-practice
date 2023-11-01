/* eslint-disable react/prop-types */
export const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    text = "Unknown",
    variant = "bg-green-600",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    // eslint-disable-next-line react/prop-types
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
