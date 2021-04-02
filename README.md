# calendar-reactjs

**calendar-reactjs** is for rendering calendar of any month of any year. This component can be used to render calender with data(data which is consisted of attendance of any employee/students) and as well as an empty calender.

## Install
```
npm install calendar-reactjs
```

## Usage (Empty Calendar)
```
import React from 'react';
import Calendar from 'calendar-reactjs'
const App = () => {
  return (
    <Calendar month={{
        date: "2021-05-13"
    }}
    />
  );
}
```
## Usage (Calendar With Custom Background and Text Color )
```
import React from 'react';
import Calendar from 'calendar-reactjs'
const App = () => {
  return (
    <Calendar
      onCellClick={(val) => console.log(val)}
      month={{
        date: "2021-05-13",
        days: [
          { date: "2021-05-01", status: "vacation" },
          { date: "2021-05-02", status: "vacation" },
          { date: "2021-05-03", status: "present" },
          { date: "2021-05-04", status: "present" },
          { date: "2021-05-05", status: "present" },
          { date: "2021-05-06", status: "present" },
          { date: "2021-05-07", status: "present" },
          { date: "2021-05-08", status: "vacation" },
          { date: "2021-05-09", status: "vacation" },
          { date: "2021-05-10", status: "present" },
          { date: "2021-05-11", status: "present" },
          { date: "2021-05-12", status: "present" },
          { date: "2021-05-13", status: "present" },
          { date: "2021-05-14", status: "present" },
          { date: "2021-05-15", status: "vacation" },
          { date: "2021-05-16", status: "vacation" },
          { date: "2021-05-17", status: "absent" },
          { date: "2021-05-18", status: "leave" },
          { date: "2021-05-19", status: "leave" },
          { date: "2021-05-20", status: "leave" },
          { date: "2021-05-21", status: "leave" },
          { date: "2021-05-22", status: "vacation" },
          { date: "2021-05-23", status: "vacation" },
          { date: "2021-05-24", status: "present" },
          { date: "2021-05-25", status: "present" },
          { date: "2021-05-26", status: "present" },
          { date: "2021-05-27", status: "present" },
          { date: "2021-05-28", status: "present" },
          { date: "2021-05-29", status: "vacation" },
          { date: "2021-05-30", status: "vacation" },
          { date: "2021-05-31", status: "present" }
        ]
      }}
      emptyCellStyle={{ backgroundColor: 'white' }}
      status={
        {
          "present": {
            labelStyle: { backgroundColor: 'green', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          },
          "absent": {
            labelStyle: { backgroundColor: 'red', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          },
          "vacation": {
            labelStyle: { backgroundColor: 'yellow', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          },
          "leave": {
            labelStyle: { backgroundColor: 'orange', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
          }
        }
      }
    />
  );
}
```


## Props
| **status** | `{"key": {labelStyle: {}, cellStyle: {} }` |
| **onCellClick** |`function`|
| **month** | `{ date:  "YYYY-MM-DD", days: [{ date:  "YYYY-MM-DD", status:  "" }]}`


**Note:** The date format should be correct and same as shown in example.

## Screen
Empty Calendar
![Image of Empty Calendar](https://github.com/muhazzib/Calendar/blob/master/screenshots/empty.png)
Calendar With Data
![Image of Calendar with Data](https://github.com/muhazzib/Calendar/blob/master/screenshots/data.png)