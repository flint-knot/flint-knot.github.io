/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

button {
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
}

main {
    max-width: 700px;
    margin: auto;
}

.post {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.post h2 {
    margin-bottom: 10px;
}

.post .date {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 15px;
}

footer {
    text-align: center;
    margin-top: 40px;
    color: #555;
}

/* Dark Mode */
body.dark-mode {
    background-color: #121212;
    color: #ddd;
}

body.dark-mode .post {
    background-color: #1e1e1e;
}

body.dark-mode button {
    background-color: #ddd;
    color: #333;
}
