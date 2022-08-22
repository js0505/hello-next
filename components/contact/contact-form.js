import { useRef, useState } from "react"
import Notification from "../ui/notification"
import classes from "./contact-form.module.css"

async function sendContactData(contactDetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	})

	const data = response.json()
	if (!response.ok) {
		throw new Error(data.message || "Get Error")
	}
}

function ContactForm() {
	const emailRef = useRef()
	const nameRef = useRef()
	const messageRef = useRef()

	const [reqStatus, setReqStatus] = useState() // pending, success, error
	const [reqStatusErr, setReqStatusErr] = useState()

	const onSubmitHandler = async (e) => {
		e.preventDefault()

		const formBody = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			message: messageRef.current.value,
		}

		setReqStatus("pending")
		try {
			await sendContactData(formBody)
			setReqStatus("success")

			emailRef.current.value = ""
			nameRef.current.value = ""
			messageRef.current.value = ""
		} catch (e) {
			setReqStatusErr(e.message)
			setReqStatus("error")
		}
	}

	let notification

	if (reqStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending Message..",
			message: "Message send",
		}
	}
	if (reqStatus === "success") {
		notification = {
			status: "success",
			title: "Message Saved",
			message: "Message save",
		}
	}
	if (reqStatus === "error") {
		notification = {
			status: "error",
			title: "On Error",
			message: reqStatusErr,
		}
	}

	return (
		<section className={classes.contact}>
			<h1>How Can I Help You?</h1>
			<form className={classes.form} onSubmit={onSubmitHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input type="email" id="email" required ref={emailRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" required ref={nameRef} />
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Message</label>
					<textarea id="message" rows={5} ref={messageRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button type="submit">Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					message={notification.message}
					title={notification.title}
				/>
			)}
		</section>
	)
}

export default ContactForm
