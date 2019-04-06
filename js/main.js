import initPageLayoutComponent from '/js/custom-elements/page-layout/page-layout.js'
import initNavComponent from '/js/custom-elements/nav/nav.js'
import initHeaderComponent from '/js/custom-elements/header/header.js'
import initMainContentComponent from '/js/custom-elements/main-content/main-content.js'
import initAboutComponent from '/js/custom-elements/about/about.js'
import initBrewListTemplate from '/js/custom-elements/brew-list/brew-list.js'

const componentInitialization = [
  initPageLayoutComponent,
  initNavComponent,
  initHeaderComponent,
  initMainContentComponent,
  initAboutComponent,
  initBrewListTemplate,
]

componentInitialization.forEach(init => init())
