# LinguaQZ

**LinguaQZ** is a web application designed for automatic translation of text from Russian to Kazakh.  
The project consists of a client-side interface and a server-side translation service running locally.

---

## ✨ Features

- Automatic translation from Russian to Kazakh  
- Translation starts automatically while typing (no buttons required)  
- Clean and minimal user interface  
- Local server-based processing  
- No third-party cloud APIs required  

---

## 🧠 Translation Model

The translation functionality is implemented using the **kazRush-ru-kk** neural machine translation model.  
The model is executed locally on the server side and processes text requests sent from the web interface.

---

## 📁 Project Structure

LinguaQZ/
├── index.html # Web interface
├── style.css # Visual styling
├── script.js # Client-side logic
├── server.py # Flask server (translation backend)
└── README.md # Project documentation

---

## ⚙️ Requirements

To run this project, you need:

- **Python 3.9 or higher**
- **pip** (Python package manager)
- Internet connection (required only on first run to download dependencies)

---

## 🚀 Installation and Setup

### 1️⃣ Clone or Download the Repository

```bash
git clone https://github.com/USERNAME/LinguaQZ.git
cd LinguaQZ
```
### 2️⃣ Install Required Python Packages

Open a terminal or PowerShell in the project directory and run:

pip install flask flask-cors transformers torch sentencepiece


⚠️ Note:
On the first launch, the translation model will be downloaded automatically. This may take several minutes depending on your internet speed.

### 3️⃣ Start the Server

Run the following command in the project directory:

python server.py

If everything is correct, you should see output similar to:

Running on http://127.0.0.1:5000

⚠️ Do not close this terminal window while using the application.

### 4️⃣ Open the Web Interface

Open the index.html file using one of the following methods:

Recommended:

Use Live Server extension in Visual Studio Code

Or open the file through a local server, for example:

http://localhost:5500

### 🧪 How to Use

Enter Russian text into the left input field

Pause typing for a moment

The Kazakh translation will appear automatically in the right field

No button clicks are required — translation is triggered automatically.

❗ Important Notes

The application supports Russian → Kazakh translation only

Reverse translation (Kazakh → Russian) is not supported

The Flask server must be running for the translation to work

GitHub Pages can display the interface but cannot run the backend

### 🌐 About GitHub Pages

Since this project uses a Python backend:

❌ Full functionality cannot run on GitHub Pages

✅ Frontend files can still be hosted for demonstration purposes

✅ The backend must be run locally or on a separate server

### 🎓 Academic Disclaimer

This project was created for educational purposes to demonstrate:

automatic text translation principles

client–server architecture

integration of a web interface with a backend service
