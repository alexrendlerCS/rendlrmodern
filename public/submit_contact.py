from flask import Flask, request, jsonify
from supabaseConnect import get_connection

app = Flask(__name__)

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    conn = get_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO contact_messages (name, email, message)
            VALUES (%s, %s, %s)
        """, (name, email, message))
        conn.commit()
        cur.close()
        return jsonify({"success": "Message submitted successfully"}), 200
    except Exception as e:
        print("Failed to insert data:", e)
        return jsonify({"error": "Failed to submit message"}), 500
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
