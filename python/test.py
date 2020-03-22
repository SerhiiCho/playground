from Animal import Animal
from Car import Car

dog = Animal('Chiksa')
car = Car('red', 2000)

dog_sound = dog.get_sound()
car_sound = car.get_sound()

print(dog_sound, car_sound)
