export const navTemplate = `
<style>
.flex-container {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    text-align: right;
}
.nav-item {
    font-family: sans;
    margin-bottom: 5px;
    padding: 3px;
    color: black;
}
.nav-item:hover {
    background-color: black;
    color: white;
}
</style>

<div class="flex-container">
    <a href="#" class="about nav-item">about</a>
    <a href="#rules" class="rules nav-item">club rules</a>
    <a href="#finance" class="finance nav-item">finance</a>
    <a href="#brew-list" class="nav-item">brew list</a>
</div>
`