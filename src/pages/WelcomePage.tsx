const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center relative">
        <h1
          className="text-8xl font-black tracking-widest text-red-500 relative"
          style={{
            fontFamily: "'Orbitron', 'Bebas Neue', 'Impact', sans-serif",
            textShadow: `
              0 0 10px rgba(239, 68, 68, 0.6),
              0 0 20px rgba(239, 68, 68, 0.5),
              0 0 40px rgba(239, 68, 68, 0.3)
            `,
          }}
        >
          Movie-World
        </h1>
        <p
          className="mt-6 text-xl text-gray-400 tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Explore the world of cinema
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
