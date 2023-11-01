export const Input = (props) => {
    // eslint-disable-next-line react/prop-types
    const {placeholder, type, name} = props;
    return (
        <>
         <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-1000" placeholder={placeholder} name={name} id={name}/>
        </>
    )
}