import React from "react";
import {FaLinkedin,FaEnvelope,FaPhone,FaLocationArrow,FaGithub} from 'react-icons/fa';
// import {FaLinkedin,FaEnvelope,FaPhone,FaGithup,FaLocation} from 'react-icons/fa';

class Footer extends React.Component{

    render(){
        return(

            <>

        <footer className="footer" id="contact_me">
            {/* ---left section--- */}
            <div className="p1">
            <h2 className="foot">
                CONTACT ME
            </h2>
            <div>
                <a href="https://mail.google.com/mail/u/0/#inbox" ><FaEnvelope className="icon"/></a>
                <span className="text"><sup>mohammadalnuqeiti@gmail.com</sup></span> 
            </div>
            <div>
                <a href="#phone"><FaPhone className="icon"/></a>
                <span className="text" id="phone"><sup>0778096898</sup></span>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/mohammad-alnuqeiti-1954b1251/" ><FaLinkedin className="icon"/></a>
                <span className="text"><sup>Mohammad Alnuqeiti</sup></span>
            </div>
            <div>
                <a href="https://github.com/MohammadAlnuqeiti" ><FaGithub className="icon"/></a>
                <span className="text"><sup>Mohammad Alnuqeiti</sup></span>
            </div>
            <div>
                <a href="./#"><FaLocationArrow className="icon"/></a>
                <span className="text"><sup>Jordan</sup></span>
            </div>
            </div>
            {/* ---right section--- */}
            <div className="message">
            <table>
                <tbody>
                <tr>
                    <td className="td" colSpan><input type="text" placeholder="First-name" className="input input1" /></td>
                    <td className="none" colSpan> <input type="text" placeholder="Last-name" className="input input1" /></td>
                </tr>
                <tr id="none">
                    <td colSpan={2}> <input type="text" placeholder="Last-name" className="input input1" /></td>
                </tr>
                <tr>
                    <td colSpan={2}> <input type="text" placeholder="Email" className="input input2" /><br /></td>
                </tr>
                <tr>
                    <td colSpan={2}><textarea cols={1} rows={1} className="input input3" placeholder="Message" defaultValue={""} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><button>Send Message</button></td>
                    <td />
                </tr>
                </tbody>
            </table>
            </div>
        </footer>
                
            </>

        )
    }

}

export default Footer