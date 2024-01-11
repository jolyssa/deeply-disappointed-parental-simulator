document.querySelector('#yell').addEventListener('click', softDisappointment)

function softDisappointment(){

    const firstName = document.querySelector('#fName').value
    const middleName = document.querySelector('#mName').value
    const lastName = document.querySelector('#lName').value

    let fullName = document.querySelector('#forSoftDisappointment')

    fullName.innerText = `${firstName} ${middleName} ${lastName}, please get down here now.`

    if (firstName.toLowerCase().includes('t')) {
        fullName.innerText += ' I need to talk to you.'
    } else {
        fullName.innerText += ' We have some things to discuss.'
    }
}