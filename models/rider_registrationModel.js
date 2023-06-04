const mongoose = require ('mongoose')

const rider_registrationSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a valid name"]
		},
		address: {
			type: String,
			required: [true, "Please enter a valid address"]
		},
		age: {
			type: Number,
			required: true,
			default: 0
		},
		image: {
			type: String,
			required: false
		}
	},
	{
		timestamps: true
	}
)

const Rider_Registration = mongoose.model('Rider_Registration', rider_registrationSchema);

module.exports = Rider_Registration;