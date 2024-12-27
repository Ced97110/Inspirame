'use client'


import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from "react";

const ContactForm = () => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual"
  );

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); 

  const Router = useRouter();



  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    University: '',
    Role: '',
    email: '',
    message: '',
    companyName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_TEMPLATE_EMAIL,  // Replace with your EmailJS template ID
      formData,
      '01YcvrrpqvRu5lPdO'  // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('Thank You!', response.status, response.text);
      setLoading(false); // Stop loading
      setSubmitted(true);
      
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message.');
      setLoading(false);
    });
  };
  
  return (
    <div className="bg-slate-100 relative z-20 py-24 pb-48">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
      {!submitted ? (
          <Form
            selected={selected}
            setSelected={setSelected}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            loading={loading} // Pass loading state to the form
          />
        ) : (
          <ThankYouMessage /> // Show Thank You message after submission
        )}
        <Images selected={selected} />
      </div>
    </div>
  );
};

const Form = ({
  selected,
  setSelected,
  handleSubmit,
  handleChange,
  formData,
  loading
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
  handleSubmit: (e: any) => void;
  handleChange: (e: any) => void;
  formData: any;
  loading: boolean;
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 w-full transition-colors duration-[750ms] bg-zinc-900/30  border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact Us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Name</p>
        <input
          type="text"
          name="Firstname"
          value={formData.Firstname}
          placeholder="Your name"
          className={`bg-zinc-900/30 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="mb-6">
        <p className="text-2xl mb-2">Last Name</p>
        <input
          type="text"
          name="Lastname" 
          value={formData.Lastname}
          placeholder="Last name"
          className={`bg-zinc-900/30 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-6">
        <p className="text-2xl mb-2">Email</p>
        <input
          type="text"
          name="email" // Ensure the name matches the key in formData
          value={formData.email}
          placeholder="Email"
          className={`bg-zinc-900/30 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">I represent</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">by the name of</p>
            <input
              type="text"
              name="Role" 
              value={formData.Role}
              placeholder="Role"
              className={`bg-zinc-900/30 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
              onChange={(e) => handleChange(e)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Questions/Inquiries</p>
        <textarea
          placeholder="Ask us anything :-)"
          name="message"
          value={formData.message}
          className={`bg-zinc-900/30 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`bg-white text-black transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <span className="ml-2">Sending...</span>
          </div>
        ) : (
          "Submit"
        )}
      </motion.button>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-blue-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission
          setSelected("individual");
        }}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-indigo-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission
          setSelected("company");
        }}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: "company" | "individual" }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[200px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/contact-inpirame-jaune)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/contact-inspirame-bleu)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

const ThankYouMessage = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Thank you!</h2>
      <p className="text-xl mt-4">Your message has been sent. We will get back to you soon.</p>
    </div>
  </div>
);

export default ContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };