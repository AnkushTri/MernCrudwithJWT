// import { Analytics } from "./Analytics";
import { NavLink } from "react-router-dom";
import Analytics from "./Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Ankush World</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima suscipit dignissimos voluptatum vero iure quasi blanditiis ex eligendi tenetur nulla beatae aut obcaecati, quis rerum velit nam accusantium, enim ipsam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod eius ipsam tempore beatae aspernatur pariatur commodi quos rerum. Perspiciatis sed laudantium illum magnam hic ratione mollitia error, repellendus nihil?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, perspiciatis? Aut, eius eos illo ullam placeat cumque sit. Aliquam sapiente animi et laborum rerum ex, porro esse iure provident asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus aut quo totam, assumenda, delectus minima saepe impedit corrupti, incidunt quis adipisci officia! Rem sed cum, excepturi delectus dicta harum aliquam.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="egister_btn btn"> Connect Now</button>
                </NavLink >
                <NavLink to="/service">
                  <button className="egister_btnn btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}
    <Analytics/>
      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="470"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;