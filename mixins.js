import moment from 'moment'
moment.locale('ar-ly')
const mixin = {
  filters: {
    format_date (val) {
      if (val) {
        return moment(val).startOf('day').fromNow()
      }
    },
    category_filter (val) {
      switch (val) {
        case 'politics':
          return 'سياسة'
        case 'economy':
          return 'اقتصاد'
        case 'culture':
          return 'ثقافة'
        case 'entertainment':
          return 'منوعات'
      }
    }
  },
  methods: {
    category_filter (val) {
      switch (val) {
        case 'politics':
          return 'سياسة'
        case 'economy':
          return 'اقتصاد'
        case 'culture':
          return 'ثقافة'
        case 'entertainment':
          return 'منوعات'
      }
    }

  }
}
export default mixin
