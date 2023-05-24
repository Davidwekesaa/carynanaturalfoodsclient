import React from "react";
import MenuContainer from "./MenuContainer";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div className="footerr">
      <div className="contact-icon">
        <div className="icon-name">
          <ul>
            <MenuContainer
              link={"#"}
              icon={
                <AddIcCallIcon
                  style={{
                    color: "black",
                    background: "white",
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                />
              }
            />
            <MenuContainer
              link={"https://wa.me/c/254111201762"}
              icon={
                <WhatsAppIcon
                  style={{
                    color: "#1bd741",
                    background: "white",
                    borderRadius: "10px",
                  }}
                />
              }
            />
          </ul>
          <p>0111 201 762</p>
        </div>
        <div className="icon-name">
          <ul>
            <MenuContainer
              link={"#"}
              icon={
                <InstagramIcon
                  className="instaa"
                  style={{
                    color: "black",
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                />
              }
            />
            <MenuContainer
              link={
                "https://www.facebook.com/profile.php?id=100086557214247&mibextid=ZbWKwL"
              }
              icon={
                <FacebookIcon
                  style={{
                    color: "#4867aa",
                    background: "white",
                    borderRadius: "10px",
                  }}
                />
              }
            />
          </ul>
          <p>carynanaturalfoods</p>
        </div>
        <div className="icon-name">
          <ul className="ul-emails">
            <div className="emails">
              <MenuContainer
                link={"#"}
                icon={
                  <MailOutlineIcon
                    style={{
                      color: "black",
                      borderRadius: "10px",
                      background: "white",
                      marginRight: "10px",
                    }}
                  />
                }
              />
              <p>carynanaturalfoods@gmail.com</p>
            </div>

            <div className="emails">
              <MenuContainer
                link={"#"}
                icon={
                  <LanguageIcon
                    style={{
                      color: "black",
                      borderRadius: "10px",
                      background: "white",
                      marginRight: "10px",
                    }}
                  />
                }
              />
              <p>carynanaturalfoods.com</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
