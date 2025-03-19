import React from "react";
import "../css/QualityControl.css";

const PaperSubmissionGuidelines = () => {
  return (
    <div className="quality-container">
      <h4 className="title"><center>General Submission Guidelines</center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
      <div className="card">
        <p>
          Prospective authors are invited to submit original full papers (4 to 6 pages) in A4 IEEE Xplore double-column format, including tables, figures, and references.
        </p>
        <p2>General Submission Guidelines:</p2>
        <ul>
          <li>Submissions must be written in English and adhere to IEEE formatting guidelines.</li>
          <li>All submitted papers must be original, unpublished, and not under review elsewhere.</li>
          <li>Papers exceeding 6 pages (excluding references) will be automatically rejected.</li>
          <li>All papers must be submitted electronically through the EDAS Conference Submission System.</li>
          <li>Authors must ensure their paper is processable for similarity checking (e.g., no scanned images of text).</li>
          <li>Papers with plagiarism or self-plagiarism exceeding 30% similarity will be immediately rejected.</li>
        </ul>
        <p2><b>New in ICITEE 2025: Rolling Review and Open Review Policy</b></p2><p><break></break></p>
        <p className="">
          ICITEE 2025 follows a <strong>Rolling Review Process</strong> with an <strong>Open Review Policy</strong> to ensure high-quality submissions, provide timely feedback, and enhance transparency.
        </p>
      </div>

      <div className="card">
      <h4 className="title"><center> Rolling Review Process</center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <h3><center>Continuous Submission and Review Timeline</center></h3>
        <p2>
          ICITEE 2025 implements a rolling review process, meaning papers are reviewed as they are submitted rather than waiting for a fixed deadline. Authors will receive a decision within three weeks of submission.
        </p2>

        <h3><center>Decision Categories</center></h3>
        <p2>Each submission will receive one of the following decisions:</p2>
        <p2>
        <table style={{ borderCollapse: "collapse", width: "100%", border: "" }}>
          <tbody>
            <tr style={{ border: "", width: "33%", height: "150px" }}>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <center>
                <img src={`${process.env.PUBLIC_URL}/img/Group216.png`} alt="Image 1"  style={{ maxWidth: "100%", maxHeight: "50px" }} />
                </center>
              </td>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <center>
                <img src={`${process.env.PUBLIC_URL}/img/Group218.png`} alt="Image 2"   style={{ maxWidth: "100%", maxHeight: "50px" }}/>
                </center>
              </td>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <center>
                <img src={`${process.env.PUBLIC_URL}/img/Group219.png`} alt="Image 3"  style={{ maxWidth: "100%", maxHeight: "50px" }} />
                </center>
              </td>
            </tr>
            <tr style={{ border: "", width: "33%", height: "150px" }}>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <p2>The paper is accepted as-is and will be included in the proceedings.</p2>
              </td>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <p2>The paper is conditionally accepted, but authors must address reviewer concerns and submit a revised version within four weeks.</p2>
              </td>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <p2>The paper does not meet the quality standards and is not eligible for resubmission.</p2>
              </td>
            </tr>
          </tbody>
        </table>
        </p2>
        <ul>
          {/* <li><strong>Accept:</strong> The paper is accepted as-is and will be included in the proceedings.</li>
          <li><strong>Revise & Resubmit (R&R):</strong> The paper is conditionally accepted, but authors must address reviewer concerns and submit a revised version within four weeks.</li>
          <li><strong>Reject:</strong> The paper does not meet the quality standards and is not eligible for resubmission.</li> */}
        </ul>
        <p2>
          Note: A "Revise & Resubmit" decision does not guarantee acceptance. The revised paper will undergo another review before a final decision is made.
        </p2>
      </div>

      <div className="card">
      <h4 className="title"><center> Open Review Policy </center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <p2>
          ICITEE 2025 adopts a <strong>Partially Open Review Policy</strong> to enhance transparency and encourage constructive discussions.
        </p2>
        <ul>
          <li>Authors can view all reviews and feedback on their papers.</li>
          <li>Reviewer identities remain anonymous to ensure fairness.</li>
          <li>Reviewers may update their evaluations based on author responses.</li>
        </ul>

        <h4 className="title"><center> How Open Review Works </center></h4>        
        <p2>
        <ol>
          <li><strong>1. Initial Submission:</strong> Authors submit their anonymized paper through EDAS.</li>
          <li><strong>2. Review Assignment:</strong> Papers are assigned to three reviewers who provide detailed feedback.</li>
          <li><strong>3. Rebuttal Phase:</strong> Authors receive reviews within three weeks and have four weeks to submit a rebuttal addressing reviewer comments, clarifying misunderstandings, and justifying their research decisions.</li>
          <li><strong>4. Reviewer Updates (Optional):</strong> Reviewers may update their evaluations after considering the author’s rebuttal, but this is optional and at the reviewer’s discretion.</li>
          <li><strong>5. Decision:</strong> The Track Chair considers initial reviews, author rebuttals, and any reviewer updates before making a final decision on acceptance or rejection.</li>
          <li><strong>6. Public Review Phase:</strong> Only accepted papers and their corresponding reviews (with reviewer and author identities anonymized) will be publicly accessible. This promotes academic transparency, encourages constructive discussions, and enhances knowledge-sharing on high-quality research.</li>
        </ol>
        </p2>
        <h4 className="title"><center> Why Open Review? </center></h4>        
        <h3></h3>
        <ul>
          <li>Encourages high-quality, transparent feedback.</li>
          <li>Allows the research community to engage with accepted papers and their reviews.</li>
          <li>Ensures a fair review process with accountability while protecting rejected papers.</li>
        </ul>
      </div>

      <div className="card">
        <h4 className="title"><center> Formatting and Anonymity Policy </center></h4>
        <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <h3><center>Formatting</center></h3>
        <p2>
        <table style={{ borderCollapse: "collapse", width: "100%", border: "" }}>
          <tbody>
            <tr style={{ border: "", width: "33%", height: "150px" }}>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <center>
                <img src={`${process.env.PUBLIC_URL}/img/Group 221.png`} alt="Image 1"  style={{ maxWidth: "30%", maxHeight: "30%" }} />
                </center>
              </td>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <center>
                <img src={`${process.env.PUBLIC_URL}/img/Group 220.png`} alt="Image 2"   style={{ maxWidth: "30%", maxHeight: "30%" }}/>
                </center>
              </td>
            </tr>
            
          </tbody>
        </table>

        </p2>
        <ul>
          <li>Papers must follow the IEEE A4 two-column format.</li><p><break></break></p>
          <li>Templates can be found here: <span>🔗</span> <a href="https://www.ieee.org/conferences/publishing/templates.html"><i><b>IEEE Templates</b></i></a>.</li>
        </ul>

        <h3><center>Anonymity (For First Submission Only)</center></h3>
        <ul>
          ICITEE 2025 follows a partially anonymized review process. Initial submissions must be double-blind, meaning:<p><break></break></p>
          1. Do NOT include author names, emails, or affiliations anywhere in the paper.<p><break></break></p>
          2. Self-citations must be anonymized (e.g., use "Blind year" instead of "Smith et al., 2023").<p><break></break></p>
          3. Remove identifying information from document metadata before submission.<p><break></break></p>
        </ul>
      </div>

      <div className="card">
      <h4 className="title"><center> Revision and Resubmission Policy </center></h4><p><break></break></p>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
      <h4 className="title"><center><h3> Revision Guidelines (For Revise & Resubmit Decisions)</h3></center></h4>
        <ul>
          <li>Authors receiving an R&R decision must submit a revised paper that thoroughly addresses all reviewer comments. Submissions with only minor modifications or insufficient revisions may be rejected.</li>
          <li>Revised papers must be submitted within four weeks of receiving reviewer feedback.</li>
          <li>A detailed response letter is required, summarizing changes and justifications for any reviewer comments that were not fully implemented.</li>
          <li>Major changes must be clearly marked using tracked changes or highlighted text for easy identification.</li>
          <li>Whenever possible, the same reviewers will re-evaluate the revised submission to ensure continuity and consistency in feedback.</li>
        </ul>

        <h4 className="title"><center> Camera-Ready Submission Guidelines </center></h4>
        <h3></h3>
        <ul>
          <li>Final accepted papers must include author <b> names, emails, and affiliations.</b></li>
          <li>All accepted papers will be <b>checked for compliance</b> with IEEE Xplore standards before publication.</li>
          <li>Authors must <b>sign the IEEE Copyright Form </b> before final submission.</li>
          <li>Only papers that <b>pass the IEEE PDF eXpress check </b> will be included in the conference proceedings.<p><break></break></p></li><p><break></break></p>
        </ul><p><break></break></p>
        <p2><center><b><i> IEEE PDF eXpress </i></b> Instructions: </center> <p><break></break></p> 
        
        <p2>
        <table style={{ borderCollapse: "collapse", width: "100%", border: "" }}>
          <tbody>
            <tr style={{ border: "", width: "33%", height: "150px" }}>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <center>
                <img src={`${process.env.PUBLIC_URL}/img/Frame 222.png`} alt="Image 1"  style={{ maxWidth: "30%", maxHeight: "30%" }} />
                </center>
              </td>
              <td style={{ border: "", width: "33%", height: "150px" }}>
                <left>
                <p2>Log in to the <span>🔗</span> <b><i><a href="https://ieee-pdf-express.org/ "><i><b>IEEE PDF eXpress™ </b></i></a></i></b> site</p2>
                <p2>First-time users should do the following:</p2>
                <ol>        
                  <li><p2>1. Select the New Users - <span>🔗</span> <a href="https://www.ieee.org/"><i><b>Click Here link.</b></i></a></p2></li>
                  <li><p2>2. Enter the following:</p2></li><p><break></break></p>
                  <ul>
                    <li>66631X for the Conference ID</li>
                    <li>Your email address</li>
                    <li>A password</li><p><break></break></p>
                  </ul>
                  <li><p2>3. Continue to enter information as prompted.</p2></li><p><break></break></p>
                  <li><p2>An online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.</p2></li>
                </ol>
                </left>
              </td>
            </tr>
            
          </tbody>
        </table>
        </p2>
        </p2>
      </div>

      <div className="card">
      <h4 className="title"><center> Submission Process and EDAS Instructions </center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Group 216.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2><p><break></break></p>
        <p2>📌 Submission Portal: <span>🔗</span> <a href="https://edas.info/N33533"><i><b>ICITEE 2025 EDAS Submission</b></i></a></p2>
        <h3>Steps to Submit a Paper:</h3>
        <ul>
          <li>Step 1 - Log in to EDAS (Create an account if you don’t have one).</li>
          <li>Step 2 - Click "Submit Paper" and choose the relevant track.</li>
          <li>Step 3 - Upload your double-blind formatted PDF.</li>
          <li>Step 4 - Enter all author details and affiliations in EDAS.</li><p><break></break></p>
          <li><i><b>Click Submit and wait for confirmation.</b></i></li>
        </ul>
        <h3>Steps for Revised Submissions:</h3>
        <ul>
          <li>Upload the revised paper with marked changes.</li>
          <li>Upload the response letter detailing how reviewer comments were addressed.</li>
          <li>Complete the resubmission before the revision deadline.</li>
        </ul>
      </div>

      <div className="card">
      <h4 className="title"><center> Ethical Guidelines and Quality Control </center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h3>ICITEE 2025 is committed to maintaining high research integrity. Authors must adhere to the following guidelines:</h3>
        <ul>
          <li><b>Plagiarism must be below 30% </b>(checked via similarity detection tools).</li>
          <li><b>No dual submissions </b> – Papers under review elsewhere will be immediately rejected.</li>
          <li><b>Respectful review discussions </b> – Unprofessional author responses may result in rejection.</li>
          <li><b>Strict formatting compliance </b>– Papers that do not follow IEEE format will be rejected.</li>
        </ul>
        <p2>📌 <b>Important: </b>The Technical Program Committee reserves the right to reject submissions that fail quality control checks, even before the review process.</p2>
      </div>

      <div className="card">
      <h4 className="title"><center> Contact and Support </center></h4>
      <h4 className="title"><center>
                            <img
                                    src={`${process.env.PUBLIC_URL}/img/Line9.png`}
                                    alt="Line"
                                    className=""
                                    style={{ width: "30%" }} // กำหนดให้กว้าง 50% ของพื้นที่ที่ครอบอย
                            /></center>
      </h4>
        <h2></h2>
        <p2>For any questions regarding submission, formatting, or the review process, please contact:</p2>
        <p><break></break></p>
        <p2>📧 ICITEE 2025 Submission Committee: <span>🔗</span> <a href="mailto:icitee2025@it.kmitl.ac.th"><i><b>icitee2025@it.kmitl.ac.th</b></i></a></p2> <p><break></break></p>
        <p2>🌐 Conference Website: <span>🔗</span> <a href="https://icitee2025.it.kmitl.ac.th/"><i><b>https://icitee2025.it.kmitl.ac.th/</b></i></a></p2>
      </div>
    </div>
  );
};

export default PaperSubmissionGuidelines;
