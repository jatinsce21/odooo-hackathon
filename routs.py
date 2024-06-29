from fastapi import FastAPI
from log_in import user_logging
from property_card import inside
from user_home import home
from user_profile import profile

app = FastAPI()

app.include_router(user_logging.app)
app.include_router(inside.app)
app.include_router(home.app)
app.include_router(profile.app)
