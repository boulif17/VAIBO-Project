from fastapi import APIRouter
from app.services.ai_engine import generate_ai_response

router = APIRouter()

@router.get("/ai")
def ai_route(prompt: str):
    response = generate_ai_response(prompt)
    return {"response": response}
