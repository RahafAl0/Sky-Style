from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np

# Load the saved model (make sure the model file is in the same folder as this script)
model = tf.keras.models.load_model('fashion_mnist_model.h5')

# Initialize Flask app
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Expecting a JSON body with 'input'
    input_data = np.array(data['input'])  # Convert input to NumPy array
    input_data = np.expand_dims(input_data, 0)  # Add batch dimension
    predictions = model.predict(input_data)  # Get model predictions
    predicted_class = np.argmax(predictions, axis=1)[0]
    return jsonify({'predicted_class': int(predicted_class)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
