const storage = window.localStorage

const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('#contact-list')
    if (contacts) {
        div.innerHTML = ''
        const ul = document.createElement('table')
        ul.innerHTML = `<button id="delete-contact">Delete Contact</button>
        <button id="edit-contact">Edit Contact</button>
        <table id="contact-list-header">
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Company</th>
        <th>Notes</th>
        <th>Twitter</th>
        </tr>
        </table>`
    contacts.forEach(contact => {
        let li = document.createElement('tr')

        li.innerHTML = `
            <table id="contact-list">
                <tr id = "first-row">
                    <td>${contact.name}</td>   
                    <td>${contact.email}</td> 
                    <td>${contact.phone}</td>
                    <td>${contact.company}</td> 
                    <td>${contact.notes}</td>
                    <td>${contact.twitter}</td> 
                </tr>
            </table> 
        `
        ul.appendChild(li)
        
    })
    div.appendChild(ul)
} else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
}
}

document.addEventListener('DOMContentLoaded', () =>{
    renderContacts()
    const contactForm = document.getElementById('new-contact-form')
    const toggleFormVisibilityButton = document.getElementById('add-contact')
    contactForm.style.display = 'none'

    toggleFormVisibilityButton.addEventListener('click', () => {
        if (contactForm.style.display === '') {
                contactForm.style.display = 'none'
        } else {
                contactForm.style.display =  ''
        }
    })

    contactForm.addEventListener('submit', event => {
        event.preventDefault()

        const { name, email, phone, company, notes, twitter } = contactForm.elements
    
        const contact = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value
        }

        console.log(contact)

        let contacts = JSON.parse(storage.getItem('contacts')) || []

        contacts.push(contact)

        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        contactForm.reset()
    })
})
/*let firstRow = document.querySelector('first-row');
var deleteButton = document.getElementById('delete-contact');
deleteButton.addEventListener('click', () => {
  firstRow.delete();
  renderContacts();
});*/

