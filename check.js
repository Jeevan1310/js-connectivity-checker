function checkConnectivityStatus() {
    // Getting status div
    const status = document.getElementById("status");

    if (navigator.onLine) {
        status.style.background = 'lawngreen';
        status.innerText = 'Online!';
    } else {
        status.style.background = 'red';
        status.innerText = 'Offline';
    }
}