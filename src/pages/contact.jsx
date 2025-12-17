const Contact = () => {
  return (
    <div>
      <h1 className="text-xl mt-6">Contact Us</h1>
      <div className="mx-8 space-y-4 mt-6 text-left">
        <p>
          We'd love to hear from you! Whether you have questions about our
          platform, need assistance, or want to provide feedback, our team is
          here to help.
        </p>
        <p>
          You can reach us via email at{" "}
          <a href="mailto: x" className="text-blue-500 underline">bjjappemail.com</a>
          or by phone at (123) 456-7890.
        </p>
        </div>
    </div>
  )
}

export default Contact