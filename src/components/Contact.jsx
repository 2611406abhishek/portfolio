import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper';
import "./contact.css"

// const Contact = () => {
//     return (
//         <div className="b-nav contact" id="contact">
//             <div className="b-icons">
//                 <a class="fab fa-linkedin fa-2x" href="https://www.linkedin.com/in/srijan-bhardwaj/" target="_blank" rel="noreferrer"></a>
//                 <a class="fab fa-github fa-2x" href="https://github.com/Srijan0101" target="_blank" rel="noreferrer"></a>
//                 <a class="fab fa-twitter fa-2x" href="https://twitter.com/SrijanBhardwaj1" target="_blank" rel="noreferrer"></a>
//             </div>
//             <div className="b-text">Created by Abhishek Soni | soniguy33@gmail.com </div>

            
//         </div>
//     )
// }

const Contact = () =>{
      return (
        <section id="footer">
        <div class="footer container">
          <div class="social-icon">
            {/* <div class="social-item">
              <a href="soniguy33@gmail.com"><img src="https://img.icons8.com/bubbles/100/000000/gmail-new.png" /></a>
            </div> */}
            <div class="social-item">
              <a href="https://instagram.com/abhisheksoni8920"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
            </div>
            <div class="social-item">
              <a href="https://www.linkedin.com/in/abhisheksoni125/"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" /></a>
            </div>
            <div class="social-item">
              <a href="https://github.com/2611406abhishek"><img src="https://img.icons8.com/bubbles/100/000000/github.png" /></a>
            </div>
          </div>
          <div id="copyright">
          <p>Copyright © Abhishek | soniguy33@gmail.com | All rights reserved</p>
          </div>
        </div>
      </section>
      )
}

export default SectionWrapper(Contact, "contact");