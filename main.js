// all elements

const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const Confirm = document.querySelector("#Confirm");
const form = document.querySelector("#form");


const showerror = (input, massage) => {
    let parentelement = input.parentelement;
    parentelement.classList = 'form-control error'
}

// function kan 
const checkempty = (elements) => {

    elements.forEach((element) => {
        if (element.value === '') {
            showerror(element, 'input required');
        }
    })

}

form.addEventListener("submit", (event) => {

    event.preventDefault();
    // input yada dhan iyaga oo firaq ah in submit la dhaho mala rabo in waxa la raba calamad guduud ee soo baxdo hadi error jiro

    // funtion ayaa u sameesane oo check required ah si uu u hubiyo calamada

    // if waxa username ka ku dhex qoran
    // if (username.value === '') {
    //     username.parentElement.classList = ('error');
    //     // username.style.border = '1px solid #e61818';
    // }

    // if (Email.value === '') {
    //     Email.style.border = '1px solid #e61818';
    // }
    // if (Password.value === '') {
    //     Password.style.border = '1px solid #e61818';
    // }
    // if (Confirm.value === '') {
    //     Confirm.style.border = '1px solid #e61818';
    // }

    // function ahan ayan ugu passena
    checkempty([username, Email, Password, Confirm])


});