import React from "react";
function Site({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params.id;
  return (
    <div>
      <h1>THIS IS THE SIRE PAGE {id}</h1>
    </div>
  );
}

export default Site;
