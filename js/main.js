import initPageLayoutComponent from '/js/custom-elements/page-layout/page-layout.js'
import initNavComponent from '/js/custom-elements/nav/nav.js'
import initHeaderComponent from '/js/custom-elements/header/header.js'
import initMainContentComponent from '/js/custom-elements/main-content/main-content.js'

const componentInitialization = [
  initPageLayoutComponent,
  initNavComponent,
  initHeaderComponent,
  initMainContentComponent,
]

componentInitialization.forEach(init => init())
