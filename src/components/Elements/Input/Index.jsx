/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { label, type, placeholder, name } = props;

  return (
    <>
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input placeholder={placeholder} type={type} name={name} ref={ref}/>
      </div>
    </>
  );
});
