import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "VAIBO AI App"
    VERSION: str = "1.0.0"

settings = Settings()
