import dayjs from 'dayjs'
import 'dayjs/locale/en-gb.js'
dayjs.locale('en-gb') // en-gb starts week on monday, en does not
const yyyymmdd = 'YYYY-MM-DD' // useful for simple .format(yyyymmdd)

const timeHelper = ({ startDate, endDate }) => {
	startDate = dayjs(startDate)
	endDate = dayjs(endDate)
	if (startDate.diff(endDate, 'month') === 0) { return startDate.format('MMMM') }
	if (startDate.diff(endDate, 'days') === -364) { return startDate.format('YYYY') }
	if (startDate.diff(endDate, 'month') !== 0) { return 'No valid period' }
}
