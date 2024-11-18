<script>
  window.onload = function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');

    // Mostrar el pop-up después de 5 segundos
    setTimeout(() => {
      popup.style.display = 'flex';
    }, 5000);

    // Cerrar el pop-up al hacer clic en la "x"
    closeBtn.onclick = function () {
      popup.style.display = 'none';
    };

    // Cerrar el pop-up si se hace clic fuera de él
    popup.onclick = function (e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    };
  };
</script>
