import React from "react";
import moment from "moment";
import "./calendar.css";
const Day = ({
  day,
  index,
  onCellClick = () => {},
  emptyCellStyle = {},
  status = {}
}) => {

  if (!day) {
    return (
      <td
        className="empty-cell"
        key={index}
        style={{ fontSize: "0", ...emptyCellStyle }}
      >
        .
      </td>
    );
  } else {
    return (
      <td
        className="day-cell"
        key={index}
        style={{
          ...(status[day.status] && status[day.status].cellStyle ? { ...status[day.status].cellStyle, backgroundColor: status[day.status].cellStyle.backgroundColor ? status[day.status].cellStyle.backgroundColor : 'blue' } : {})
        }}
        onClick={day ? () => onCellClick(day) : null}
      >
        <div>
          <span
            style={{ color: status[day.status] && status[day.status].labelStyle && status[day.status].labelStyle.color ? status[day.status].labelStyle.color : "black" }}
          >
            {day.date ? moment(day.date).date() : day}
          </span>

          <div>
            <span
              style={{
                ...(status[day.status] && status[day.status].labelStyle ? { ...status[day.status].labelStyle, backgroundColor: status[day.status].labelStyle.backgroundColor ? status[day.status].labelStyle.backgroundColor : 'blue' } : {}),
              }}
            >
              {day.status ? day.status : null}
            </span>
          </div>
        </div>
      </td >
    );
  }
};
export default Day;
