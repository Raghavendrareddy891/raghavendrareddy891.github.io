# from flask import Flask, render_template, request, jsonify
# import google.generativeai as genai

# genai.configure(api_key="AIzaSyD52mO4pFXnWHdhFecBERjpTjT24KGIsxM")
# model = genai.GenerativeModel('gemini-pro')

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('home.html')

# @app.route('/process_text', methods=['POST'])
# def process_text():
#     input_text = request.form['inputText']
#     chat = model.start_chat(history=[])
#     response = chat.send_message(input_text)

#     return jsonify({'answer': response.text})

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

genai.configure(api_key="AIzaSyD52mO4pFXnWHdhFecBERjpTjT24KGIsxM")
model = genai.GenerativeModel('gemini-pro')

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/process_text', methods=['POST'])
def process_text():
    input_text = request.form['inputText']
    chat = model.start_chat(history=[])
    response = chat.send_message(input_text)

    return jsonify({'answer': response.text})

if __name__ == '__main__':
    app.run(debug=True)

