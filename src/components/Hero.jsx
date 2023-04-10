// function Hero() {
//   return (
//     <div
//       className="bg-cover bg-center h-screen bg-black"
//       style={{ backgroundImage: "url('/images/universal.jpeg')" }}
//     >
//       <div className="container mx-auto h-full flex items-center justify-center text-center">
//         <div className="text-white">
//           <h1 className="text-5xl font-bold">Welcome to Conv0</h1>
//           <p className="text-2xl mt-4">
//             Forget how you used to look for job and hire people
//           </p>
//           <div class="relative mt-8">
//             <input
//               type="email"
//               class="bg-opacity-25 bg-black  border-gray-500 rounded-l-3xl border-0 h-12 text-center"
//               placeholder="Email"
//               required
//             />
//             <button class="bg-pink-400 rounded-r-3xl border-1 h-12 ml-2">
//               For Demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

import { useRef } from "react";

// }
function Hero() {
  const emailRef = useRef("");
  const onDemoSubmit = () => {
    console.log(emailRef.current.value);
  };

  return (
    <section className="relative bg-cover bg-center h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      >
        <source src="/images/animated-bg.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto h-full flex items-center justify-center text-center relative">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Welcome to Conv0</h1>
          <p className="text-2xl mt-4">
            Forget how you used to look for job and hire people
          </p>
          <div class="relative mt-8">
            <input
              type="email"
              class="bg-opacity-25 bg-black border-gray-500 rounded-l-3xl border-0 h-12 text-center focus:border-transparent"
              placeholder="Email"
              ref={emailRef}
              required
            />

            <button
              onClick={() => {
                onDemoSubmit();
              }}
              class="bg-orange-400 text-black border-transparent rounded-r-3xl border h-12 ml-2 transition duration-150 ease-in-out shadow-[0_4px_9px_-4px_#ff9900] hover:bg-orange-500 hover:shadow-[0_8px_9px_-4px_rgba(255,153,0,0.3),0_4px_18px_0_rgba(255,153,0,0.2)] focus:bg-orange-500 focus:shadow-[0_8px_9px_-4px_rgba(255,153,0,0.3),0_4px_18px_0_rgba(255,153,0,0.2)] focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-[0_8px_9px_-4px_rgba(255,153,0,0.3),0_4px_18px_0_rgba(255,153,0,0.2)]"
            >
              For Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
