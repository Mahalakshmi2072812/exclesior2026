import TypingAnimation from "./TypingAnimation";

function Hero() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#17005d" }}
      className="hero d-flex justify-content-center align-items-center container-fluid mt-3"
    >
      <div className="text-center hero-texts">
        <h5 className="text-danger mb-3">
          {" "}
          {/* 📌 Note: Registration for our excelsior is now closed. Thank you! ❤️ */}
        </h5>
        <img
          src="/collegeLogo.png"
          className="img-fluid"
          alt="Responsive image"
        />
        <p className="text-warning mt-3" style={{ fontSize: "10px" }}>
          An Autonomous Institution Reaccredited at an A++ grade with CGPA of
          3.56, *ISO 9001:2015 Certified*
        </p>
        <p className="fs-6 pt-2">
          Sadakathullah Appa College takes pride in organising a State Level
          Tech Symposium
        </p>
        <h1 className="display-3 ">
          <TypingAnimation
            staticText="E"
            animatedText="XCELSIOR-2026"
            speed={500}
          />
        </h1>
        <p className=" date">
          On 11<sup>th</sup> February 2026
        </p>
        <p className="fs-6">
          We welcome participants from B.Sc. (IT, CS), and BCA disciplines.
        </p>
      </div>
    </div>
  );
}

export default Hero;
