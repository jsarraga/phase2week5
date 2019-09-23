from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/homepage', methods=['GET'])
def homepage():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug=True)