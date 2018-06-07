import Feedback from "../models/feedback";


export const saveFeedback = (req, res) => {

	const {name, email, feedback, hire} = req.body;

	let feed = new Feedback({name, email, feedback, hire});

	feed.save(
		err => {
			if(err) {
				console.error("Error: ", err);
				res.status(500).json({error: "feedback couldn't be saved"});
			}
		}
	);




	
	res.status(200).json({ name, email, feedback, hire });

};
