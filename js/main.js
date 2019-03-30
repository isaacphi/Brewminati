import registerPageLayoutComponent from '/js/custom-elements/page-layout/page-layout.js'
import registerNavComponent from '/js/custom-elements/nav/nav.js'
import registerHeaderComponent from '/js/custom-elements/header/header.js'
import registerMainContentComponent from '/js/custom-elements/main-content/main-content.js'

const componentRegistration = [
  registerPageLayoutComponent,
  registerNavComponent,
  registerHeaderComponent,
  registerMainContentComponent,
]

componentRegistration.forEach(register => register())
