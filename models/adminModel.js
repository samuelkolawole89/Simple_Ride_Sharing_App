const mongoose = require ('mongoose')

const adminSchema = mongoose.Schema(
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
			required: [true, "Please enter a valid car_type"]
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

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;