document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah form dikirim secara default

        // Ambil data dari form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Lakukan sesuatu dengan data, misalnya kirim ke server atau tampilkan pesan konfirmasi
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        
        // Kosongkan form setelah dikirim
        form.reset();
    });
});
