export const pageLayoutTemplate = `
<style>
    .page-grid-container {
      display: grid;
      grid-template-columns: 20% auto 50px;
      grid-template-rows: auto;
      grid-template-areas: 
        "header header header"
        "nav main ."
    }
    .header-container {
      grid-area: header;
      justify-self: center;
      width: 100%;
    }
    .nav-container {
      grid-area: nav;
      justify-self: right;
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