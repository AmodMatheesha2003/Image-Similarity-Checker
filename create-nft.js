function showAlert(message, type) {
    const alertBox = document.getElementById('alertBox');
    alertBox.innerText = message;
    alertBox.style.display = 'block';
    alertBox.style.background = type === 'error' ? '#ff6b6b' : '#28a745';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

const fileInput = document.getElementById('fileInput');
const uploadBox = document.getElementById('uploadBox');
const browseLink = document.getElementById('browseLink');
const selectedFileDiv = document.getElementById('selectedFile');
let selectedFile = null;

uploadBox.addEventListener('click', function(e) {
    if (e.target !== browseLink) fileInput.click();
});
browseLink.addEventListener('click', function(e) {
    e.stopPropagation();
    fileInput.click();
});
fileInput.addEventListener('change', function(e) {
    if (e.target.files && e.target.files.length > 0) {
        selectedFile = e.target.files[0];
        selectedFileDiv.innerText = "Selected file: " + selectedFile.name;
    }
});

document.getElementById('nftForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const imageName = document.getElementById('imageName').value;

    if (!selectedFile) {
        showAlert("Please select an image.", 'error');
        return;
    }
    if (!imageName.trim()) {
        showAlert("Please enter your name.", 'error');
        return;
    }

    // Read file as base64
    const reader = new FileReader();
    reader.onload = async function(evt) {
        const imageBase64 = evt.target.result.split(',')[1]; // Remove "data:image/xxx;base64,"
        showAlert("Uploading...", 'success');
        try {
            const res = await fetch(
                "http://127.0.0.1:8000/upload",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: imageName,
                        imageBase64: imageBase64
                    }),
                }
            );
            const data = await res.json();
            if (data && data.error) {
                showAlert(data.error, 'error');
            } else if (data && data.message) {
                showAlert(data.message, 'success');
            } else {
                showAlert("Upload complete.", 'success');
            }
        } catch (err) {
            showAlert(err.message || err, 'error');
        }
    };
    reader.readAsDataURL(selectedFile);
});