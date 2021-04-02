import React from "react";
import Day from "./day";
const Week = ({ week = [], onCellClick, emptyCellStyle, status = {} }) => {
  return (
    <tr>
      {week.map((value, index) => {
        return (
          <Day
            day={value}
            index={index}
            key={`day${index}`}
            onCellClick={onCellClick}
            emptyCellStyle={emptyCellStyle}
            status={status}
          />
        );
      })}
    </tr>
  );
};
export default Week;
