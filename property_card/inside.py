from fastapi import APIRouter
import mysql.connector
from property_card import  model

app=APIRouter()

def connect_to_mysql():
    
    try:
        connection = mysql.connector.connect(
            host='127.0.0.1',
            user='root',
            password='d239dbopal',
            database='oddo'
        )
          
        
        print("Connected to MySQL database")
        return connection
    except mysql.connector.Error as e:
        print(f"Error connecting to MySQL database: {e}")
        return None
    
@app.post("/get_all_property")
def get_all(id:model.info):
    db=connect_to_mysql()
    sql="SELECT * FROM property WHERE property_id = %s"
    cursor = db.cursor()
    cursor.execute(sql,(id.property_id,))
    result=cursor.fetchone()
    properties = []
    print(result)
    return {"data":properties}