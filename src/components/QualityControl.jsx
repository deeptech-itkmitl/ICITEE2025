import React from "react";
import "../css/QualityControl.css";

const QualityControl = () => {
  return (
    <div className="quality-container">
      <h4 className="title"></h4>
      <div className="card">      
      <p className="intro">
        ICITEE 2025 adopts a <strong>Rolling Review Process</strong> with an <strong>Open Review Policy</strong> to enhance the peer review experience and ensure high-quality research contributions. This approach provides <strong>timely, transparent, and constructive feedback</strong>, helping authors improve their work before final acceptance.
      </p>
      <p>Our <strong>quality control strategy</strong> is based on:</p>
      <p>
      <ul>
        <li>
          <span className="check-icon"></span>
          <strong> Continuous review</strong> to provide rapid feedback and reduce delays.
        </li>
        <li>
          <span className="check-icon"></span>
          <strong> Transparent and interactive review</strong> to encourage constructive discussions.
        </li>
        <li>
          <span className="check-icon"></span>
          <strong> Multiple revision opportunities</strong> to enhance the quality of accepted papers.
        </li>
      </ul>
      </p>
    </div>      

      <div className="card">
        <h2>1. What is a Rolling Review Process?</h2>
        <p>
          A Rolling Review Process is a continuous submission and evaluation system where authors
          can submit their papers at any time within the submission window.
          Instead of waiting for a fixed deadline, papers are reviewed as they arrive, 
          and authors receive decisions within three weeks of submission.          
        </p>
        <h3>Key Benefits of Rolling Review for Quality Control</h3>
        <h3>Faster Review & Decisions</h3>        
        <p>
           <li>Papers are reviewed as soon as they are submitted, preventing delays in the review process.</li>
        </p>
        <p>
        <li>Authors receive feedback within three weeks, enabling them to revise and improve their work without long waiting times.</li>
        </p>
        <h3></h3>
        <h3>Better Paper Quality</h3>        
        <p>
           <li>Iterative Improvement: If a paper is not immediately accepted, authors often receive a Revise & Resubmit decision rather than outright rejection, encouraging them to refine their work.</li>
        </p>
        <p>
        <li>More Opportunities to Improve: Authors can incorporate expert feedback into their revisions, leading to higher-quality final submissions.</li>
        </p>
        <p>
        <li>Reduced Last-Minute Rush: Traditional conferences lead to rushed submissions near the deadline, often reducing quality. Rolling review allows authors to submit when they are ready, leading to better-prepared research papers.</li>
        </p>
        <h3></h3>
        <h3>More Flexibility for Authors</h3>        
        <p>
        <li>Researchers can submit their work at their convenience, avoiding the pressure of a single deadline.</li>
        </p>
        <p>
        <li>Beneficial for multi-stage research projects, where findings can be submitted incrementally rather than waiting for the next conference cycle.</li>
        </p>
        <p>        
        </p>        
      </div>

      <div className="card">
        <h3>Comparison of Rolling vs. Traditional Review</h3>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Rolling Review</th>
              <th>Traditional Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Submission Period</td>
              <td>Open for months</td>
              <td>Single deadline</td>
            </tr>
            <tr>
              <td>Review Start</td>
              <td>Immediately after submission</td>
              <td>After submission closes</td>
            </tr>
            <tr>
              <td>Decision Timeline</td>
              <td>3 weeks per submission</td>
              <td>Months after deadline</td>
            </tr>
            <tr>
              <td>Paper Quality</td>
              <td>Higher (more time for revision & feedback)</td>
              <td>Often rushed before deadline</td>
            </tr>
            <tr>
              <td>Author Response</td>
              <td>Available before final decision</td>
              <td>Usually after notification</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>2. What is an Open Review Policy?</h2>
        <p>
        ICITEE 2025 follows a Partially Open Review Policy, which enhances quality control by ensuring transparent and constructive reviews.
        </p>
        <ul>
          <li>Reviews are publicly visible to authors and the research community.</li>
          <li>Authors can respond to reviewer feedback before the final decision.</li>
          <li>Reviewer identities remain anonymous to ensure fairness.</li>
          <li>Discussions between authors and reviewers improve the quality of submissions.</li>
        </ul>
        <h3>How Open Review Improves Quality Control:</h3>
        <ul>
          <li>Transparency – Public reviews encourage constructive and fair feedback.</li>
          <li>Accountability – Reviewers provide more detailed and professional feedback when reviews are visible.</li>
          <li>Author Engagement – Authors can clarify misunderstandings and refine their work before the final decision.</li>          
        </ul>
      </div>

      <div className="card">
        <h2>3. Why is ICITEE 2025 Implementing Rolling & Open Review?</h2>
        <p>
        Traditional peer review systems often suffer from delays, inconsistent feedback, and lack of author engagement. ICITEE 2025 is committed to ensuring high-quality research through a fairer and more transparent review process.
        </p>
        <h3>Key Reasons for Implementing These Policies:</h3>
        <ul>
          <li><strong>Faster Decision-Making:</strong> Authors receive reviews within three weeks.</li>
          <li><strong>More Revision Opportunities:</strong> Papers can be refined through interactive discussions, leading to higher acceptance quality.</li>
          <li><strong>Fair & Transparent Reviews:</strong> Open discussions improve the constructiveness and reliability of feedback.</li>
          <li><strong>Encouraging High-Quality Submissions:</strong> Authors get detailed guidance to improve their work before final acceptance.</li>
          <li><strong>Greater Flexibility:</strong> Researchers can submit their work at the right time, avoiding deadline stress.</li>
        </ul>
      </div>

      <div className="card">
        <h2>4. Benefits for Authors</h2>
        <ul>
          <li><strong>Faster Review & Decisions:</strong> Receive feedback within 3 weeks of submission.</li>
          <li><strong>Higher Paper Quality:</strong> Iterative feedback helps refine research contributions.</li>
          <li><strong>Opportunity for Revisions:</strong> Instead of outright rejection, many papers will receive a Revise & Resubmit decision.</li>
          <li><strong>Increased Visibility:</strong> Open reviews allow the broader research community to engage with your work.</li>
          <li><strong>More Informed Decisions:</strong> Authors can respond to reviewers and clarify misunderstandings before final decisions.</li>
        </ul>
      </div>
    </div>
  );
};

export default QualityControl;
