const scriptURL = 'https://script.google.com/macros/s/AKfycbx_S0Co3nlsimmmvQ_71jGaG5tMlPno3teLFMyg2bU5T9ONYSTwsLspSDtm9RoSC_aq/exec'

const form = document.forms['git-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})