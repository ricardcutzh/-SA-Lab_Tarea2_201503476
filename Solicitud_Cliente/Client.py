"""
@author: Ricardo Antonio Cutz Hernandez | 201503476
This file represents the client class with all the properties of 
the object client
"""
import random 
import json
class Client():
    """
    Attributes
    ----------
    name: str
        name of the client
    lastname: str
        lastname of the client
    client_id: int
        id representing a client
    pos_x: int
        client's x position
    pos_y: int
        client's y position
    """

    def __init__(self, name, lastname, id_client):
        """
        Parameters:
        -----------
        name: str 
            name of the client
        lastname: str
            lastname of the client
        """
        self.client_id = id_client
        self.name = name
        self.lastname = lastname
        self.pos_x = random.randint(0,20)
        self.pos_y = random.randint(0,20)
    
    def get_id(self):
        """
        Description:
        ------------
        returns the client's id
        """
        return self.client_id
    
    