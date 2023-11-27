import React from 'react';

const MyCarousel = () => {
    const blackswirl2 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/blackswirl2.png';
    const aecom = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/aecom.png';
    const eng1 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/eng1.png';
    const eng2 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/eng2.png';
    const eng3 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/eng3.png';
    const tetratech = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/tetratech.png';
    const wsp = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/wsp.png';
    const michele3 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/michele3.png';
    const roqlogo3 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/roqlogo3.png';
    const wcslogo2 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/wcslogo2.png';
    const globallogo = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/globallogo.png';
    const stantec = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/stantec.png';
  
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                    <img
                      src={michele3}
                      alt="michele3"
                      width="175px"
                      style={{ paddingBottom: '10px', paddingTop: '30px' }}
                    />
                  </div>
                </div>
                <div className="col">
                  <h5>BIOGRAPHY</h5>
                  <p className="emphasize">
                    Creative professional with experience in a variety of industries including engineering and architecture, municipalities, law firms, consulting, post-secondary institutions, and web and graphic design. Skilled in communications, writing, editing, graphic design, web design, and project management.
                  </p>
                </div>
                <div className="col">
                  <h5>HIGHLIGHTS</h5>
                  <p>
                    <b>THOUGHT LEADERSHIP; </b>Developed new processes for win strategy in engineering and architecture proposals, published in Proposal Management magazine and widely used by global engineering firms.
                  </p>
                  <p>
                    <b>PROJECT MANAGEMENT; </b>Developed various methods of streamlining project management.
                  </p>
                  <p>
                    <b>ENTREPRENEURIAL; </b>Skilled with piloting new methods, research.
                  </p>
                </div>
              </div>
              <p className="emphasize2">Click right for career timeline.</p>
            </div>
          </div>
  
          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                    <img
                      src={aecom}
                      alt="aecomlogo"
                      width="100px"
                      style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '10px' }}
                    />
                    <img
                      src={eng1}
                      alt="engineering1"
                      width="200px"
                      style={{ margin: 'auto', display: 'block', paddingTop: '20px', paddingBottom: '5px' }}
                    />
                    <h6>Global engineering and construction firm, Winnipeg.</h6>
                    <p className="small-bold">Jan 2004 to Dec 2006</p>
                    <p className="small-bold">ROLE: Proposal Coordinator</p>
                  </div>
                </div>
                <div className="col">
                  <h5>DUTIES</h5>
                  <p>Coordinating proposal development: negotiating and setting deadlines with proposal team, editing content, developing tables of contents, analyzing RFPs, developing final proposal mockup, implementing edits, managing Red Team activities.</p>
                  <p>Led marketing activities such as local brochures, awards submissions, displays, trade shows, marketing events, client appreciation events</p>
                  <p>Part of the team developing proposal management and writing training for technical personnel in regional offices</p>
                </div>
                <div className="col">
                  <h5>HIGHLIGHTS</h5>
                  <p><b>TRAINING; </b>Developed and delivered technical and sales writing training program and associated written materials, textbook.</p>
                  <p><b>WRITING; </b>Developed local newsletter, contributed articles to AECOM internal newsletter.</p>
                  <p><b>LEADERSHIP; </b>Led United Way campaigning in 2005 including staff activities aimed at driving donations and building team morale.</p>
                  <p className="emphasize3">2007-2009 <i className="bi bi-arrow-right-square-fill"></i></p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                    <img
                      src={tetratech}
                      alt="tetratechlogo"
                      width="175px"
                      style={{ paddingBottom: '10px' }}
                    />
                    <img
                      src={eng2}
                      alt="engineering2"
                      width="200px"
                      style={{ margin: 'auto', display: 'block', paddingTop: '10px', paddingBottom: '10px' }}
                    />
                    <h6>Global engineering and construction firm, Winnipeg.</h6>
                    <p className="small-bold">Jan 2007 to Mar 2009</p>
                    <p className="small-bold">ROLE: Business Development Manager</p>
                  </div>
                </div>
                <div className="col">
                  <h5>DUTIES</h5>
                  <p>Managing proposal development: negotiating and setting deadlines with proposal teams in three regions, editing content, developing tables of contents, analyzing RFPs, developing final proposal mockup, implementing edits, managing Red Team activities.</p>
                  <p>Led marketing activities such as local brochures, awards submissions, displays, trade shows, marketing events, client appreciation events</p>
                  <p>Led proposal process formalization, standardization across multi-disciplinary business units. </p>
                </div>
                <div className="col">
                  <h5>HIGHLIGHTS</h5>
                  <p><b>KNOWLEDGE MANAGEMENT: </b>Developed business development resource center containing templates, content repositories, matrices, graphics, project profiles, instructional booklets in pdf.</p>
                  <p><b>PROCESS DEVELOPMENT: </b>Introduced and led the use of repeatable proposal processes incorporating best practices based on content developed through the Association of Proposal Management Professionals and Shipley Consulting.</p>
                  <p className="emphasize3">2009-2011 <i className="bi bi-arrow-right-square-fill"></i></p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Slide 4 */}
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                    <img
                      src={wsp}
                      alt="wsplogo"
                      width="100px"
                      style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '5px' }}
                    />
                    <img
                      src={eng3}
                      alt="engineering3"
                      width="200px"
                      style={{ paddingBottom: '10px' }}
                    />
                    <h6>Global engineering and construction firm, Winnipeg.</h6>
                    <p className="small-bold">May 2009 to Jan 2011</p>
                    <p className="small-bold">ROLE: Business Development Manager</p>
                  </div>
                </div>
                <div className="col">
                  <h5>DUTIES</h5>
                  <p>Managing proposal development: negotiating and setting deadlines with proposal teams in three regions, editing content, developing tables of contents, analyzing RFPs, developing final proposal mockup, implementing edits, managing Red Team activities.</p>
                  <p>Led marketing activities such as local brochures, awards submissions, displays, trade shows, marketing events, client appreciation events</p>
                  <p>Led proposal process formalization, standardization across multi-disciplinary business units, Prairie region. </p>
                </div>
                <div className="col">
                  <h5>HIGHLIGHTS</h5>
                  <p><b>STANDARDIZATION: </b>Developed letter and large proposal templates for use in multiple offices, providing instruction and guidance in proposal best practices.</p>
                  <p><b>PROCESS DEVELOPMENT: </b>Introduced and led the use of repeatable proposal processes incorporating best practices based on content developed through the Association of Proposal Management Professionals and Shipley Consulting.</p>
                  <p className="emphasize3">2011-2014 <i className="bi bi-arrow-right-square-fill"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                  <img
                      src={roqlogo3}
                      alt="roqlogo3"
                      width="200px"
                      style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '40px' }}
                    />
                    <h6>Project management and experiential marketing consulting and design services, Calgary.</h6>
                    <p className="small-bold">Jan 2011 to May 2014</p>
                    <p className="small-bold">ROLE: Owner-Operator</p>
                  </div>
                </div>
                <div className="col">
                  <h5>PROJECTS</h5>
                  <p><b>Five Municipality Project, Sharing Services, Municipality of Crowsnest Pass;</b> interviewing stakeholders and preparing report of needs analysis.</p>
                  <p><b>Calgary Marathon Planning Guidebook;</b> interviewing long-time volunteers and preparing planning guidebook.</p>
                  <p><b>ATCO Structures and Logistics;</b> business development and proposal audit report. </p>
                  <p><b>Urban Systems;</b> business development and proposal audit report. </p>
                </div>
                <div className="col">
                  <h5>...</h5>
                  <p><b>Agrawal Associates;</b> brand development and design, event management.</p>
                  <p><b>Corby Spirit and Wine Limited;</b> staffing personnel for providing samples in select Alberta locations.</p>
                  <p className="emphasize3">2014-2016 <i className="bi bi-arrow-right-square-fill"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                  <img
                  src={globallogo}
                  alt="globallogo"
                  width="100px"
                  style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '20px' }}
                />
                    <h6>Startup, online training in Autodesk and Microsoft software, Calgary.</h6>
                    <p className="small-bold">May 2014 to July 2016</p>
                    <p className="small-bold">ROLE: Senior Account Manager</p>
                  </div>
                </div>
                <div className="col">
                  <h5>DUTIES</h5>
                  <p><b>Major account management;</b> leading large private sector sales with global engineering firms.</p>
                  <p><b>Learner engagement;</b> leading online training implementation through learning management system, launch, early adoption, ongoing engagement.</p>
                  <p><b>Online course design;</b> part of the team developing course design and implemention of Autodesk Maya. </p>
                </div>
                <div className="col">
                  <h5>HIGHLIGHTS</h5>
                  <p><b>Largest account in 2015;</b> WSP purchased 15,000 licenses in 2015. Led the implementation of the program remotely in Canada, the US, Europe, South Africa, and Australia.</p>
                  <p><b>Leadership;</b> providing team building and leadership exercises for annual and periodic sales meetings and summits.</p>
                  <p className="emphasize3">2016-2018 <i className="bi bi-arrow-right-square-fill"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                  <img
                  src={stantec}
                  alt="stanteclogo"
                  width="170px"
                  style={{ margin: 'auto', display: 'block', paddingTop: '1px', paddingBottom: '10px' }}
                />
                  <img
                  src={eng1}
                  alt="eng1"
                  width="200px"
                  style={{ margin: 'auto', display: 'block', paddingTop: '5px', paddingBottom: '20px' }}
                />
                    <h6>Global architecture and engineering firm.</h6>
                    <p className="small-bold">July 2016 to August 2018</p>
                    <p className="small-bold">ROLE: Senior Account Manager</p>
                  </div>
                </div>
                <div className="col">
                  <h5>DUTIES</h5>
                  <p>Managing proposal development: negotiating and setting deadlines with proposal teams in three regions, editing content, developing tables of contents, analyzing RFPs, developing final proposal mockup, implementing edits, managing Red Team activities.</p>
                  <p>Led marketing activities such as local brochures, awards submissions, displays, trade shows, marketing events, client appreciation events</p>
                  <p>Led proposal process formalization, standardization across multi-disciplinary business units, Prairie region. </p>
                </div>
                <div className="col">
                  <h5>HIGHLIGHTS</h5>
                  <p><b>PROCESS AND BEST PRACTICES;</b> win strategy method rolled out company-wide, led orientation and training.</p>
                  <p><b>TRAINING;</b> provided coaching, leadership, and guidance to seller-doer project managers on account management, client experience.</p>
                  <p className="emphasize3">2018-2022 <i className="bi bi-arrow-right-square-fill"></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              <div className="row">
                <div className="col">
                  <div className="rounded-column">
                  <img
                  src={wcslogo2}
                  alt="wcslogo"
                  width="170px"
                  style={{ margin: 'auto', display: 'block', paddingTop: '20px', paddingBottom: '40px' }}
                />
  
                    <h6>Client experience, marketing, product development, training.</h6>
                    <p className="small-bold">Aug 2018 to Sep 2022 </p>
                    <p className="small-bold">ROLE: Owner-Operator</p>
                  </div>
                </div>
                <div className="col">
                  <h5>PROJECTS</h5>
                  <p><b>GO GET MANAGEMENT CONSULTING: </b>product development and proposal support services, graphic design.</p>
                  <p><b>GOWLING LLP: </b>proposal training tool development.</p>
                  <p><b>P3 CONSULTING:</b> proposal management services, branding and graphic design. </p>
                </div>
                <div className="col">
                  <h5>...</h5>
                  <p><b>AUTODESK;</b> game development for training tool to be used in university construction management programs.</p>
                  <p><b>UNIVERSITY OF OTTAWA;</b> taught workplace culture and employee experience topics at University of Ottawa Professional Development Center.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Slides 5 to 9 */}
          {[...Array(5)].map((_, index) => (
          <div key={index + 4} className="carousel-item">
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url('${blackswirl2}')`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            ></div>
            <div className="carousel-caption d-none d-md-block text-start">
              {/* Add content for each slide here */}
              
              <h5 className="centered-text">{`2022 - Began studying web design full-time at Georgian College, Barrie.`}</h5>
              <a className="nav-link" href="/" id="home">
                       <p className="centered-text"> Home</p>
                      </a>
            </div>
          </div>
          ))}
        </div>
  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )};

    export default MyCarousel;