"""
@author: Ricardo Antonio Cutz Hernandez | 201503476
This is the main file where the Client Service will
Handle requests from the clients
"""
from flask import Flask, jsonify, request
import ClientController

app = Flask(__name__)

@app.route('/get_client', methods=['GET'])
def get_client():
    """
    Description:
    ------------
    This url searches the client specified by id

    Example URL:
    ------------
    /get_client?id_client=1

    Returns:
    --------
    code 200:
        returns the client as json
    
    code 400:
        returns error message, client not found
    code 500:
        returns server error
    """
    try:
        client = ClientController.get_client(int(request.args.get('id_client')))
        if(client is not None):
            c = {
                "id_client": client.client_id,
                "name": client.name,
                "lastname": client.lastname,
                "pos_x": client.pos_x,
                "pos_y": client.pos_y
            }
            return jsonify({"message":"ok","client": c}), 200
        else:
            return jsonify({"message":"client not found"}), 400
    except Exception as e:
        return jsonify({"message:":str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=8001, host = '0.0.0.0')
