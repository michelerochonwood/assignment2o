const MyAccordion = () => {
  const tetratech = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/tetratech.png';
  const wsp = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/wsp.png';
  const roqlogo3 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/roqlogo3.png';
  const wcslogo2 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/wcslogo2.png';
  const globallogo = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/globallogo.png';
  const stantec = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/stantec.png';
  const uofm = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/UM-logo.png';
  const apmp = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/apmp.png';
  const toronto = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/toronto2.png';
  const editors = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/editors.png';
  const georgian = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/georgian.png';

  
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {/* First Accordion Item with Three Columns */}
      <div className="accordion-item">
      <h2 className="accordion-header">
    <button
      className="accordion-button collapsed centered-accordion-button"
      style={{ backgroundColor: 'rgb(63, 43, 79)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseOne"
      aria-expanded="false"
      aria-controls="flush-collapseOne"
    >
      <i className="bi bi-arrow-down-circle-fill text-white"></i>
      <span className="mx-4">EDUCATION</span>
      <i className="bi bi-arrow-down-circle-fill text-white"></i>
    </button>
  </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className="row g-1">
              {/* First Column */}
              <div className="col-2 mx-auto text-center">
                <div className="rounded-columnlight">
                  <img
                    src={uofm}
                    alt="uofm Logo"
                    width="150px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '15px' }}
                  />
                  <p className="plainAccordionDark">Bachelor of Arts, English and Business</p>
                  <p className="plainAccordionDark">2009</p>
                </div>
              </div>

              {/* Second Column */}
              <div className="col-2  mx-auto text-center">
                <div className="rounded-columnlight">
                  <img
                    src={apmp}
                    alt="apmp Logo"
                    width="150px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '10px' }}
                  />
                  <p className="plainAccordionDark">Association of Proposal Management Professionals, Practitioner</p>
                  <p className="plainAccordionDark">2007</p>
                </div>
              </div>

              {/* Third Column */}
              <div className="col-2 mx-auto text-center">
                <div className="rounded-columnlight">
                  <img
                    src={toronto}
                    alt="toronto Logo"
                    width="175px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '20px', paddingBottom: '27px' }}
                  />
                  <p className="plainAccordionDark">Certificate in Creative Writing</p>
                  <p className="plainAccordionDark">In Progress</p>
                </div>
              </div>
            {/* Fourth Column */}
            <div className="col-2 mx-auto text-center">
                <div className="rounded-columnlight">
                  <img
                    src={georgian}
                    alt="georgian Logo"
                    width="150px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '25px', paddingBottom: '30px' }}
                  />
                  <p className="plainAccordionDark">Diploma, Interactive Media Design-Web</p>
                  <p className="plainAccordionDark">2024</p>
                </div>
              </div>
           {/* Fifth Column */}
            <div className="col-2 mx-auto text-center">
                <div className="rounded-columnlight">
                  <img
                    src={editors}
                    alt="editors Logo"
                    width="150px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '2px', paddingBottom: '12px' }}
                  />
                  <p className="plainAccordionDark">Structural, Stylistic, Copyediting</p>
                  <p className="plainAccordionDark">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Accordion Item with Six Columns */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={{ backgroundColor: 'rgb(63, 43, 79)', color: 'white' }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
      <i className="bi bi-arrow-down-circle-fill text-white"></i>
      <span className="mx-4">SUMMARIZED WORK HISTORY</span>
      <i className="bi bi-arrow-down-circle-fill text-white"></i>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className="row g-2">
              {/* First Column */}
              <div className="col-2">
                <div className="rounded-columndark">
                  
                  <img
                    src={tetratech}
                    alt="tetratech Logo"
                    width="100px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '20px', paddingBottom: '30px' }}
                  />
                  <p className="plainAccordion">2007 to 2009  <i className="bi bi-arrow-right-circle-fill text-white"></i></p>
                  <p className="plainAccordion">Business Development Manager</p>
                </div>
              </div>

              {/* Additional Columns */}
              <div className="col-2">
                <div className="rounded-columndark">
                  
                  <img
                    src={wsp}
                    alt="wsp Logo"
                    width="75px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '20px', paddingBottom: '20px' }}
                  />
                  <p className="plainAccordion">2009 to 2011  <i className="bi bi-arrow-right-circle-fill text-white"></i></p>
                  <p className="plainAccordion">Business Development Manager</p>
                  {/* Content for the second column */}
                </div>
              </div>
              <div className="col-2">
                <div className="rounded-columndark">
                  
                  <img
                    src={roqlogo3}
                    alt="roq Logo"
                    width="100px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '8px', paddingBottom: '18px' }}
                  />
                  <p className="plainAccordion">2011 to 2014  <i className="bi bi-arrow-right-circle-fill text-white"></i></p>
                  <p className="plainAccordion">Owner Operator</p>
                  {/* Content for the third column */}
                </div>
              </div>
              <div className="col-2">
                <div className="rounded-columndark">
                  
                  <img
                    src={globallogo}
                    alt="global Logo"
                    width="50px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '20px' }}
                  />
                  <p className="plainAccordion">2014 to 2016  <i className="bi bi-arrow-right-circle-fill text-white"></i></p>
                  <p className="plainAccordion">Senior Account Manager</p>
                  {/* Content for the fourth column */}
                </div>
              </div>
              <div className="col-2">
                <div className="rounded-columndark">
                  
                  <img
                    src={stantec}
                    alt="stantec Logo"
                    width="100px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '12px', paddingBottom: '30px' }}
                  />
                  <p className="plainAccordion">2016 to 2018  <i className="bi bi-arrow-right-circle-fill text-white"></i></p>
                  <p className="plainAccordion">Senior Marketing Specialist</p>
                  {/* Content for the fifth column */}
                </div>
              </div>
              <div className="col-2">
                <div className="rounded-columndark">
                  
                  <img
                    src={wcslogo2}
                    alt="wcs Logo"
                    width="75px"
                    style={{ margin: 'auto', display: 'block', paddingTop: '8px', paddingBottom: '20px' }}
                  />
                  <p className="plainAccordion">2018 to 2022 <i className="bi bi-arrow-right-circle-fill text-white"></i></p>
                  <p className="plainAccordion">Owner Operator</p>
                  {/* Content for the sixth column */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Accordion Item */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={{ backgroundColor: 'rgb(63, 43, 79)', color: 'white' }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            {/* Content for the third accordion item */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccordion;



