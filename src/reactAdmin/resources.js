import * as reactAdmin from 'ra-core'
import store from '../store'

export default () => {
  store.dispatch(
    reactAdmin.registerResource({
      name: 'movies',
      hasList: true,
      hasEdit: true,
      hasShow: false,
      hasCreate: true,
    })
  )
}
