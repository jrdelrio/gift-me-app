import os
from flask import Flask, request, jsonify
# from flask_migrate import Migrate
# from flask_swagger import swagger
from flask_cors import CORS
# from utils import APIException, generate_sitemap
# from admin import setup_admin
# from models import db, User

app = Flask(__name__)

db_url = os.getenv("DATABASE_URL")
print(db_url)

CORS(app)

@app.route('/')
def hello_world():
    print('la funcion corre')
    return "Testing message from the api"




'''
from markupsafe import escape

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"
'''