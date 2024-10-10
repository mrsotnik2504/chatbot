**chatbot**

Chatbot on Flask with a simple machine learning algorithm is my simple template for working with simple ML models on and integrating them as Web Applications
In this example, the chatbot can tell you about the company "Pricladnie Reshenia (Applied Solutions)".

**Description**

This project is a web-based chatbot interface developed using Flask and includes a simple machine learning algorithm to understand user requests. The chatbot can answer a number of predefined questions and perform basic mathematical operations.

**Installation**

Clone the repository:
git clone https://github.com/yourusername/chatbot.git
cd chatbot

**Install dependencies:**

```bash
pip install -r requirements.txt
```

**Launch the application:**

```bash
python app.py
```

**Open a browser and go to http://127.0.0.1:5000.**

**Using**

Enter your request in the text field.
The chatbot will respond based on a pre-trained model.
If your query contains a mathematical expression, the bot will perform calculations and provide the result.
Project
structure app.py : the main file of the Flask application.
templates/index.html : HTML template for the user interface.
data: An array of requests and responses that is used to train the model.

**Request Examples**

- "Привет"
- "Как дела?"
- "Расскажи о компании"
- "Посчитай, 2 + 2"

**Dependencies**

- Flask
- NLTK
- Scikit-learn

-----------------------------------------------------------------------------------------------
**License**

This project is licensed under the MIT license. See the LICENSE file for more information.

**Contacts**

If you have any questions or suggestions, please create an issue in the repository.
