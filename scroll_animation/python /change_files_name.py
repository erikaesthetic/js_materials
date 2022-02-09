#!/usr/bin/python3
import os, re

path = '/Users/Erik/Desktop/test_threejs/test/'
files = os.listdir(path)
count = 0
files.sort(key=lambda f: int(re.sub('\D', '', f)))
print(files)
for i in files:
    ch_count = str(count).zfill(4) + '.jpeg'
    new_name = "scene_" + ch_count
    count = count + 1
    print(i, " -->", new_name)
    os.rename(path + i, path + new_name)