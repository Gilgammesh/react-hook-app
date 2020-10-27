import React, { memo } from "react";

const Small = memo(({ value }) => {
  console.log("me volvi a llamar :) ");

  return <small>{value}</small>;
});

export default Small;
