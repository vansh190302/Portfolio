import { ContactWrapper, Emailphone } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton} from "@mui/material";

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("vanshu1903@gmail.com");
  };
  const copyToClipboard2 = () => {
    navigator.clipboard.writeText("9910468260");
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeInLeft" >
          <div className="BigCard">
            <Emailphone>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>vanshu1903@gmail.com</span>
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </div></Emailphone>
                <Emailphone>
                <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>9910468260</span>
               <IconButton  onClick={copyToClipboard2} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
              </div>
            </Emailphone>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;
