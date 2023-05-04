function generateQRCode() {
    let website = document.getElementById('website').ariaValueMax;
    if(website) {
        let qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = '';
        new QRCode (qrcodeContainer, website);

        document.getElementById('qrcode-containe').style.display = 'block';
    } else {
        alert("Pleas enter a valid URL");
    }
}