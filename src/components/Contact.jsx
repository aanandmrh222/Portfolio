"use client"

import { useState, useRef, useEffect } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaCheckCircle } from "react-icons/fa"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef(null)

  useEffect(() => {
    // Replace this with your Public Key from EmailJS Account > API Keys
    emailjs.init("public_key_goes_here")
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await emailjs.sendForm(
        // Replace with your Gmail Service ID from Email Services
        'service_id_goes_here',
        // Replace with your Template ID from Email Templates
        'template_id_goes_here',
        formRef.current
      )

      // Reset form and show success message
      setFormData({ user_name: "", user_email: "", message: "" })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      console.error("Failed to send email:", err)
      setError("Failed to send email. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="Contact" className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-24">
      <div className="max-w-screen-lg mx-auto p-6 md:p-8 flex flex-col justify-center w-full h-full">
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pb-2">Contact</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Contact Information */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Let's Talk</h2>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-400">Email</h3>
                  <p className="text-gray-400 mb-1">aanandmrh222@gmail.com</p>
                  <a href="mailto:aanandmrh222@gmail.com" className="text-blue-400 hover:text-blue-300">
                    Send an email
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-400">Phone</h3>
                  <p className="text-gray-400 mb-1">+91629955XXXX</p>
                  <a href="tel:+919876543210" className="text-blue-400 hover:text-blue-300">
                    Call me
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-400">Location</h3>
                  <p className="text-gray-400">Jalandhar, Punjab</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/aanandkumar4980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full hover:scale-105 duration-300"
                >
                  <FaFacebook className="text-white text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/__aanand__kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full hover:scale-105 duration-300"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a
                  href="https://x.com/aanand5440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full hover:scale-105 duration-300"
                >
                  <FaTwitter className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-8 shadow-md shadow-gray-600">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Submit the form below to get in touch with me</h2>

            {success && (
              <div className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-md flex items-center">
                <FaCheckCircle className="mr-2" />
                Your message has been sent successfully!
              </div>
            )}

            {error && <div className="mb-6 bg-red-800 text-white p-4 rounded-md">{error}</div>}

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col w-full">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500 mb-6"
                required
              />
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500 mb-6"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="8"
                className="p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500 mb-6 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-md hover:scale-105 duration-300 font-bold text-lg w-full flex justify-center items-center ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

