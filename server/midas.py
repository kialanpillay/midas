from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
# from sklearn.externals import joblib

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Midas Sentiment Analysis")

name_space = app.namespace('sentiment', description='Sentiment Analysis APIs')

model = app.model('Sentiment Params', 
				  {'textField1': fields.String(required = False, 
				  							   description="Text Field 1", 
    					  				 	   help="Text Field 1 cannot be blank"),
				  'textField2': fields.String(required = False, 
				  							   description="Text Field 2", 
    					  				 	   help="Text Field 2 cannot be blank"),
				  'select1': fields.Integer(required = False, 
				  							description="Select 1", 
    					  				 	help="Select 1 cannot be blank"),
				  'select2': fields.Integer(required = False, 
				  							description="Select 2", 
    					  				 	help="Select 2 cannot be blank"),
				  'select3': fields.Integer(required = False, 
				  							description="Select 3", 
    					  				 	help="Select 3 cannot be blank")})

###################
# Sentiment Analysis




###################

@name_space.route("/sentiment")
class Sentiment(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			# formData = request.json
			data = "Test"
			# prediction = classifier.predict(data)
			response = jsonify({
				"statusCode": 200,
				"status": "Successful",
				"result": "Analysis: " + str(data)
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Error",
				"error": str(error)
			})

if __name__ == '__main__':
    app.run(debug=True)