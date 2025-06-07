from main import greet, add

def test_greet():
    assert greet("Ali") == "Bonjour, Ali ! Bienvenue dans notre application."

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0


