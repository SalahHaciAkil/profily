import React from "react";

interface Props {
  placeHolder: string;
  onChange: any;
  type: string;
  name: string;
  id: string;
  required: boolean;
  style?: string;
}
function AuthInput(props: Props) {
  return (
    <input
      placeholder={props.placeHolder}
      className={`w-full px-3 py-3 border rounded-md focus:ring focus:ring-indigo-200 ${props.style}`}
      onChange={props.onChange}
      type={props.type}
      id={props.id}
      name={props.name}
      required={props.required}
    />
  );
}

export default AuthInput;
