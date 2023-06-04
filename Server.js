//console.log("Hello WOrld");

const express = require('express')
 const mongoose = require('mongoose')
 const Rider_Registration = require('./models/rider_registrationModel')
 const Booking = require('./models/bookingModel')
 const Admin = require('./models/adminModel')
 const app = express()

 //we need to specify middleware for us to use json to add
 //via insomnia
 app.use(express.json())

 //to also use urlencoded via insomnia
 app.use(express.urlencoded({extended: false})) 






 app.post('/rider_registrations', async(req, res) => {
	//console.log(req.body);
	//res.send(req.body)

	//data gotten from the client need to be saved to the database
	try {
		const rider_registration = await Rider_Registration.create(req.body)
		res.status(200).json(rider_registration);

	} catch (error) {
		console.log(error.message);
		res.status(500).json({message: error.message})
	}
})

//get all products
 app.get('/rider_registrations', async(req, res) => {
	 try {
		const rider_registrations = await Rider_Registration.find({});
		res.status(200).json(rider_registrations);

	} catch (error) {
		//console.log(error.message);
		res.status(500).json({message: error.message})
	}
 })

 //get a single product from id or using id
 app.get('/rider_registrations/:id', async(req, res) => {
	 try {
		const {id} = req.params;
		const rider_registration = await Rider_Registration.findById(id);
		res.status(200).json(rider_registration);

	} catch (error) {
		//console.log(error.message);
		res.status(500).json({message: error.message})
	}
 })





 //Post Bookings
 app.post('/bookings', async(req, res) => {
	//console.log(req.body);
	//res.send(req.body)

	//data gotten from the client need to be saved to the database
	try {
		const booking = await Booking.create(req.body)
		res.status(200).json(booking);

	} catch (error) {
		console.log(error.message);
		res.status(500).json({message: error.message})
	}
})

//get all bookings
 app.get('/bookings', async(req, res) => {
	 try {
		const bookings = await Booking.find({});
		res.status(200).json(bookings);

	} catch (error) {
		//console.log(error.message);
		res.status(500).json({message: error.message})
	}
 })

 //get a single booking from id or using id
 app.get('/bookings/:id', async(req, res) => {
	 try {
		const {id} = req.params;
		const booking = await Booking.findById(id);
		res.status(200).json(booking);

	} catch (error) {
		//console.log(error.message);
		res.status(500).json({message: error.message})
	}
 })


 //Post By Admin
 app.post('/byadmins', async(req, res) => {
	//console.log(req.body);
	//res.send(req.body)

	//data gotten from the client need to be saved to the database
	try {
		const admin = await Admin.create(req.body)
		res.status(200).json(admin);

	} catch (error) {
		console.log(error.message);
		res.status(500).json({message: error.message})
	}
})

//get all bookings
 app.get('/admin_registrations', async(req, res) => {
	 try {
		const admin_registrations = await Admin.find({});
		res.status(200).json(admin_registrations);

	} catch (error) {
		//console.log(error.message);
		res.status(500).json({message: error.message})
	}
 })

 //get a single booking from id or using id
 app.get('/admin_registrations/:id', async(req, res) => {
	 try {
		const {id} = req.params;
		const admin_registration = await Admin.findById(id);
		res.status(200).json(admin_registration);

	} catch (error) {
		//console.log(error.message);
		res.status(500).json({message: error.message})
	}
 })




  //the connection string to connect to mongodb database
 //remember to put connection name after "mongodb.net/"
 //e.g our connection name is "Node-API"
 mongoose.
 connect('mongodb+srv://admin:administrator@cluster0.o0mfdno.mongodb.net/Ride-Sharing-API?retryWrites=true&w=majority')
 .then(()=> {
	 console.log('connected to MongoDB')
	 app.listen(7000, ()=> {
		console.log("Ride Sharing API app is running on port 7000")
	 });
	 
 }).catch((error)=> {
	 console.log(error)
 })