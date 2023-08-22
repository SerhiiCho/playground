from collections import deque

# Create a new emmty queue object that will function as queue
queue = deque()

# Add some elements to the queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

# Remove the element from the queue
num = queue.popleft()

print(num, queue)
