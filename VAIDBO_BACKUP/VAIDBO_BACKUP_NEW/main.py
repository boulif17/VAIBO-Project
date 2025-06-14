from fastapi import FastAPI

app = FastAPI()

def greet(name: str) -> str:
    return f"Bonjour, {name} ! Bienvenue dans notre application."

@app.get("/")
async def root():
    return {"message": "Bienvenue dans VAIDBO!"}

@app.get("/greet/{name}")
async def greet_user(name: str):
    message = greet(name)
    return {"message": message}

@app.get("/add")
async def add_numbers(a: int, b: int):
    result = a + b
    return {"result": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
