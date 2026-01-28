function Contact() {
  return (
    <div className="mt-5  pt-5 ">
        <h5 className="text-center text-danger my-4"> 📍 Located Right Here 
        </h5>
      <div className="map-container ">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6745425249414!2d77.7609075!3d8.7224221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040de163e52551%3A0x1c5c59926b1cf203!2sSadakathullah%20Appa%20College!5e0!3m2!1sen!2sin!4v1738048967156!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
