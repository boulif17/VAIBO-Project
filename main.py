from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="VAIBO API")

# Middleware CORS (autoriser le frontend à communiquer avec l'API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # À adapter en production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Bienvenue dans l'API VAIBO"}
