
import React from 'react';
import WeeklyRows from "./components/calendar";
import moment from "moment";

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstWeek: [],
            secondWeek: [],
            thirdWeek: [],
            forthWeek: [],
            fifthWeek: [],
            sixthWeek: [],
        };
        this.renderCalender = this.renderCalender.bind(this);
        this.checkExistingRecord = this.checkExistingRecord.bind(this);
        this.assignEmptyDaysToWeek = this.assignEmptyDaysToWeek.bind(this);
    }

    componentDidMount() {
        this.renderCalender(this.props);
    };

    renderCalender(updatedProps) {
        const monthFormat = updatedProps.month.date;
        const monthLastDay = moment(monthFormat).endOf("month").day();
        const monthEndDate = moment(monthFormat).daysInMonth();
        const monthStartDay = moment(monthFormat).startOf("month").day();
        const dataToShowInCalendar = updatedProps.month.days || [];

        // Weeks to Show in a Calendar (There can be 6 possible Weeks in any month)
        const firstWeekDates =
            monthStartDay > 0 ? this.assignEmptyDaysToWeek(monthStartDay) : [];
        const secondWeekDates = [];
        const thirdWeekDates = [];
        const forthWeekDates = [];
        let fifthWeekDates = [];
        let sixthWeekDates = [];

        // Looping through all days in a Month
        for (let day = 1; day <= monthEndDate; day++) {
            if (firstWeekDates.length < 7) {
                //Check If there is any data user want to show on provided date
                const recordInUserInput = this.checkExistingRecord(
                    dataToShowInCalendar,
                    day
                );
                firstWeekDates.push(recordInUserInput ? recordInUserInput : day);
            } else if (firstWeekDates.length === 7 && secondWeekDates.length < 7) {
                //Check If there is any data user want to show on provided date
                const recordInUserInput = this.checkExistingRecord(
                    dataToShowInCalendar,
                    day
                );
                secondWeekDates.push(recordInUserInput ? recordInUserInput : day);
            } else if (secondWeekDates.length === 7 && thirdWeekDates.length < 7) {
                //Check If there is any data user want to show on provided date
                const recordInUserInput = this.checkExistingRecord(
                    dataToShowInCalendar,
                    day
                );
                thirdWeekDates.push(recordInUserInput ? recordInUserInput : day);
            } else if (thirdWeekDates.length === 7 && forthWeekDates.length < 7) {
                //Check If there is any data user want to show on provided date
                const recordInUserInput = this.checkExistingRecord(
                    dataToShowInCalendar,
                    day
                );
                forthWeekDates.push(recordInUserInput ? recordInUserInput : day);
            } else if (forthWeekDates.length === 7 && fifthWeekDates.length < 7) {
                //Check If there is any data user want to show on provided date
                const recordInUserInput = this.checkExistingRecord(
                    dataToShowInCalendar,
                    day
                );
                fifthWeekDates.push(recordInUserInput ? recordInUserInput : day);

                // If a month is ended in this week then Insert empty strings to show vacant spaces in week
                if (monthEndDate - day === 0) {
                    if (monthLastDay !== 6) {
                        fifthWeekDates = [
                            ...fifthWeekDates,
                            ...this.assignEmptyDaysToWeek(6 - monthLastDay),
                        ];
                    }
                }
            } else if (fifthWeekDates.length === 7 && sixthWeekDates.length < 7) {
                //Check If there is any data user want to show on provided date
                const recordInUserInput = this.checkExistingRecord(
                    dataToShowInCalendar,
                    day
                );
                sixthWeekDates.push(recordInUserInput ? recordInUserInput : day);

                // If a month is ended in this week then Insert empty strings to show vacant spaces in week
                if (monthEndDate - day === 0) {
                    if (monthLastDay !== 6) {
                        sixthWeekDates = [
                            ...sixthWeekDates,
                            ...this.assignEmptyDaysToWeek(6 - monthLastDay),
                        ];
                    }
                }
            }
        }

        this.setState({
            firstWeek: firstWeekDates,
            secondWeek: secondWeekDates,
            thirdWeek: thirdWeekDates,
            forthWeek: forthWeekDates,
            fifthWeek: fifthWeekDates,
            sixthWeek: sixthWeekDates,
        });
    };

    // handler to check desired data in an array
    checkExistingRecord(records, date) {
        return records.find((obj) => {
            return moment(obj.date).date() === date;
        });
    };

    // handler to return array of empty strings
    assignEmptyDaysToWeek(n) {
        return Array(n).join(".").split(".");
    };

    shouldComponentUpdate(updatedProps, updatedState) {
        return true;
    };

    render() {
        const { firstWeek, secondWeek, thirdWeek, forthWeek, fifthWeek, sixthWeek } = this.state;
        return (
            <WeeklyRows
                firstWeek={firstWeek}
                fifthWeek={fifthWeek}
                secondWeek={secondWeek}
                thirdWeek={thirdWeek}
                forthWeek={forthWeek}
                sixthWeek={sixthWeek}
                width={this.props.width ? this.props.width : "100%"}
                onCellClick={this.props.onCellClick}
                cellStyle={this.props.cellStyle}
                emptyCellStyle={this.props.emptyCellStyle}
                status={this.props.status}
            />
        );
    }
}
export default Calendar;
