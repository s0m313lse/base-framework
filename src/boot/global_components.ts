import { boot } from 'quasar/wrappers'

const globalComponents = {
    'app-btn': require('components/~Global/Buttons/AppBtn').default
    // 'app-dialog': require('components/~Global/Dialogs/AppDialog').default,
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
