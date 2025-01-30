from flask import Flask, send_file
app = Flask(__name__)

@app.route('/')
def rss():
    return send_file('classic.xml', mimetype='application/xml')

if __name__ == '__main__':
    app.run(debug=False, port=8080)