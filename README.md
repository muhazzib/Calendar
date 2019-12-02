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
function App() {
  return (
    <Calendar month={{
        date: '2019-06-13'
    }}
    />
  );
}
```


## Usage (Calendar With Data)
```
import React from 'react';
import Calendar from 'calendar-reactjs'
function App() {
  return (
    <Calendar month={{
      days: [
        { date: "2019-06-01T00:00:00.000Z", status: "present" },
        { date: "2019-06-02T00:00:00.000Z", status: "absent" },
        { date: "2019-06-18T00:00:00.000Z", status: "present" },
        { date: "2019-06-22T00:00:00.000Z", status: "present" }],
        date: '2019-06-13'
    }}
    />
  );
}
```


## Usage (Calendar With Custom Background and Text Color )
```
import React from 'react';
import Calendar from 'calendar-reactjs'
function App() {
  return (
    <Calendar month={{
      days: [
        { date: "2019-06-01T00:00:00.000Z", status: "present", color: 'orange', bgcolor: 'brown' },
        { date: "2019-06-02T00:00:00.000Z", status: "absent" , color: 'orange', bgcolor: 'brown'},
        { date: "2019-06-18T00:00:00.000Z", status: "present" , color: 'orange', bgcolor: 'brown'},
        { date: "2019-06-22T00:00:00.000Z", status: "present" , color: 'orange', bgcolor: 'brown'}],
        date: '2019-06-13'
    }}
    />
  );
}
```


## Usage ( Example of Getting Each Cell Data Through updateStatus Method )
```
import React from 'react';
import Calendar from 'calendar-reactjs'
function App() {
  return (
    <Calendar month={{
      days: [
        { date: "2019-06-01T00:00:00.000Z", status: "present" },
        { date: "2019-06-02T00:00:00.000Z", status: "absent" },
        { date: "2019-06-18T00:00:00.000Z", status: "present" },
        { date: "2019-06-22T00:00:00.000Z", status: "present" }],
        date: '2019-06-13'
      }}
      updateStatus={(val) => console.log(val)}
    />
  );
}
```



## Usage (Calendar With Custom Width)
```
import React from 'react';
import Calendar from 'calendar-reactjs'
function App() {
  return (
    <Calendar month={{
      days: [
        { date: "2019-06-01T00:00:00.000Z", status: "present" },
        { date: "2019-06-02T00:00:00.000Z", status: "absent" },
        { date: "2019-06-18T00:00:00.000Z", status: "present" },
        { date: "2019-06-22T00:00:00.000Z", status: "present" }],
        date: '2019-06-13'
    }} width="70%"
    />
  );
}
```
**Note:** The date format should be correct and same as shown in example.

## Screen
Empty Calendar
![Image of Empty Calendar](https://raw.githubusercontent.com/muhazzib/Calendar/master/screencapture-localhost-3000-2019-07-13-23_59_28.png)
Calendar With Data
![Image of Calendar with Data](https://raw.githubusercontent.com/muhazzib/Calendar/master/screencapture-localhost-3000-2019-07-13-23_57_56.png)


