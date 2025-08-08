import { useRef } from "react";

function Modal({ setIsOpen }) {
	const dialogRef = useRef();

	function closeDialog() {
		dialogRef.current.close();
		setIsOpen(false);
	}

	return (
		<>
			<div className="bg-black opacity-50 fixed inset-0 z-0"></div>
			<dialog open ref={dialogRef} className="m-auto">
				<p>Your account have been successfuly registerd</p>
				<button onClick={closeDialog}>Confirm</button>
			</dialog>
		</>
	);
}

export default Modal;