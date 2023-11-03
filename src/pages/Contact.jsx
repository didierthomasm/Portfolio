import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const isEmailValid = (email) => {
    // Simple regex for email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const getErrorMessages = (field) => {
    if (touched[field] && !formData[field]) {
      return <span className="text-red-500">This field is required</span>;
    } else if (field === 'email' && touched.email && !isEmailValid(formData.email)) {
      return <span className="text-red-500">Please enter a valid email address</span>;
    }
    return null;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData(
      {
        name: '',
        email: '',
        message: ''
      }
    )
  };

  const helloYou = () => {
    if (formData.name) {
      return <div className="text-center my-2">{`Hello! ${formData.name}`}</div>;
    }
    return null;
  };

  return (
    <main className="flex flex-col items-center justify-center pt-12 min-h-screen bg-gray-100 mt-6">
      <div className="w-full max-w-xl p-6 m-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Contact Me</h2>
        {helloYou()}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              required
            />
            {getErrorMessages('name')}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              required
            />
            {getErrorMessages('email')}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              required
            />
            {getErrorMessages('message')}
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}