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


## Screen
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
