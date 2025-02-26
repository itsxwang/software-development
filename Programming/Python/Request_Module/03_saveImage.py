import requests
import threading

def downloadImage():
    r = requests.get("https://picsum.photos/200/300")
    # Open the image and save it
    with open("random_image.jpg", "wb") as f:
        f.write(r.content)
   
def downloadSound():
    r = requests.get("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
    with open("random_sound.mp3", "wb") as f:
        f.write(r.content)

def main():
    image_thread = threading.Thread(target=downloadImage)
    sound_thread = threading.Thread(target=downloadSound)
    
    image_thread.start()
    sound_thread.start()
    
    image_thread.join()
    sound_thread.join()

if __name__ == "__main__":
    main()
