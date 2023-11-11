import cv2
from flask import Flask, render_template, Response, send_from_directory, request, jsonify
import os

video = cv2.VideoCapture(0)
app = Flask(__name__)

def video_stream():
    while True:
        ret, frame = video.read()
        if not ret:
            break
        else:
            ret, buffer = cv2.imencode('.jpeg', frame)
            frame = buffer.tobytes()
            yield (b' --frame\r\n' b'Content-type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('camera.html')

@app.route('/video_feed')
def video_feed():
    return Response(video_stream(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/check_if_valid', methods=['POST'])
def check_if_valid():
    data = request.json
     # Process the data as needed
    res = {"isTrue": True}
    status_code = 200
    return jsonify(res), status_code


# Add this route to handle favicon.ico request
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=False)
