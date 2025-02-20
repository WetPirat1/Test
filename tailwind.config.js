module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                'container': '1200px mx-auto',
            },
        },
        container: {
            center: true,
            padding: '15px', // Додатковий відступ для малих екранів
        },
    },
    plugins: [],
}