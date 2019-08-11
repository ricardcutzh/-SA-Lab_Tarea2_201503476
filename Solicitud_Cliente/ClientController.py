"""
@author: Ricardo Antonio Cutz Hernandez | 201503476
This file handles clients in this service
"""
from Client import Client # import class Client
# CLIENTS IN THE APP
clients = [
    Client("C1","C1",1),
    Client("C2","C2",2),
    Client("C3","C3",3),
    Client("C4","C4",4),
    Client("C5","C5",5),
    Client("C6","C6",6),
    Client("C7","C7",7)
]

def get_client(id):
    """
    Parameters:
    -----------
    id: int
        id of the client
    
    Description:
    ------------
    returns the client from de id
    """
    for c in clients:
        if(c.client_id == id):
            return c
    return None