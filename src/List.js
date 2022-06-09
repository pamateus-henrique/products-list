import React from "react";

const List = ({ data }) => {
  return (
    <>
      <ul>
        <li>{data[0].id}</li>
      </ul>
    </>
  );
};

export default List;
