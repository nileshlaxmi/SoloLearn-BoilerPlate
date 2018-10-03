const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    document.getElementById('opText').innerHTML = str;
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
