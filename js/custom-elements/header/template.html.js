export const headerTemplate = `
<style>
.icon-container {
    height: 200px;
    margin-top: 50px;
    text-align: center;
}
.brewminati-icon {
  animation: MoveUpDown 6s ease-in-out infinite;
  position: relative;
  bottom: 0;
}
@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 50px;
  }
}
.title {
    text-align: center;
    font-family: 'alien', sans;
    font-size: 5em;
    height: 1em;
    color: white;
    background-color: black;
}
</style>

<div class="icon-container">
    <img class="brewminati-icon" src="/js/custom-elements/header/brewminati-icon.gif" height="200" width="200"> 
</div>
<div class="title">
    BREWMINATI
</div>
`