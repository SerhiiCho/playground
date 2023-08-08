
class Spaceship():
    def __init__(self):
        self.callSign = ''
        self._shieldStrength = 100

    def fireMissile(self):
        return "Pew!"

    def reduceShield(self, amount):
        self.shieldStrength -= amount



