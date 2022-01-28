import React from "react";
import styled from "styled-components";

function ContactForm() {
  return (
    <BigContainer>
      <Container>
        <LeftContainer>
          <Heading>Submit an Enquiry</Heading>
          <InputFieldContainer>
            <Label>Full Name</Label>
            <Input type="text" />
          </InputFieldContainer>
          <InputFieldContainer>
            <Label>Email Address </Label>
            <Input type="email" />
          </InputFieldContainer>
          <InputFieldContainer>
            <Label>Subject</Label>
            <Input type="text" />
          </InputFieldContainer>
          <InputFieldContainer>
            <Label>Message</Label>
            <TextArea />
          </InputFieldContainer>
          <Button>Submit</Button>
        </LeftContainer>
        <RightContainer>
          <Heading style={{ marginLeft: "20px" }}>Contact Us</Heading>
          <RightSubContainer>
            <Left>
              <Img src="/contact-line.svg" alt="line" />
            </Left>
            <Right>
              <Row1>
                <Icon1 src="contact-phone.svg" alt="phone" />
                <Text>+91-9999000999</Text>
              </Row1>
              <Row2>
                <Icon2 src="contact-mail.svg" alt="mail" />
                <Text>Hiring.bird@gmail.com</Text>
              </Row2>
              <Row3>
                <Heading>Follow Us</Heading>
                <div className="flex">
                  <div className="icon">
                    <svg viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9993 3.33797H8.99391C7.4309 3.33797 7.136 4.03338 7.136 5.06259V7.31571H10.8518V10.8762H7.136V20H3.24324V10.8762H-0.000732422V7.31571H3.24324V4.70097C3.24324 1.66899 5.21911 0 8.0797 0H10.9993V3.33797Z" />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.9993 20.9653C20.9993 20.8263 20.9993 20.7568 20.9993 20.6526C20.9993 17.7342 20.9645 14.7811 20.9645 11.8628C20.9645 10.89 20.7561 9.95198 20.4087 9.04868C19.9918 7.97168 19.297 7.13786 18.2549 6.58199C17.1779 5.99137 15.9968 5.92189 14.8156 6.06085C13.3566 6.23457 12.1754 6.89467 11.3417 8.14539C11.307 8.21487 11.2375 8.28436 11.168 8.38858C11.0985 7.69374 10.9943 7.03364 10.9248 6.37353C9.60473 6.37353 8.28463 6.37353 6.99927 6.37353C7.03401 11.2722 7.03401 16.1361 7.06875 21C8.59728 21 10.1258 21 11.6891 21C11.6891 20.9305 11.6891 20.861 11.6891 20.7915C11.6891 18.6723 11.7238 16.553 11.7238 14.4337C11.7238 13.7736 11.7238 13.1135 11.7238 12.4882C11.7238 12.245 11.7238 11.967 11.7933 11.7238C12.0365 10.6816 12.905 9.74353 14.1556 9.77827C14.8156 9.81301 15.4062 9.98672 15.8231 10.5426C16.2052 11.0637 16.3442 11.6543 16.3789 12.2797C16.4137 13.322 16.4137 14.399 16.4137 15.4412C16.4137 17.2131 16.4137 18.985 16.4137 20.7221C16.4137 20.7915 16.4137 20.8958 16.4484 20.9653C17.9422 20.9653 19.4707 20.9653 20.9993 20.9653Z" />
                      <path d="M3.99927 7C2.65576 7 1.34278 7 -0.000732422 7C-0.000732422 11.6888 -0.000732422 16.3444 -0.000732422 21C1.34278 21 2.65576 21 3.99927 21C3.99927 16.3444 3.99927 11.6888 3.99927 7Z" />
                      <path d="M2.48884 0.00129775C2.27451 0.0391139 2.02445 0.00129775 1.84584 0.07693C1.02422 0.303827 0.381222 0.795436 0.131166 1.70302C-0.154613 2.64843 0.0239985 3.48038 0.667001 4.19889C1.27428 4.87958 2.06017 5.10647 2.91751 4.95521C4.45357 4.6905 5.38235 3.25348 4.84652 1.66521C4.56074 0.75762 3.73912 -0.0365184 2.48884 0.00129775Z" />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.77704 12.1068C2.77704 12.1471 2.73558 12.1873 2.73558 12.1873C3.48185 14.3214 5.18169 15.2877 7.42049 15.7306C6.38401 16.6567 5.09877 16.9788 3.89645 17.3412C2.65267 17.7036 1.32597 17.7841 -0.000732422 17.6633C0.040727 17.7841 0.123643 17.8244 0.165103 17.8647C0.413859 18.0257 0.66261 18.1465 0.911366 18.2673C5.0573 20.2806 9.36908 20.5624 13.7223 18.9921C17.4951 17.6231 20.1071 15.0864 21.5167 11.382C22.263 9.40905 22.5532 7.39581 22.5532 5.30204C22.5532 5.10072 22.5946 4.97992 22.7605 4.85913C23.5897 4.29542 24.2115 3.57066 24.8334 2.80562C24.9164 2.68483 24.9578 2.52377 24.9993 2.36271C24.9578 2.36271 24.9578 2.32245 24.9163 2.32245C24.1701 2.64456 23.4238 2.84589 22.5946 3.00695C23.6726 2.08086 24.4188 0.953443 24.4188 0.349471C23.3409 0.872913 22.3044 1.31583 21.185 1.55742C19.5266 -0.133707 16.9976 -0.455827 14.9661 0.631323C12.7687 1.83927 11.8981 3.69145 12.2298 6.1476C8.08385 5.5839 4.47687 4.05383 1.74055 0.913177C1.36742 1.19503 1.03575 1.96006 0.952828 2.72509C0.786991 4.6578 1.40888 6.30866 3.0258 7.59714C2.23807 7.55687 1.61618 7.27502 0.911366 6.99317C0.828448 7.67767 0.952831 8.28164 1.20159 8.84535C1.82348 10.4157 2.98434 11.5028 4.64271 11.986V12.0263C4.02082 12.1068 3.39893 12.1068 2.77704 12.1068Z" />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4995 6C8.4441 6 5.99976 8.48264 5.99976 11.5C5.99976 14.5556 8.4823 17 11.4995 17C14.555 17 16.9993 14.5174 16.9993 11.5C17.0375 8.44445 14.555 6 11.4995 6ZM11.4995 15.0521C9.51351 15.0521 7.9476 13.4479 7.9476 11.4618C7.9476 9.47569 9.5517 7.87153 11.4995 7.87153C13.4856 7.87153 15.0897 9.47569 15.0897 11.4618C15.0897 13.4479 13.4856 15.0521 11.4995 15.0521Z" />
                      <path d="M18.9998 5.5C18.9998 6.33824 18.338 7 17.4998 7C16.6615 7 15.9998 6.33824 15.9998 5.5C15.9998 4.66177 16.6615 4 17.4998 4C18.338 4 18.9998 4.66177 18.9998 5.5Z" />
                      <path d="M21.9215 6.45908C21.8823 5.2847 21.6866 4.50178 21.4126 3.79716C21.1385 3.05338 20.7079 2.3879 20.1599 1.83986C19.6119 1.29182 18.9464 0.86121 18.2026 0.587189C17.498 0.313167 16.7151 0.11744 15.5407 0.0782936C14.3663 0.0391477 13.9748 0 10.9998 0C8.02467 0 7.63321 1.79079e-06 6.45883 0.0782936C5.28445 0.11744 4.50154 0.313167 3.79691 0.587189C3.05314 0.86121 2.38766 1.29182 1.83962 1.83986C1.29157 2.3879 0.860966 3.05338 0.586945 3.79716C0.312923 4.50178 0.117195 5.2847 0.0780495 6.45908C0.0389036 7.63345 -0.000244141 8.02491 -0.000244141 11C-0.000244141 13.9751 -0.00024235 14.3665 0.0780495 15.5409C0.117195 16.7153 0.312923 17.4982 0.586945 18.2028C0.860966 18.9466 1.29157 19.6121 1.83962 20.1601C2.38766 20.7082 3.05314 21.1388 3.79691 21.4128C4.50154 21.6868 5.28445 21.8826 6.45883 21.9217C7.63321 21.9609 8.02467 22 10.9998 22C13.9748 22 14.3663 22 15.5407 21.9217C16.7151 21.8826 17.498 21.6868 18.2026 21.4128C19.6901 20.8256 20.8645 19.6904 21.4126 18.2028C21.6866 17.4982 21.8823 16.7153 21.9215 15.5409C21.9606 14.3665 21.9998 14.0142 21.9998 11C21.9998 7.98577 21.9998 7.63345 21.9215 6.45908ZM19.9642 15.4235C19.925 16.4804 19.7293 17.0676 19.5727 17.4591C19.2204 18.3986 18.4375 19.1815 17.498 19.5338C17.1065 19.6904 16.5193 19.847 15.4624 19.9253C14.288 19.9644 13.9748 20.0036 11.0389 20.0036C8.10296 20.0036 7.75065 20.0036 6.61542 19.9253C5.55848 19.8861 4.97129 19.6904 4.57983 19.5338C4.11008 19.3381 3.67947 19.0641 3.32716 18.7117C2.97485 18.3594 2.66168 17.9288 2.50509 17.4591C2.34851 17.0676 2.19193 16.4804 2.11364 15.4235C2.07449 14.2491 2.03535 13.9359 2.03535 11C2.03535 8.06406 2.03534 7.71175 2.11364 6.57651C2.15278 5.51957 2.34851 4.93239 2.50509 4.54093C2.70082 4.07118 2.97485 3.64057 3.32716 3.28826C3.67947 2.93594 4.11008 2.62278 4.57983 2.46619C4.97129 2.30961 5.55848 2.11388 6.61542 2.07473C7.78979 2.03559 8.10296 1.99644 11.0389 1.99644C13.9748 1.99644 14.3272 1.99644 15.4624 2.07473C16.5193 2.11388 17.1065 2.30961 17.498 2.46619C17.9677 2.62278 18.3983 2.93594 18.7507 3.28826C19.103 3.64057 19.377 4.07118 19.5727 4.54093C19.7293 4.93239 19.8859 5.51957 19.9642 6.57651C20.0033 7.75089 20.0425 8.10321 20.0425 11C20.0425 13.9359 20.0033 14.2883 19.9642 15.4235Z" />
                    </svg>
                  </div>
                </div>
              </Row3>
            </Right>
          </RightSubContainer>
        </RightContainer>
      </Container>
    </BigContainer>
  );
}

