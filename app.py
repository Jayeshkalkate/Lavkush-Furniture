from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Configure MySQL
db_config = {
    'host': 'localhost',
    'user': 'root@localhost',
    'password': '#Jayesh2004',
    'database': 'lavkushfurniture'
}

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'message': 'All fields are required'}), 400

    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    try:
        query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
        cursor.execute(query, (name, email, password))
        conn.commit()
        return jsonify({'message': 'Registration successful'}), 201
    except mysql.connector.IntegrityError:
        return jsonify({'message': 'Email already exists'}), 409
    except mysql.connector.Error as err:
        return jsonify({'message': f'Error: {str(err)}'}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
