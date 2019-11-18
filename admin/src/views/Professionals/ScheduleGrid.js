import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment);

const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth();

const messages = {
  allDay: 'Dia todo',
  previous: '<',
  next: '>',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  showMore: total => `+ mostrar mais (${total})`
};

const events = [
  {
    title: 'Curso durante o dia todo',
    allDay: true,
    start: new Date(currYear, currMonth, 0),
    end: new Date(currYear, currMonth, 1)
  },
  {
    title: 'Long Event',
    start: new Date(currYear, currMonth, 7),
    end: new Date(currYear, currMonth, 10)
  },

  {
    title: 'DTS STARTS',
    start: new Date(currYear+1, 2, 13, 0, 0, 0),
    end: new Date(currYear+1, 2, 20, 0, 0, 0)
  },

  {
    title: 'DTS ENDS',
    start: new Date(currYear+1, 10, 6, 0, 0, 0),
    end: new Date(currYear+1, 10, 13, 0, 0, 0)
  },

  {
    title: 'Some Event',
    start: new Date(currYear, currMonth, 9, 0, 0, 0),
    end: new Date(currYear, currMonth, 9, 0, 0, 0)
  },
  {
    title: 'Conference',
    start: new Date(currYear, currMonth, 11),
    end: new Date(currYear, currMonth, 13),
    desc: 'Big conference for important people'
  },
  {
    title: 'Meeting',
    start: new Date(currYear, currMonth, 12, 10, 30, 0, 0),
    end: new Date(currYear, currMonth, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    title: 'Lunch',
    start: new Date(currYear, currMonth, 12, 12, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    title: 'Meeting',
    start: new Date(currYear, currMonth, 12, 14, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 15, 0, 0, 0)
  },
  {
    title: 'Happy Hour',
    start: new Date(currYear, currMonth, 12, 17, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    title: 'Dinner',
    start: new Date(currYear, currMonth, 12, 20, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 21, 0, 0, 0)
  },
  {
    title: 'Birthday Party',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0)
  },
  {
    title: 'Birthday Party 2',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0)
  },
  {
    title: 'Birthday Party 3',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0)
  },
  {
    title: 'Late Night Event',
    start: new Date(currYear, currMonth, 17, 19, 30, 0),
    end: new Date(currYear, currMonth, 18, 2, 0, 0)
  },
  {
    title: 'Multi-day Event',
    start: new Date(currYear, currMonth, 20, 19, 30, 0),
    end: new Date(currYear, currMonth, 22, 2, 0, 0)
  }
];

class ScheduleGrid extends Component {
  render() {
    return (
      <div className="animated">
            <BigCalendar className="d-sm-down-none" style={{height: '40em'}}
              {...this.props}
              localizer={localizer}
              events={events}
              views={['month', 'week', 'day']}
              step={30}
              defaultDate={new Date(currYear, currMonth, 1)}
              defaultView='month'
              toolbar={true}
              messages={messages}
            />
        <h2>Implementações</h2>
        - Exibir os profissionais nos dias e horários que trabalham.
      </div>
    )
  }
}

export default ScheduleGrid;
