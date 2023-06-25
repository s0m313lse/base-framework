import { boot } from 'quasar/wrappers'

import appBtn from '../components/~Global/AppBtn.vue'
import appDialog from '../components/~Global/AppDialog.vue'
import nothingHere from '../components/~Global/NothingHere.vue'

const globalComponents = {
    'app-btn': appBtn,
    'app-dialog': appDialog,
    'nothing-here': nothingHere
    // 'nothing-here': require('components/~Global/NothingHere').default,
    // 'page-pane': require('components/~Global/Panes/PagePane').default,
    // 'pane-body': require('components/~Global/Panes/PaneBody').default,
    // 'pane-footer': require('components/~Global/Panes/PaneFooter').default,
    // 'pane-header': require('components/~Global/Panes/PaneHeader').default,
}

export default boot ( async({ app }) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
})
