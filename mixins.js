import moment from 'moment'
moment.locale('ar-ly')
const mixin = {
  filters: {
    format_date (val) {
      if (val) {
        return moment(val).startOf('day').fromNow()
      }
    }
  }
}
export default mixin
