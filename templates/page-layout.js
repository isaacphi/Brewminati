export const pageLayoutTemplate = `
<style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
</style>
<p><slot name="my-text">My default text</slot></p>
`