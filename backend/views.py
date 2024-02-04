from flask import jsonify, request
from .core import *
from flask_cors import cross_origin
from backend-service import BusinessModel, UserModel

'''
query_params = test.args
get request should have nonsensitive data in query params
send info in body of a post request (JSON data)
body = request.json (request.get_data()) (for JSON data, but will raise error for non JSON data)

try:
    body = request.get_data
except Exception as e:
    return jsonify({"message": "Error parsing JSON"}), 400
'''


@app.route("/", methods=["GET"])
@cross_origin()
def index():
    return jsonify([{"message": "Treatsi API is Running!"}]), 200


@app.route("/signup", methods=["POST"])
def addBusiness():
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify([{"message": "Error parsing JSON"}]), 400
    con = businessModel()
    added = con.addBusiness(data["id"], data["state"])
    if added:
        return jsonify([{"message": "Business added."}])
    else:
        return jsonify([{"message": "Business exists."}])

@app.route("/signup", methods=["GET", "POST"])
def addUser():
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify([{"message": "Error parsing JSON"}]), 400
    con = userModel()
    added = con.addUser(data["id"], data["state"])
    if added:
        return jsonify([{"message": "User added."}])
    else:
        return jsonify([{"message": "User exists."}])

# Business API
@app.route('/businesses', methods=['GET'])
def get_all_businesses():
    with BusinessModel() as business_model:
        businesses = business_model.get_all_businesses()
        return jsonify({'businesses': businesses})

@app.route('/businesses', methods=['POST'])
def add_business():
    data = request.get_json()
    with BusinessModel() as business_model:
        business_model.add_business(data['name'], data['location'], data['hours'], data.get('menu', []))
        return jsonify({'message': 'Business added successfully'})

@app.route('/businesses/<name>', methods=['GET'])
def get_business(name):
    with BusinessModel() as business_model:
        business_info = business_model.get_business_by_name(name)
        return jsonify({'business': business_info})

@app.route('/businesses/<name>', methods=['PUT'])
def update_business(name):
    data = request.get_json()
    with BusinessModel() as business_model:
        business_model.update_business(name, data.get('location'), data.get('hours'), data.get('menu'))
        return jsonify({'message': 'Business updated successfully'})

@app.route('/businesses/<name>', methods=['DELETE'])
def delete_business(name):
    with BusinessModel() as business_model:
        business_model.drop_business(name)
        return jsonify({'message': 'Business deleted successfully'})

# User API
@app.route('/users', methods=['POST'])
def add_user():
    data = request.get_json()
    with UserModel() as user_model:
        user_model.add_user(data['username'], data['password'], data['location'])
        return jsonify({'message': 'User added successfully'})

@app.route('/users/<username>', methods=['GET'])
def get_user(username):
    with UserModel() as user_model:
        points = user_model.get_points(username)
        places = user_model.get_places(username)
        return jsonify({'username': username, 'points': points, 'places': places})

@app.route('/users/<username>', methods=['PUT'])
def update_user(username):
    data = request.get_json()
    with UserModel() as user_model:
        user_model.update_user(username, data.get('password'), data.get('location'))
        return jsonify({'message': 'User updated successfully'})

@app.route('/users/<username>/visit/<business_name>', methods=['POST'])
def user_visit_business(username, business_name):
    with UserModel() as user_model, BusinessModel() as business_model:
        user_model.update_points(username)
        business_model.update_visits(business_name)
        return jsonify({'message': 'Visit recorded successfully'})

@app.route('/users/<username>/points', methods=['GET'])
def get_user_points(username):
    with UserModel() as user_model:
        points = user_model.get_points(username)
        return jsonify({'username': username, 'points': points})

@app.route('/users/<username>/places', methods=['GET'])
def get_user_places(username):
    with UserModel() as user_model:
        places = user_model.get_places(username)
        return jsonify({'username': username, 'places': places})
