import os
import json

directory_path = './'

# Get all files in the directory
files = [f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f))]

# Create a dictionary with file names
file_dict = {'files': files}

# Save to JSON file
json_file_path = './pict.json'
with open(json_file_path, 'w') as json_file:
    json.dump(file_dict, json_file)

print(f'File names saved to {json_file_path}')
