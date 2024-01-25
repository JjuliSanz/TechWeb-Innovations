import React, { Suspense, useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import useAlert from "../hooks/useAlert";
import { ContactBot } from "../models";
import { Alert, Footer, Loader } from "../components";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Base");
  const formRef = useRef(null);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("Love");

    emailJs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form,
          name,
          to_name: "Julian",
          from_email: form.email,
          to_email: "jjulisanz@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("Base");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("Error");
        console.log(error);
        showAlert({
          show: true,
          text: "There was a error sending the message",
          type: "danger",
        });
      });
  };
  const handleFocus = () => setCurrentAnimation("Computation");
  const handleBlur = () => setCurrentAnimation("Base");

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] text-rose">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
            Get in Touch
          </h1>

          <form
            ref={formRef}
            className="w-full flex flex-col gap-7 mt-14 "
            onSubmit={handleSubmit}
          >
            <label htmlFor="" className="font-semibold text-rose">
              Name
              <input
                type="text"
                name="name"
                className="bg-[#14092e] border border-rose text-slate-300 text-sm rounded-lg focus:ring-rose focus:border-rose block w-full p-2.5 mt-2.5 font-normal shadow-card"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="" className="text-rose font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="bg-[#14092e] border border-rose text-slate-300 text-sm rounded-lg focus:ring-rose focus:border-rose block w-full p-2.5 mt-2.5 font-normal shadow-card"
                placeholder="yourmail@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="" className="text-rose font-semibold">
              Your Message
              <textarea
                name="email"
                rows={4}
                className="block p-2.5 w-full text-sm text-slate-300 bg-[#14092e] rounded-lg border border-rose focus:ring-rose focus:border-rose mt-2.5 font-normal shadow-card"
                placeholder="Let me know how We can help you!"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              className="text-slate-100 bg-rose focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              type="submit"
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-auto">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={1} color="#E205FF" />
            <Suspense fallback={<Loader />}>
              <OrbitControls />
              <ContactBot
                scale={8}
                position={[0, -3.5, 0]}
                rotation={[0, 0, 0]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
            <EffectComposer>
              <Bloom
                intensity={0.3}
                luminanceThreshold={0.3}
                luminanceSmoothing={0.09}
                height={300}
              />
            </EffectComposer>
          </Canvas>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
