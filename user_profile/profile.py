from fastapi import  HTTPException ,APIRouter
from user_profile import  model
import mysql.connector
from user_profile import utilities
import os 
app=APIRouter()
def connect_to_mysql():
    
    try:
        connection = mysql.connector.connect(
            host='127.0.0.1',
            user='root',
            password=os.getenv('DB_PASSWORD'),
            database='oddo'
        )
          
        
        print("Connected to MySQL database")
        return connection
    except mysql.connector.Error as e:
        print(f"Error connecting to MySQL database: {e}")
        return None


@app.post("/change_number")
def change_number(info:model.change_number):
    db=connect_to_mysql()
    success =utilities.decode_jwt_token(info.token)
    if success == False:
        raise HTTPException(status_code=400, detail="token is invalid ")
    respoone=utilities.update_mobile_number(db,success["user_id"],info.mobile_number)
    if respoone==False:
        raise HTTPException(status_code=505, detail="problme from our side")
    return {"message":"the numebr is changes "}

@app.post("/change_email")
def change_number(info:model.change_email):
    db=connect_to_mysql()
    success =utilities.decode_jwt_token(info.token)
    if success == False:
        raise HTTPException(status_code=400, detail="token is invalid ")
    respoone=utilities.update_email(db,success["user_id"],info.email_id)
    if respoone==False:
        raise HTTPException(status_code=505, detail="problme from our side")
    return {"message":"the email is changes "}

@app.post("/change_password")
def change_number(info:model.change_password):
    db=connect_to_mysql()
    success =utilities.decode_jwt_token(info.token)
    if success == False:
        raise HTTPException(status_code=400, detail="token is invalid ")
    respoone=utilities.update_password(db,success,info.password)
    if respoone==False:
        raise HTTPException(status_code=505, detail="problme from our side")
    return {"message":"the password is changes "}

@app.get("/get_all_bokking")
def get_data(info:model.data):
    db=connect_to_mysql()
    success =utilities.decode_jwt_token(info.token)
    print(success)
    if success == False:
        raise HTTPException(status_code=400, detail="token is invalid ")
    respoone=utilities.get_all_booking(success["user_id"],db)
    return {"info":"done"}



    
