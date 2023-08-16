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
    <>
      <input
        required={props.required}
        name={props.name}
        type={props.type}
        id={props.id}
        className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.placeHolder}
      </label>
    </>
  );
}

export default AuthInput;
