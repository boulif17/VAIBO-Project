from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="VAIBO AI App", version="1.0.0")

app.include_router(router)

@app.get("/")
def root():
    return {"message": "Welcome to VAIBO!"}
