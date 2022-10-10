import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CardComponent extends Component {
	notify = (name) => {
		toast.success("You clicked the name: " + name, {
			position: toast.POSITION.BOTTOM_RIGHT,
			theme: "dark",

			//toast will be closed after 10 seconds
			autoClose: 1000,
		});
	};

	render() {
		// const { monsters } = this.props.monsters;
		const { id, name, email, phone } = this.props.monster;
		return (
			<div
				key={id}
				className="card-container text-center"
				onClick={() => {
					this.notify(name);
				}}
			>
				<img
					alt={`monster ${name}`}
					src={`https://robohash.org/${id}?size=180x180`}
				/>
				<h4 className="fw-bold mt-2">{name}</h4>
				<p>{email}</p>
				<p>{phone}</p>
			</div>
		);
	}
}

export default CardComponent;
