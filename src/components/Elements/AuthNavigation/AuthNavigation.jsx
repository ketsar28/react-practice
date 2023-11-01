import { Link } from "react-router-dom";

export const AuthNavigation = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type } = props;
    if (type === "login") {
      return (
        <p className="text-md text-center mt-5">
          Dont have an account ?{" "}
          <Link to="/register" className="font-bold text-green-600">
            Sign Up
          </Link>
        </p>
      );
    } else {
      return (
        <p className="text-md text-center mt-5">
          Have an account ?{" "}
          <Link to="/login" className="font-bold text-green-600">
            Sign In
          </Link>
        </p>
      );
    }

//   return (
//     <div className="text-md mt-5 text-center">
//       {type === "login"
//         ? "Don't have an account ? "
//         : "Already have an account ? "}

//       {type === "login" && (
//         <Link to="/register" className="font-bold text-green-600">
//           Sign Up
//         </Link>
//       )}

//       {type === "register" && (
//         <Link to="/login" className="font-bold text-green-600">
//           Sign In
//         </Link>
//       )}
//     </div>
//   );
};
