export const Label = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children, htmlFor} = props
    return (
        <>
            <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-3">{children}</label>
        </>
    )
}