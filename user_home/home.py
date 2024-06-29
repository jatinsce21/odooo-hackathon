from fastapi import FastAPI,HTTPException,APIRouter
import mysql.connector
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
    
@app.get("/get_data")
def get_data():
    db=connect_to_mysql()
    sql="SELECT name,overview,type, property_id FROM property"
    cursor = db.cursor()
    cursor.execute(sql)
    result=cursor.fetchall()
    properties = []
    for row in result:
        properties.append({
            "name": row[0],
            "overview": row[1],
            "type": row[2],
            "property_id": row[3]
        })
    return {"data":properties}
    


