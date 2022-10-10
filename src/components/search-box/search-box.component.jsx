import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SearchBox extends Component {
	// state = {};
	notifyFunction = () => {
		toast.success("You clicked the button", {
			position: toast.POSITION.BOTTOM_RIGHT,
			theme: "light",

			//toast will be closed after 10 seconds
			autoClose: 1000,
		});
	};
	render() {
		const { onChangeHandler } = this.props;
		return (
			<div className="input-group input-group-sm mb-3">
				<input
					type="search"
					placeholder="Search monsters. . ."
					className="form-control"
					onChange={onChangeHandler}
				/>
				<button
					className="btn btn-primary btn-sm"
					onClick={this.notifyFunction}
				>
					Run toast
				</button>
				<ToastContainer />
			</div>
		);
	}
}

export default SearchBox;
