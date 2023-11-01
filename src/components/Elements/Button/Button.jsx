export const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text = "Unknown", variant = "bg-green-600"} = props;
    return (
      // eslint-disable-next-line react/prop-types
      <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
        {text}
      </button>
    )
};
