document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter valores dos campos
    const titulo = document.getElementById('inTitulo').value;
    const duracaoMinutos = parseInt(document.getElementById('inDuracao').value);
    
    // Converter minutos para horas e minutos
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    
    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `${titulo} tem duração de ${horas}h${minutos}min`;
    
    // Limpar campos (opcional)
    document.getElementById('inTitulo').value = '';
    document.getElementById('inDuracao').value = '';
});
