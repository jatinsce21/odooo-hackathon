from pydantic import BaseModel

class change_number(BaseModel):
    mobile_number:str
    token:str

class change_email(BaseModel):
    email_id:str
    token:str

class change_password(BaseModel):
    password:str
    token:str

class data(BaseModel):
    token:str