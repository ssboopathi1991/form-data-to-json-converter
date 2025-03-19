# Form Data to JSON Converter

![GitHub stars](https://img.shields.io/github/stars/ssboopathi1991/form-data-to-json-converter?style=social)
![GitHub forks](https://img.shields.io/github/forks/ssboopathi1991/form-data-to-json-converter?style=social)

## Overview

The **Form Data to JSON Converter** is a lightweight and user-friendly web tool designed to simplify the process of converting form-data into JSON, making API testing and web development more efficient.

## Features

✅ **Instant Conversion** – Quickly transform form-data into JSON format with a single click.
✅ **Easy-to-Use Interface** – Simple, intuitive UI designed for developers and testers.
✅ **API Testing Friendly** – Ideal for testing APIs that require JSON payloads.
✅ **Web Development Support** – Streamline your workflow with structured data conversion.
✅ **Nested Data Handling** – Supports converting structured form-data into nested JSON objects and arrays.
✅ **Fully Client-Side** – No data is sent to a server, ensuring privacy and security.

## How to Use

1. **Enter Form Data** – Paste your form-data into the input textarea.
2. **Click Convert** – Press the "Convert" button to transform the form-data into JSON.
3. **Copy JSON Output** – Retrieve the converted JSON from the output textarea.
4. **Use in API Requests** – Copy and use the JSON in API testing tools like Postman.

## Example

### **Form Data Input:**
```
name=John Doe
email=john@example.com
address[city]=New York
address[zip]=10001
hobbies[0]=reading
hobbies[1]=gaming
```

### **JSON Output:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "gaming"]
}
```

## Technologies Used

- **HTML** – Provides structure to the web page.
- **CSS** – Styles the interface for a clean and modern look.
- **JavaScript** – Handles form-data parsing and JSON conversion.

## Installation & Local Setup

To use this tool locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ssboopathi1991/form-data-to-json-converter.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd form-data-to-json-converter
   ```

3. **Open `index.html` in a Browser:**
   Simply open the `index.html` file in your preferred web browser.

## Contributing

Contributions are welcome! If you'd like to improve this tool, feel free to submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For feedback or issues, please open a [GitHub Issue](https://github.com/ssboopathi1991/form-data-to-json-converter/issues).

---

🌟 **If you find this tool helpful, please consider giving it a star on GitHub!** 🚀

