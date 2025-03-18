import React from "react";
import "../css/QualityControl.css";

const PaperSubmissionGuidelines = () => {
  return (
    <div className="quality-container">
      <h4 className="title">Paper Submission Guidelines for ICITEE 2025</h4>
      <div className="card">
        <p className="intro">
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
        <p className="intro">
          ICITEE 2025 follows a <strong>Rolling Review Process</strong> with an <strong>Open Review Policy</strong> to ensure high-quality submissions, provide timely feedback, and enhance transparency.
        </p>
      </div>

      <div className="card">
        <h2>1. Rolling Review Process</h2>
        <h3>1.1 Continuous Submission and Review Timeline</h3>
        <p2>
          ICITEE 2025 implements a rolling review process, meaning papers are reviewed as they are submitted rather than waiting for a fixed deadline. Authors will receive a decision within three weeks of submission.
        </p2>

        <h3>1.2 Decision Categories</h3>
        <ul>
          <li><strong>Accept:</strong> The paper is accepted as-is and will be included in the proceedings.</li>
          <li><strong>Revise & Resubmit (R&R):</strong> The paper is conditionally accepted, but authors must address reviewer concerns and submit a revised version within four weeks.</li>
          <li><strong>Reject:</strong> The paper does not meet the quality standards and is not eligible for resubmission.</li>
        </ul>
        <p2>
          Note: A "Revise & Resubmit" decision does not guarantee acceptance. The revised paper will undergo another review before a final decision is made.
        </p2>
      </div>

      <div className="card">
        <h2>2. Open Review Policy</h2>
        <p2>
          ICITEE 2025 adopts a <strong>Partially Open Review Policy</strong> to enhance transparency and encourage constructive discussions.
        </p2>
        <ul>
          <li>Authors can view all reviews and feedback on their papers.</li>
          <li>Reviewer identities remain anonymous to ensure fairness.</li>
          <li>Reviewers may update their evaluations based on author responses.</li>
        </ul>

        <h3>2.1 How Open Review Works</h3>
        <ol>
          <li><strong>Initial Submission:</strong> Authors submit their anonymized paper through EDAS.</li>
          <li><strong>Review Assignment:</strong> Papers are assigned to three reviewers who provide detailed feedback.</li>
          <li><strong>Rebuttal Phase:</strong> Authors receive reviews within three weeks and have four weeks to submit a rebuttal addressing reviewer comments, clarifying misunderstandings, and justifying their research decisions.</li>
          <li><strong>Reviewer Updates (Optional):</strong> Reviewers may update their evaluations after considering the author’s rebuttal, but this is optional and at the reviewer’s discretion.</li>
          <li><strong>Decision:</strong> The Track Chair considers initial reviews, author rebuttals, and any reviewer updates before making a final decision on acceptance or rejection.</li>
          <li><strong>Public Review Phase:</strong> Only accepted papers and their corresponding reviews (with reviewer and author identities anonymized) will be publicly accessible. This promotes academic transparency, encourages constructive discussions, and enhances knowledge-sharing on high-quality research.</li>
        </ol>

        <h3>2.2 Why Open Review?</h3>
        <ul>
          <li>Encourages high-quality, transparent feedback.</li>
          <li>Allows the research community to engage with accepted papers and their reviews.</li>
          <li>Ensures a fair review process with accountability while protecting rejected papers.</li>
        </ul>
      </div>

      <div className="card">
        <h2>3. Formatting and Anonymity Policy</h2>
        <h3>3.1 Formatting</h3>
        <ul>
          <li>Papers must follow the IEEE A4 two-column format.</li>
          <li>Templates can be found here: <a href="https://www.ieee.org/conferences/publishing/templates.html">IEEE Templates</a>.</li>
        </ul>

        <h3>3.2 Anonymity (For First Submission Only)</h3>
        <ul>
          <li>ICITEE 2025 follows a partially anonymized review process. Initial submissions must be double-blind, meaning:</li>
          <li>Do NOT include author names, emails, or affiliations anywhere in the paper.</li>
          <li>Self-citations must be anonymized (e.g., use "Blind year" instead of "Smith et al., 2023").</li>
          <li>Remove identifying information from document metadata before submission.</li>
        </ul>
      </div>

      <div className="card">
        <h2>4. Revision and Resubmission Policy</h2>
        <h3>4.1 Revision Guidelines (For Revise & Resubmit Decisions)</h3>
        <ul>
          <li>Authors receiving an R&R decision must submit a revised paper that thoroughly addresses all reviewer comments. Submissions with only minor modifications or insufficient revisions may be rejected.</li>
          <li>Revised papers must be submitted within four weeks of receiving reviewer feedback.</li>
          <li>A detailed response letter is required, summarizing changes and justifications for any reviewer comments that were not fully implemented.</li>
          <li>Major changes must be clearly marked using tracked changes or highlighted text for easy identification.</li>
          <li>Whenever possible, the same reviewers will re-evaluate the revised submission to ensure continuity and consistency in feedback.</li>
        </ul>

        <h3>4.2 Camera-Ready Submission Guidelines</h3>
        <ul>
          <li>Final accepted papers must include author names, emails, and affiliations.</li>
          <li>All accepted papers will be checked for compliance with IEEE Xplore standards before publication.</li>
          <li>Authors must sign the IEEE Copyright Form before final submission.</li>
          <li>Only papers that pass the IEEE PDF eXpress check will be included in the conference proceedings.</li>
        </ul>
        <p>📌 IEEE PDF eXpress Instructions: Log in to the IEEE PDF eXpress™ site</p>
        <p>First-time users should do the following:</p>
        <ol>
          <li>Select the New Users - Click Here link.</li>
          <li>Enter the following:</li>
          <ul>
            <li>66631X for the Conference ID</li>
            <li>Your email address</li>
            <li>A password</li>
          </ul>
          <li>Continue to enter information as prompted.</li>
          <li>An online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.</li>
        </ol>
      </div>

      <div className="card">
        <h2>5. Submission Process and EDAS Instructions</h2>
        <p>📌 Submission Portal: <a href="https://edas.info/">ICITEE 2025 EDAS Submission</a></p>
        <h3>Steps to Submit a Paper:</h3>
        <ul>
          <li>Log in to EDAS (Create an account if you don’t have one).</li>
          <li>Click "Submit Paper" and choose the relevant track.</li>
          <li>Upload your double-blind formatted PDF.</li>
          <li>Enter all author details and affiliations in EDAS.</li>
          <li>Click Submit and wait for confirmation.</li>
        </ul>
        <h3>Steps for Revised Submissions:</h3>
        <ul>
          <li>Upload the revised paper with marked changes.</li>
          <li>Upload the response letter detailing how reviewer comments were addressed.</li>
          <li>Complete the resubmission before the revision deadline.</li>
        </ul>
      </div>

      <div className="card">
        <h2>6. Ethical Guidelines and Quality Control</h2>
        <ul>
          <li>Plagiarism must be below 30% (checked via similarity detection tools).</li>
          <li>No dual submissions – Papers under review elsewhere will be immediately rejected.</li>
          <li>Respectful review discussions – Unprofessional author responses may result in rejection.</li>
          <li>Strict formatting compliance – Papers that do not follow IEEE format will be rejected.</li>
        </ul>
        <p>📌 Important: The Technical Program Committee reserves the right to reject submissions that fail quality control checks, even before the review process.</p>
      </div>

      <div className="card">
        <h2>7. Contact and Support</h2>
        <p>For any questions regarding submission, formatting, or the review process, please contact:</p>
        <p>📧 ICITEE 2025 Submission Committee: <a href="mailto:icitee2025@it.kmitl.ac.th">icitee2025@it.kmitl.ac.th</a></p>
        <p>🌐 Conference Website: <a href="https://icitee2025.it.kmitl.ac.th/">https://icitee2025.it.kmitl.ac.th/</a></p>
      </div>
    </div>
  );
};

export default PaperSubmissionGuidelines;
