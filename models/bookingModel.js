const mongoose = require ('mongoose')

const bookingSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a valid name"]
		},
		address: {
			type: String,
			required: [true, "Please enter a valid address"]
		},
		car_type: {
			type: String,
			required: [true, "Please enter a valid address"]
		},
		pick_up_location: {
			type: String,
			required: [true, "Please enter a valid address"]
		}
	},
	{
		timestamps: true
	}
)

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;