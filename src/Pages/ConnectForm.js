import React from "react";

const ConnectForm = () => {
  return (
    <div className="form-container">
      <div className="left-section">
        <h3>LET'S CONNECT</h3>
        <p>Contact our support team or make an appointment with our experts.</p>
      </div>
      <div className="right-section">
        <form className="contact-form">
          <label>
            Full Name*
            <input type="text" name="fullName" required />
          </label>
          <label>
            Email*
            <input type="email" name="email" required />
          </label>
          <label>
            Contact Number*
            <input type="text" name="contactNumber" required />
          </label>
          <label>
            Subject*
            <input type="text" name="subject" required />
          </label>
          <label>
            Message*
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConnectForm;
