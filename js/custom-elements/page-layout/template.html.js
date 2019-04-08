export const pageLayoutTemplate = `
<style>
    .page-grid-container {
      display: grid;
      grid-template-columns: 200px auto;
      grid-template-rows: auto;
      grid-template-areas: 
        "header header header"
        "nav main main"
    }
    .header-container {
      grid-area: header;
      width: 100%;
    }
    .nav-container {
      grid-area: nav;
    }
    .main-content-container {
      grid-area: main;
    }
</style>

<div class='page-grid-container'>
  <div class='header-container'>
    <header-component/>
  </div>
  <div class='nav-container'>
    <nav-component/>
  </div>
  <div class='main-content-container'>
    <main-content-component/>
  </div>
</div>
`
