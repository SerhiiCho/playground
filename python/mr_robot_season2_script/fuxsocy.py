from time import sleep

def loading():
    sleep(0.5)
    print("\r######                           (33%)", end="")
    sleep(0.5)
    print("\r############                     (66%)", end="")
    sleep(0.5)
    print("\r##################               (99%)", end="")
    sleep(0.5)
    print("\r########################         COMPLETE")
    sleep(1)

print("Executing FuxSocy")
print("Loading Source of Entropy")
loading()

print("\r\nGenerating Keys")
loading()

print("\n\nLocating target files.")
print("beginning crypto operations")
print("Encrypting /bin")
sleep(3)
print("Encrypting /dev")
sleep(2)
print("Encrypting /etc")
sleep(3)
print("Encrypting /home")
sleep(2)
