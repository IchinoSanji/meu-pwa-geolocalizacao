document.getElementById('localizar').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('resultado').innerHTML = "Geolocalização não é suportada neste navegador.";
    }
});

function showPosition(position) {
    const resultado = `
        Latitude: ${position.coords.latitude}<br>
        Longitude: ${position.coords.longitude}
    `;
    document.getElementById('resultado').innerHTML = resultado;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('resultado').innerHTML = "Usuário negou a solicitação de Geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('resultado').innerHTML = "Localização indisponível.";
            break;
        case error.TIMEOUT:
            document.getElementById('resultado').innerHTML = "A requisição para obter a localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('resultado').innerHTML = "Um erro desconhecido ocorreu.";
            break;
    }
}
