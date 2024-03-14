import React from "react";
import Vector from "../assets/Frame87.svg";
import styled from "styled-components";
import group from "../assets/Group237845.svg";

export default function seekers() {
  return (
    <>
      <Wrapper>
        <div className="Employeers row justify-content-between">
          <iframe
            title="firstDashBoard"
            width="600"
            height="636"
            src="https://app.powerbi.com/view?r=eyJrIjoiZTg5ZjIyY2MtOGMwNy00NjE4LTkxNWItYzAwNjMwN2NmYjg0IiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>

          <div className="content col-lg-4 col">
            <div className="col-lg-8 offset-4 removeOffset">
              <h2> Employeers</h2>
              <div className="line"></div>
              <p>Free job posting</p>
              <div className="line"></div>

              <p>
                View candidate before deciding
                <br />
                which are good fit
              </p>
              <div className="line"></div>

              <p>
                One format for profile/resume makes it easier to see all the
                <br />
                key points for evaluating a candidate within seconds
              </p>
            </div>
          </div>
          <div className="col-lg-7 image ">
            <img className="img" src={Vector} alt="vector-img" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .Employeers {
    padding-top: 110px;
    width: 100%;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #373737;
  }
  .content {
    background-image: url(${group});
    background-repeat: no-repeat;
  }
  .innerContent {
    border: 3px solid red;
  }
  .line {
    width: 38px;
    padding: 8px 0px;
    border-top: 4px solid #635ea3;
  }
  .image {
    text-align: center;
  }
  .img {
    width: 551px;
    position: right;
  }

  h2 {
    font-weight: 700;
    font-size: 36px;
    padding-bottom: 28px;
    color: #373737;
  }
  @media only screen and (max-width: 992px) {
    .img {
      width: 500px;
    }
  }

  @media only screen and (max-width: 576px) {
    .img {
      width: 450px;
    }
    .Employeers {
      flex-direction: column-reverse;
    }
    img {
      width: 350px !important;
      margin-left: 41px !important;
    }
    .removeOffset {
      margin-left: 14% !important;
    }
  }
`;