export default ContactForm;

const Container = styled.div`
  margin-inline: auto;
  width: min(90%, 90rem);
  padding: 4.5rem 0;
  font-family: "Inter", sans-serif;
  display: flex;
`;

const BigContainer = styled.div`
  background-color: #c9cbe2;
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 1;
  @media (max-width: 699px) {
    display: none;
    flex: 0;
  }
`;

const Heading = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #404366;
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

const Label = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #404366;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.76489px solid #a9accb;
  width: 65%;
  outline: none;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 70%;
  background: #fafafa;
  border: 0.76px solid #a9accb;
  box-sizing: border-box;
  height: 140px;
  outline: none;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: #f26a7e;
  border-radius: 6px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  padding: 15px 36px;
  cursor: pointer;
`;

const RightSubContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Left = styled.div``;

const Img = styled.img``;

const Row1 = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 10px;
  align-items: center;
`;

const Row2 = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 10px;
  align-items: center;
`;

const Row3 = styled.div`
  margin-top: 30px;
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 20px 0;
  }
  .icon {
    width: 3rem;
    height: 3rem;
    border: 1px solid #a3b1c2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      svg {
        fill: #f26a7e;
        transform: scale(0.9);
      }
    }
    svg {
      height: 1.2rem;
      fill: #404366;
      transition: all 0.3s ease-in-out;
      &:active {
        transform: scale(0.8);
      }
    }
 
`;

const Icon1 = styled.img`
  width: 19px;
  height: 19px;
`;

const Icon2 = styled.img`
  width: 20px;
  height: 16px;
`;

const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #404366;
`;
