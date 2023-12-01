from your_flask_app import db  # Import Flask SQLAlchemy instance
import json

def load_data_from_json(json_file_path):
    with open(json_file_path, 'r') as file:
        data = json.load(file)

        for item_data in data:
            # Create an instance of your SQLAlchemy model
            new_item = Item(
                attribute1 = item_data['attribute1'],
                attribute2 = item_data['attribute2'],
                # Add other attributes based on your model
            )

            # Add the instance to the session
            db.session.add(new_item)

        # Commit the changes to the database
        db.session.commit()

# run the function
json_file_path = 'path to json file'
load_data_from_json(json_file_path)