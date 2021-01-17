import React from "react";
import FB from "../assets/images/social/fb.svg";
import IG from "../assets/images/social/ig.svg";
import TW from "../assets/images/social/tw.svg";

export default function Footer() {
  return (
    
      <footer className='page-footer green accent-2'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Carbon</h5>
              <p className='grey-text text-lighten-4'></p>
            </div>
            <div className='col l3 s12'>
              <h5 className='white-text'>Connect</h5>
              <div className='footer__social'>
                <img className='footer__social--img' src={FB} />
                <img className='footer__social--img' src={IG} />
                <img className='footer__social--img' src={TW} />
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
