
Host : https://text2picapp.netlify.app/

---
# GAN-Based Text-to-Image Synthesizer

A deep learning-based project that generates high-quality images from textual descriptions using Generative Adversarial Networks (GAN) and Latent Diffusion Models (LDM). This project enables users to input text and receive an AI-generated image based on the description.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Build Commands](#build-commands)
- [Contributors](#contributors)
- [License](#license)

## Features
- Text-to-image conversion using GAN and LDM.
- Pre-trained models for enhanced performance.
- Web-based user interface for text input and image display.
- Chatbot support for interactive user assistance.

## Technologies Used
- **Backend:** Python, PyTorch, Hugging Face
- **Frontend:** React.js/Next.js
- **API Development:** Node.js, Express.js
- **Database:** SQL Server
- **Deployment:** Docker, AWS/GCP

## Installation

### Clone the Repository
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### Backend Setup
1. **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/Mac
    venv\Scripts\activate  # Windows
    ```
2. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3. **Download pre-trained models:**
   Place the downloaded models in the `models/` directory.

### Frontend Setup
1. **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Running the Backend
1. Activate the virtual environment:
    ```bash
    source venv/bin/activate  # Linux/Mac
    venv\Scripts\activate  # Windows
    ```
2. Start the backend server:
    ```bash
    python app.py
    ```

### Running the Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```

### Accessing the Application
Open your browser and navigate to `http://localhost:3000`.

## Build Commands

### Build the Backend
```bash
python setup.py build
```

### Build the Frontend
```bash
npm run build
```

### Running Tests
- **Backend:**
    ```bash
    pytest tests/
    ```
- **Frontend:**
    ```bash
    npm test
    ```

## Contributors
- **Supun Thilakshana** - Text-to-Image Model Developer
- **Sachini** - Web App Developer
- **Pavith** - Chatbot Developer

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
