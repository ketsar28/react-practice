
const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const {text = "Unknown", variant = "bg-green-600"} = props;
  return (
    // eslint-disable-next-line react/prop-types
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white" type="submit`}>
      {text}
    </button>
  )
};
function App() {

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button variant="bg-yellow-600" text="Sign Up"/>
        <Button variant="bg-slate-600" text="Sign In"/>
        <Button variant="bg-blue-600" text="Sign Out"/>
        <Button></Button>
      </div>
    </div>
  )
}


export default App
