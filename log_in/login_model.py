from pydantic import BaseModel, EmailStr, constr

class UserDetails(BaseModel):
    first_name: str
    last_name: str
    mobile_number: str
    email_id: str
    password: str

class user_logging_detials(BaseModel):
    email_id:str
    password:str

class ownerdetails(BaseModel):
    first_name: str
    last_name: str
    mobile_number: str
    email_id: str
    password: str


class owner_logging_detials(BaseModel):
    email_id:str
    password:str

