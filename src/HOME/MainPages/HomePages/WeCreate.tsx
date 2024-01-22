export default function WeCreate() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-4 wow slideInLeft">
              <img
                src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/about.jpg"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                className="w-100 img-thumbnail mb-3"
              />
            </div>
            <div className="col-md-7 col-lg-8 wow fadeInLeft" data-wow-duration="1.5s">
              <h6 className="section-subtitle mb-0">We Create</h6>
              <h6 className="section-title mb-3">Awesome Work</h6>
              <p>
                We specialize in AI product development for automation, spanning
                Virtual Reality (VR) and Augmented Reality (AR) solutions. Our
                VR applications, enhanced by AI, cater to diverse sectors such
                as gaming, education, and film.
              </p>
              <p>
                Leveraging open-world AR applications through mobile apps, we
                offer immersive experiences. In the realm of pharmacy, AI drives
                automation, streamlining processes.{" "}
              </p>
              <p>
                Moreover, our expertise extends to automating digital marketing
                procedures. With a focus on innovation, efficiency, and user
                experience, we're committed to revolutionizing industries
                through the synergy of AI, VR, AR, and automation technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container w-[90%] text-center shadow-md">
        <div className="container w-[70%]">
          <h6 className="section-subtitle wow fadeInLeft" data-wow-duration="1.5s">We See</h6>
          <h6 className="section-title mb-6 wow fadeInLeft" data-wow-duration="1.5s">What Other Don't See.</h6>
          <div className="widget mb-4">
            <div className="widget-item wow fadeInDown" data-wow-delay=".3s">
              <i className="ti-notepad"></i>
              <h4>Planning</h4>
            </div>
            <div className="widget-item wow fadeInDown" data-wow-delay=".3s">
              <i className="ti-layout"></i>
              <h4>Mockup</h4>
            </div>
            <div className="widget-item wow fadeInDown" data-wow-delay=".3s">
              <i className="ti-filter"></i>
              <h4>Develope</h4>
            </div>
            <div className="widget-item wow fadeInDown" data-wow-delay=".3s">
              <i className="ti-thumb-up"></i>
              <h4>Provide</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
