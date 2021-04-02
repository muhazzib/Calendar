import React from "react";
import Week from "./week";
import "./calendar.css";

const WeeklyRows = ({
  firstWeek,
  secondWeek,
  thirdWeek,
  forthWeek,
  fifthWeek,
  sixthWeek,
  cellStyle,
  emptyCellStyle,
  status = {},
  onCellClick
}) => {
  return (
    <div className="tablediv">
      {firstWeek.length !== 0 ? (
        <table>
          <tbody>
            <tr>
              <td className="days">Sun</td>
              <td className="days">Mon</td>
              <td className="days">Tues</td>
              <td className="days">Wed</td>
              <td className="days">Thurs</td>
              <td className="days">Fri</td>
              <td className="days">Sat</td>
            </tr>
            <Week
              week={firstWeek}
              onCellClick={onCellClick}
              cellStyle={cellStyle}
              emptyCellStyle={emptyCellStyle}
              status={status}
            />
            <Week
              week={secondWeek}
              onCellClick={onCellClick}
              cellStyle={cellStyle}
              emptyCellStyle={emptyCellStyle}
              status={status}
            />
            <Week
              week={thirdWeek}
              onCellClick={onCellClick}
              cellStyle={cellStyle}
              emptyCellStyle={emptyCellStyle}
              status={status}
            />
            <Week
              week={forthWeek}
              onCellClick={onCellClick}
              cellStyle={cellStyle}
              emptyCellStyle={emptyCellStyle}
              status={status}
            />
            <Week
              week={fifthWeek}
              onCellClick={onCellClick}
              cellStyle={cellStyle}
              emptyCellStyle={emptyCellStyle}
              status={status}
            />
            <Week
              week={sixthWeek}
              onCellClick={onCellClick}
              cellStyle={cellStyle}
              emptyCellStyle={emptyCellStyle}
              status={status}
            />
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default WeeklyRows;
