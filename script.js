// Función para mostrar el modal con el gráfico
function mostrarGrafico(vendedor) {
    document.getElementById('modal').style.display = 'block';

    // Datos de ejemplo para las ventas
    let datosVentas = {
        ventasLucy: [12, 19, 3, 5, 2, 3],
        ventasAmanda: [10, 15, 8, 7, 5, 10]
    };

    // Crear el gráfico
    const ctx = document.getElementById('ventasChart').getContext('2d');
    const ventasChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [{
                label: 'Ventas del Mes',
                data: datosVentas[vendedor],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    location.reload();  // Recarga la página
}

document.querySelectorAll('.aprobar').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Solicitud aprobada.');
        const fila = this.closest('tr'); // 'this' se refiere al botón, 'closest("tr")' selecciona la fila más cercana
        fila.remove(); // Eliminamos la fila de la tabla
        // Aquí puedes añadir la lógica de aprobación
    });
});

// Seleccionamos todos los botones "Eliminar Solicitud"
document.querySelectorAll('.eliminar').forEach(btn => {
    btn.addEventListener('click', function() {
        // Confirmamos si el usuario realmente quiere eliminar la solicitud
        if (confirm('¿Estás seguro de eliminar esta solicitud?')) {
            // Buscamos la fila que contiene el botón presionado
            const fila = this.closest('tr'); // 'this' se refiere al botón, 'closest("tr")' selecciona la fila más cercana
            fila.remove(); // Eliminamos la fila de la tabla
        }
    });
});


