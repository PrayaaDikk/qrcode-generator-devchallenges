const urlReq = new URLSearchParams(window.location.search);
const url = urlReq.get("url");

if (!url) {
	window.location.href = "/";
}

const qrcodeContainer = document.getElementById("qrcode-container");
const downloadButton = document.getElementById("download-btn");
const shareButton = document.getElementById("share-btn");

const qrcode = new QRCode(qrcodeContainer, {
	text: url,
	colorDark: "#000000",
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.H,
});

function downloadQRCode() {
	const qrCanvas = qrcodeContainer.querySelector("canvas");

	if (!qrCanvas) {
		alert("QR Code not found");
		return;
	}

	const link = document.createElement("a");
	link.href = qrCanvas.toDataURL("image/png");
	link.download = "qr-code.png";
	link.click();
}

function shareQRCode() {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(url);
		alert("URL copied to clipboard");
	}
}
