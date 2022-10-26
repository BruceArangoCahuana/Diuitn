function sendEmail() {
    Email.send({
      Host: "smtp.mailtrap.io",
      Username: "adbbec8f398a5e",
      Password: "5aba5002210df9",
      To: 'brucecahuanabrandon@gmail.com',
      From: "brucecahuanabrandon@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }