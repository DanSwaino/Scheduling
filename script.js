document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Here you can send the data to a server or process it as needed
    console.log('Form Data:', data);

    // Provide user feedback
    alert('Form submitted successfully!');

    // Optionally, you could clear the form or redirect the user
    this.reset();
});
