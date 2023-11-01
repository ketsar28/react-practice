import { AuthNavigation } from "../Elements/AuthNavigation/AuthNavigation";

export const AuthLayouts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type} = props;
  return (
    <div className="flex justify-center min-h-screen items-center flex-col py-10">
      <div className="w-full max-w-xs">
        <h1 className="text-green-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, please enter your detail
        </p>
        {children}
        <AuthNavigation type={type}/>
      </div>
    </div>
  );
};
