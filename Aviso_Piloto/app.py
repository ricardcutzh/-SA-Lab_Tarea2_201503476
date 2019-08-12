"""
@author: Ricardo Antonio Cutz Hernandez | 201503476
This is the main file where the Driver notification Service
will handle requests for a driver
"""
from flask import Flask, jsonify, request
import DriverController
app = Flask(__name__)

@app.route('/get_driver', methods=['GET'])
def get_driver():
    """
    Description:
    ------------
    This url searches for a driver that is closest to the client

    Example URL:
    ------------
    /get_driver?id_client=1&name=C1&lastname=C1&pos_x=5&pos_y=5

    Returns:
    --------
    code 200:
        returns the drivers information
    
    code 400:
        returns error message, parameters are not the correct ones
    code 500:
        returns server error
    """
    try:
        if(len(request.args)==5):
            x = int(request.args.get('pos_x'))
            y = int(request.args.get('pos_y'))
            dic_driver = DriverController.search_driver(x,y)
            driver = dic_driver["driver"]
            d = {
                "id_driver": driver.driver_id,
                "name": driver.name,
                "lastname": driver.lastname,
                "pos_x": driver.pos_x,
                "pos_y": driver.pos_y,
                "distance": dic_driver["distance"]
            }
            return jsonify({"message":"ok", "driver_info": d}),200
        else:
            return jsonify({"message":"error"}), 400
    except Exception as e:
        return jsonify({"message":str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8001, host = '0.0.0.0')