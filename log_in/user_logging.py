from fastapi import  HTTPException, APIRouter
from fastapi.responses import JSONResponse
from log_in import login_model
from log_in import logging_utilities as kamnu
import mysql.connector
from log_in import owner_logging_utilities


app = APIRouter()

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

@app.post("/add_user/")
def add_user(user_details: login_model.UserDetails):
    db = connect_to_mysql()
    success, message = kamnu.add_user_to_db(user_details, db)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    token=kamnu.create_jwt_token_user(db,user_details.email_id,)
    return JSONResponse(content={"message": message,
                                 "token":token})

@app.post("/logging_in")
def logging_in(user_info:login_model.user_logging_detials):
    db = connect_to_mysql()
    success, message = kamnu.login(user_info.email_id,user_info.password, db)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    token=kamnu.create_jwt_token_user(db,user_info.email_id)
    return JSONResponse(content={"message": message,
                                 "token":token})

@app.post("/add_owner")
def add_owner(owner_info:login_model.ownerdetails):
    db = connect_to_mysql()
    success, message = owner_logging_utilities.add_owner_to_db(owner_info, db)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    token=kamnu.create_jwt_token_user(db,owner_info.email_id,)
    return JSONResponse(content={"message": message,
                                 "token":token})

@app.post("/owner_login")
def logging_in(owner_info:login_model.owner_logging_detials):
    db = connect_to_mysql()
    success, message = owner_logging_utilities.login(owner_info.email_id,owner_info.password, db)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    token=kamnu.create_jwt_token_user(db,owner_info.email_id)
    return JSONResponse(content={"message": message,
                                 "token":token})






