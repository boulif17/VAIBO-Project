def greet(name: str) -> str:
    return f"Bonjour, {name} ! Bienvenue dans notre application."

def add(a: int, b: int) -> int:
    return a + b

def main():
    # Exemple de test manuel
    print(greet("VAIBO"))
    print(f"3 + 5 = {add(3, 5)}")

if __name__ == "__main__":
    main()
