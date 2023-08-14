import React from "react";
interface DividerProps {
  text: string;
}
function Divider(props: DividerProps) {
  return (
    <div className="flex justify-center items-center gap-1 pt-4 pb-2">
      <hr className="basis-1/12 border-t-1 border-gray-300 opacity-30" />
      <span className="text-gray-400 text-xs font-bold opacity-50">
        {props.text.toUpperCase()}
      </span>
      <hr className="flex-1 border-t-1 border-gray-300 opacity-30" />
    </div>
  );
}

export default Divider;
