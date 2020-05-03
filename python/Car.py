from Animal import Animal

class Car:
    def __init__(self, color, speed):
        self.color = color
        self.speed = speed

    def get_car(self):
        return [
            f'The car with {self.color} color and speed of {self.speed}',
            f'I like {self.color} color',
        ]

    def get_sound(self):
        return 'ummmm ummmm ummmm'


class User:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name