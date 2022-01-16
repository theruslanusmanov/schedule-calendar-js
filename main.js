import { END_HOURS, START_HOURS, trackRulerCursor } from './modules/calendar.js'

const hours = document.getElementsByClassName(
  'schedule-calendar__ruler__hours')[0];
for (let i = 0; i < END_HOURS - START_HOURS; i++) {
  const li = document.createElement('li')
  hours.append(li)
}

trackRulerCursor('rulerId')
