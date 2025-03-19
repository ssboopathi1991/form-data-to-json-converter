document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.querySelector('.convert-json');
    const formDataOutput = document.querySelector('.formDataValues');
    const jsonInput = document.querySelector('.jsonValues');

    convertButton.addEventListener('click', () => {
        convertFormDataToJson();
    });

    function convertFormDataToJson() {
        try {
            convertButton.textContent = 'Converting...';

            // Get form-data as a raw string from the textarea
            const formDataString = formDataOutput.value.trim();
            
            // Convert it into JSON
            const jsonObject = parseNewlineFormData(formDataString);
            
            // Output the formatted JSON
            jsonInput.value = JSON.stringify(jsonObject, null, 2);

        } catch (err) {
            alert('Error parsing form-data. Please check your input.');
        } finally {
            setTimeout(() => {
                convertButton.textContent = 'Convert';
            }, 200);
        }
    }

    function parseNewlineFormData(formDataString) {
        const jsonObject = {};
        
        // Split input by newlines
        const lines = formDataString.split('\n');

        lines.forEach(line => {
            const [key, value] = line.split(':').map(part => part.trim()); // Trim spaces

            if (key) {
                // Convert boolean values properly
                if (value.toLowerCase() === 'true') jsonObject[key] = true;
                else if (value.toLowerCase() === 'false') jsonObject[key] = false;
                else if (!isNaN(value) && value !== '') jsonObject[key] = Number(value); // Convert numbers
                else jsonObject[key] = value; // Store as string (including empty values)
            }
        });

        return jsonObject;
    }
});
