import React from "react";
import "./main.scss";
import { HouseCard } from "./HouseCard";
import img from "./img/logo_1.png";
import mainvisual1 from "./img/visual_img1.png";
import rowimg1 from "./img/row1_img1.jpg";
import rowimg1_1 from "./img/row1_img1_1.jpg";
import rowimg1_2 from "./img/row1_img1_2.jpg";
import rowimg1_3 from "./img/row1_img1_3.jpg";
import rowimg1_4 from "./img/row1_img1_4.jpg";
import rowimg1_5 from "./img/row1_img1_5.jpg";
import rowimg2 from "./img/row1_img2.jpg";
import rowimg2_1 from "./img/row1_img2_1.jpg";
import rowimg2_2 from "./img/row1_img2_2.jpg";
import rowimg2_3 from "./img/row1_img2_3.jpg";
import rowimg2_4 from "./img/row1_img2_4.jpg";
import rowimg3 from "./img/row1_img3.jpg";
import rowimg3_1 from "./img/row1_img3_1.jpg";
import rowimg3_2 from "./img/row1_img3_2.jpg";
import rowimg3_3 from "./img/row1_img3_3.jpg";
import rowimg4 from "./img/row1_img4.jpg";
import rowimg4_1 from "./img/row1_img4_1.jpg";
import rowimg4_2 from "./img/row1_img4_2.jpg";
import rowimg4_3 from "./img/row1_img4_3.jpg";
import rowimg5 from "./img/row1_img5.jpg";
import rowimg5_1 from "./img/row1_img5_1.jpg";
import rowimg5_2 from "./img/row1_img5_2.jpg";
import rowimg5_3 from "./img/row1_img5_3.jpg";
import rowimg5_4 from "./img/row1_img5_4.jpg";
import rowimg6 from "./img/row1_img6.jpg";
import rowimg6_1 from "./img/row1_img6_1.jpg";
import rowimg6_2 from "./img/row1_img6_2.jpg";
import rowimg6_3 from "./img/row1_img6_3.jpg";
import rowimg7 from "./img/row1_img7.jpg";
import rowimg7_1 from "./img/row1_img7_1.jpg";
import rowimg7_2 from "./img/row1_img7_2.jpg";
import rowimg8 from "./img/row1_img8.jpg";
import rowimg8_1 from "./img/row1_img8_1.jpg";
import rowimg8_2 from "./img/row1_img8_2.jpg";
import rowimg8_3 from "./img/row1_img8_3.jpg";
import rowimg8_4 from "./img/row1_img8_4.jpg";
import row2img1 from "./img/row2_img1.png";
import row2img2 from "./img/row2_img2.png";
import row2img3 from "./img/row2_img3.png";
import bn_img from "./img/bn_img.png";
import partners1 from "./img/partners1.png";
import partners2 from "./img/partners2.png";
import partners3 from "./img/partners3.png";
import partners4 from "./img/partners4.png";
import partners5 from "./img/partners5.png";
import partners6 from "./img/partners6.png";
import partners7 from "./img/partners7.png";
import partners_img from "./img/partners_img.jpg";
import kakao_icon from "./img/kakao_icon.png";
import p_icon from "./img/p_icon.png";
import $ from "jquery";
import { JDslider, JDslide } from "@janda-com/front";
// function  goToScrollTop () {

// }

const goToScrollTop = () => {
  $("html").animate({ scrollTop: 0 }, 400);
};

const popUp = () => {
  window.open(
    "https://jungle.booking.stayjanda.cloud/?storeCode=STORE-DPMXE1&layout=SOLO#/buypage",
    "PopupWin",
    "top=10, left=10, width=600, height=650, status=no, menubar=no, toolbar=no, resizable=no"
  );
};

const closeC = () => {
  $(".black_wrap_c").css({ display: "none" });
};
const closeP = () => {
  $(".black_wrap_p").css({ display: "none" });
};
const popUpClause = () => {
  $(".black_wrap_c").css({ display: "block" });
};
const popUpPolicy = () => {
  $(".black_wrap_p").css({ display: "block" });
};
const menuSlide = (e) => {
  e.persist();
  const target = $(e.currentTarget).next();

  const hideAll = () => $(".list_img").next().removeClass("clickShow__open");

  if (target.hasClass("clickShow__open")) {
    hideAll();
  } else {
    hideAll();
    setTimeout(() => {
      target.addClass("clickShow__open");
    }, 290);
  }
};
const menuSlide2 = (e) => {
  e.persist();
  $(e.currentTarget).next().toggleClass("clickShow__open");
};

function App() {
  return (
    <div className="Main">
      <header>
        <div className="hd">
          <div className="logo">
            <a href="#">
              <img src={img} alt="메이전시로고"></img>
            </a>
          </div>

          <div className="join">
            <div onClick={popUp} className="join_link1">
              인플루언서 신청하기.
            </div>
          </div>
        </div>
      </header>
      <section id="mainvisual">
        <div className="mainvisual">
          <div className="txt_wrap">
            <p className="txt">영향력 있는 인플루언서가 추천하는..</p>
            <p className="txt">
              만족도 최고의 <strong>에이전시</strong>
            </p>
          </div>
          <div onClick={popUp} className="join_link2">
            인플루언서 신청하기
          </div>
        </div>
        {/* <div className="mainvisual">
          <JDslider
            prevArrow={
              <button className="slick-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40.51 33.59"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: ".cls-4{fill:#fff;}",
                      }}
                    />
                  </defs>
                  <rect
                    className="cls-4"
                    y="15.49"
                    width="40.51"
                    height={3}
                    rx="1.5"
                  />
                  <rect
                    className="cls-4"
                    x="681.52"
                    y="390.76"
                    width="24.36"
                    height={3}
                    rx="1.5"
                    transform="translate(-736.43 237.69) rotate(-45)"
                  />
                  <rect
                    className="cls-4"
                    x="683.34"
                    y="372.58"
                    width="16.74"
                    height={3}
                    rx="1.5"
                    transform="translate(-195.13 -747.27) rotate(45)"
                  />
                </svg>
              </button>
            }
            nextArrow={
              <button className="slick-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40.51 33.59"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: ".cls-4{fill:#fff;}",
                      }}
                    />
                  </defs>
                  <rect
                    className="cls-4"
                    y="15.49"
                    width="40.51"
                    height={3}
                    rx="1.5"
                  />
                  <rect
                    className="cls-4"
                    x="681.52"
                    y="390.76"
                    width="24.36"
                    height={3}
                    rx="1.5"
                    transform="translate(-736.43 237.69) rotate(-45)"
                  />
                  <rect
                    className="cls-4"
                    x="683.34"
                    y="372.58"
                    width="16.74"
                    height={3}
                    rx="1.5"
                    transform="translate(-195.13 -747.27) rotate(45)"
                  />
                </svg>
              </button>
            }
            appendDots={(dots) => {
              return <ul>{dots}</ul>;
            }}
            slide
          >
            <JDslide dots={false}>
              <div className="visual slide1">
                <span className="visual_txt">
                  <strong>잔다솔루션</strong>과<strong>타임스페이스</strong>를
                  이용하는 상품을<br></br>SNS에 소개하고 수익활동을
                  시작해보세요.
                </span>
                <img src={mainvisual1} alt="메이전시소개이미지"></img>
              </div>
            </JDslide>
            <JDslide dots={false}>
              <div className="visual slide2">
                <span className="round"></span>
                <span className="visual_txt1">
                  <span>
                    메이전시<br></br>카카오채널<br></br>추가하기
                  </span>
                  <span className="sub_txt">
                    메이전시에서 알려드리는 상품을 카카오톡으로 받아보세요.
                  </span>
                  <a
                    href="https://pf.kakao.com/_xmNxcNxb"
                    target="_blank"
                    className="kakao_link"
                  >
                    카카오채널 추가하기
                  </a>
                </span>
                <span className="visual_txt2">
                  <span>
                    메이전시<br></br>인플루언서<br></br>신청하기하기
                  </span>
                  <span className="sub_txt">
                    메이전시의 인플루언서가 되어 수익을 창출해보세요.
                  </span>
                  <div onClick={popUp} className="google_btn">
                    인플루언서 신청하기
                  </div>
                </span>
                <img src={mainvisual1} alt="메이전시소개이미지"></img>
              </div>
            </JDslide>
          </JDslider>
        </div> */}
      </section>
      <section id="container">
        <div className="row1">
          <h2 className="row_tit">메이전시는 어떤 상품을 홍보하나요?</h2>
          <p className="row_txt">
            메이전시에서는 <strong>잔다솔루션</strong>과
            <strong>타임스페이스</strong>를 사용중인
            <br></br>
            고객의 상품을 홍보합니다.
          </p>
          <ul>
            <li>
              <a
                href="https://fillyou.net/"
                target="_blank"
              >
                <span className="list_img">
                  <img src={rowimg1} alt="신기여울(카페)"></img>
                </span>
                <span className="list_tit">신기여울(카페)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">134</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.unknownhotel.com/" target="_blank">
                <span className="list_img">
                  <img src={rowimg2} alt="담양언노운호텔(숙박업)"></img>
                </span>
                <span className="list_tit">담양 언노운호텔(숙박업)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">342</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.iloveyacht.co/"
                target="_blank"
              >
                <span className="list_img">
                  <img src={rowimg3} alt="아이러브요트(액티비티)"></img>
                </span>
                <span className="list_tit">아이러브요트(액티비티)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">489</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://storeuser.space.stayjanda.cloud/?sc=22BZC2&sgc=FVFWKW#/" target="_blank">
                <span className="list_img">
                  <img src={rowimg4} alt="쿨리지코너(공유오피스)"></img>
                </span>
                <span className="list_tit">쿨리지코너(공유오피스)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="https://storeuser.space.stayjanda.cloud/?sgc=FVFWKW&sc=22BZC2#/"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">146</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="http://busan.tourbiz.or.kr/kor/CMS/ReqCall/reqCall.do?mCode=MN042"
                target="_blank"
              >
                <span className="list_img">
                  <img src={rowimg5} alt="부산관광기업지원센터(부동산운영관리)"></img>
                </span>
                <span className="list_tit">부산관광기업지원센터(부동산운영관리)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">252</span>
                </span>
              </a>
            </li>
            <li>
              <a href="http://www.gwanganli.co.kr/" target="_blank">
                <span className="list_img">
                  <img src={rowimg6} alt="광안리해양레포츠(액티비티)"></img>
                </span>
                <span className="list_tit">광안리해양레포츠(액티비티)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">363</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://staybongsan.com/" target="_blank">
                <span className="list_img">
                  <img src={rowimg7} alt="머물봉산(스마트 도시재생)"></img>
                </span>
                <span className="list_tit">머물봉산(스마트 도시재생)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">146</span>
                </span>
              </a>
            </li>
            <li>
              <a href="http://hywfarmpark.com/" target="_blank">
                <span className="list_img">
                  <img src={rowimg8} alt="한여울 팜파크(캠핑,체험)"></img>
                </span>
                <span className="list_tit">한여울 팜파크(캠핑,체험)</span>
                <span className="like">
                  <span className="like_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 26.77"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#d7456e;}",
                          }}
                        />
                      </defs>
                      <path
                        className="cls-1"
                        d="M428.7,284.62a8.29,8.29,0,0,0-7.7,5.23,8.29,8.29,0,0,0-16,3.06c-.22,9.87,16,18.53,16,18.47s16.22-8.6,16-18.47A8.36,8.36,0,0,0,428.7,284.62Z"
                        transform="translate(-405 -284.62)"
                      />
                    </svg>
                  </span>
                  <span className="like_txt">273</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="row2">
          <h2 className="row_tit">어떻게 신청하나요?</h2>
          <div className="info_wrap">
            <JDslider
              prevArrow={
                <button className="slick-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20.51 36.77"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: ".cls-2{fill:#333;}",
                        }}
                      />
                    </defs>
                    <rect
                      className="cls-2"
                      x="1002.37"
                      y="522.87"
                      width={3}
                      height={26}
                      transform="translate(1099.01 -320.67) rotate(135)"
                    />
                    <rect
                      className="cls-2"
                      x="1002.37"
                      y="539.13"
                      width={3}
                      height={26}
                      transform="translate(-309.17 -1073.74) rotate(45)"
                    />
                  </svg>
                </button>
              }
              nextArrow={
                <button className="slick-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20.51 36.77"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: ".cls-2{fill:#333;}",
                        }}
                      />
                    </defs>
                    <rect
                      className="cls-2"
                      x="1002.37"
                      y="522.87"
                      width={3}
                      height={26}
                      transform="translate(1099.01 -320.67) rotate(135)"
                    />
                    <rect
                      className="cls-2"
                      x="1002.37"
                      y="539.13"
                      width={3}
                      height={26}
                      transform="translate(-309.17 -1073.74) rotate(45)"
                    />
                  </svg>
                </button>
              }
              appendDots={(dots) => {
                return <ul>{dots}</ul>;
              }}
              slide
            >
              <JDslide>
                <div className="slick-list">
                  <div className="slide_box">
                    <div className="title">
                      <div className="tit">
                        <span>Step1</span> 인플루언서 신청서 작성
                      </div>
                      <div className="txt">
                        인플루언서 신청서의 내용을 입력하세요.<br></br>
                        연락처와 운영하고 있는 SNS 링크를 첨부해주세요.
                      </div>
                    </div>
                    <div className="cont">
                      <img src={row2img1} alt="신청서작성"></img>
                    </div>
                  </div>
                </div>
              </JDslide>
              <JDslide>
                <div className="slick-list">
                  <div className="slide_box">
                    <div className="title">
                      <div className="tit">
                        <span>Step2</span> 심사 후 승인 안내
                      </div>
                      <div className="txt">
                        신청서 내용을 토대로 심사 후<br></br>
                        가입승인 여부를 연락처로 안내해드립니다.
                      </div>
                    </div>
                    <div className="cont">
                      <img src={row2img2} alt="신청서작성"></img>
                    </div>
                  </div>
                </div>
              </JDslide>
              <JDslide>
                <div className="slick-list">
                  <div className="slide_box">
                    <div className="title">
                      <div className="tit">
                        <span>Step3</span> 상품홍보 시작
                      </div>
                      <div className="txt">
                        메이전시에서 제공하는 상품을<br></br>
                        SNS에 게시합니다.
                      </div>
                    </div>
                    <div className="cont">
                      <a
                        href="https://pf.kakao.com/_xmNxcNxb"
                        target="_blank"
                        className="go_btn"
                      >
                        메이전시 카카오페이지<span>로</span>
                        <br></br>
                        <span>바로가기</span>
                      </a>
                      <img src={row2img3} alt="신청서작성"></img>
                    </div>
                  </div>
                </div>
              </JDslide>
            </JDslider>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer_in">
          <div className="ft_info">
            <div onClick={popUpClause} className="info1">
              이용약관
            </div>
            <div onClick={popUpPolicy} className="info2">
              개인정보 취급방침
            </div>
          </div>
          <div className="f_detail_wrap">
            <ul className="f_detail_l">
              <li>
                <span>상호명</span>
                <strong>잔다 (Janda)</strong>
              </li>
              <li>
                <span>대표</span>
                <strong>김화현</strong>
              </li>
              <li>
                <span>주소</span>
                <strong>부산시 남구 전포대로133 WEWORK BIFC 14층</strong>
              </li>
            </ul>
            <ul className="f_detail_r">
              <li>
                <span>사업자등록번호</span>
                <strong>592-55-00270</strong>
              </li>
              <li>
                <span>대표번호</span>
                <strong>070-4128-8244</strong>
              </li>
              <li>
                <span>E-Mail</span>
                <strong>support@stayjanda.com</strong>
              </li>
            </ul>
          </div>
          <div className="partner_wrap">
            <img src={partners1} alt="잔다솔루션"></img>
            <img src={partners2} alt="아마존"></img>
            <img src={partners3} alt="중소벤처기업부"></img>
            <img src={partners4} alt="기술보증기금"></img>
            <img src={partners5} alt="나이스페이먼츠"></img>
            <img src={partners6} alt="부산광역시"></img>
            <img src={partners7} alt="공유경제부산"></img>
          </div>
          <div className="copyright">
            Copyright © 2010-2020 JANDA All Rights Reserved
          </div>
        </div>
      </footer>

      <div className="kakao_icon_wrap">
        <div className="kakao_icon">
          <a href="https://pf.kakao.com/_xmNxcNxb" target="_blank">
            <img width="100%" src={kakao_icon}></img>
          </a>
        </div>
      </div>

      <div className="clause">
        <div className="black_wrap_c">
          <div className="white_bg">
            <h3 className="title">이용약관</h3>
            <button
              onClick={closeC}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.56 15.56">
                <defs>
                  <style
                    dangerouslySetInnerHTML={{ __html: ".cls-3{fill:#fff;}" }}
                  />
                </defs>
                <rect
                  className="cls-3"
                  x="325.11"
                  y="255.09"
                  width={2}
                  height={20}
                  transform="translate(-35.37 -410.26) rotate(45)"
                />
                <rect
                  className="cls-3"
                  x="325.11"
                  y="255.09"
                  width={2}
                  height={20}
                  transform="translate(425.81 -35.37) rotate(135)"
                />
              </svg>
            </button>
            <textarea
              readonly="readonly"
              data-autosize-on="true"
              className="con_txt"
              value={`제1장 총 칙

제1조 (목적 및 적용대상)
              
① 본 약관은 메이전시(이하 ‘회사’라 합니다)이 제공하는 전자지급결제대행서비스,선불전자지급수단의 발행 및 관리서비스,전자고지결제서비스(이하 통칭하여 ‘전자금융거래서비스’라 합니다)를 회원이 이용함에 있어,회사와 회원 간 권리,의무 및 회원의 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다.
② 회사는 통신판매중개자이며 개설된 회사의 주최 및 당사자가 아닙니다.
③ 회사가 제공하는 결제서비스를 이용한 유료행사의 결제금액 정산은 회사가 정한 결제/정산규정에 따릅니다.
④ 개설자 통장입금방식,외부/현장신청 방식을 통한 결제 금액은 본 규정의 적용 대상에 해당하지 않습니다.
              
              
제2조 (정의)
              
① 본 약관에서 정한 용어의 정의는 아래와 같습니다.
1. ‘전자금융거래’라 함은 회사가 전자적 장치를 통하여 전자금융업무를 제공하고,회원이 회사의 종사자와 직접 대면하거나 의사소통을 하지 아니하고 자동화된 방식으로 이를 이용하는 거래를 말합니다.
2. ‘전자지급수단’이라 함은 선불전자지급수단,신용카드 등 전자금융거래법 제2조 제11호에서 정하는 전자적 방법에 따른 지급수단을 말합니다.
3. ‘전자지급거래’라 함은 자금을 주는 자(이하 ‘지급인’이라 합니다)가 회사로 하여금 전자지급수단을 이용하여 자금을 받는 자(이하 ‘수취인’이라 합니다)에게 자금을 이동하게 하는 전자금융거래를 말합니다.
4. ‘전자적 장치’라 함은 전자금융거래정보를 전자적 방법으로 전송하거나 처리하는데 이용되는 장치로서 현금자동지급기,자동입출금기,지급용단말기,컴퓨터,전화기 그 밖에 전자적 방법으로 정보를 전송하거나 처리하는 장치를 말합니다.
5. ‘접근매체’라 함은 전자금융거래에 있어서 거래지시를 하거나 회원 및 거래내용의 진실성과 정확성을 확보하기 위하여 사용되는 수단 또는 정보로서 전자식 카드 및 이에 준하는 전자적 정보(신용카드번호를 포함합니다),전자서명법 상의 전자서명생성정보 및 인증서,금융기관 또는 전자금융업자에 등록된 회원번호,회원의 생체정보,이상의 수단이나 정보를 사용하는데 필요한 비밀번호 등 전자금융거래법 제2조 제10호에서 정하고 있는 것을 말합니다.
6. ‘전자금융거래서비스’라 함은 회사가 회원에게 제공하는 제4조 기재의 서비스를 말합니다.
7. ‘회원’이라 함은 본 약관 제2장과 제3장과 제4장에서 달리 정한 경우를 제외하고는 본 약관에 동의하고 본 약관에 따라 회사가 제공하는 전자금융거래서비스를 이용하는 이용자를 말합니다.
8. ‘거래지시’라 함은 회원이 본 약관에 따라 회사에게 전자금융거래의 처리를 지시하는 것을 말합니다.
9. ‘오류’라 함은 회원의 고의 또는 과실 없이 전자금융거래가 전자금융거래계약 또는 회원의 거래지시에 따라 이행되지 아니한 경우를 말합니다.
10. ‘개설자’라 함은 개설된 행사의 주최자를 이야기합니다.
11. ‘신청자’라 함은 개설된 행사의 참여자를 이야기합니다.
              
              
제3조 (약관의 명시 및 변경)

① 회사는 회원이 전자금융거래를 하기 전에 본 약관을 개별 서비스에 게시하고 본 약관의 중요한 내용을 확인할 수 있도록 합니다.
② 회사는 회원의 요청이 있는 경우 전자문서의 전송(전자우편을 이용한 전송을 포함합니다),모사전송,우편 또는 직접교부의 방식에 의하여 본 약관의 사본을 회원에게 교부합니다.
③ 회사가 본 약관을 변경하는 때에는 그 시행일 1월 전에 변경되는 약관을 금융거래정보 입력화면 또는 개별 서비스의 공지사항 게시판 등에 게시함으로써 회원에게 공지합니다. 다만,법령의 개정으로 인하여 긴급하게 약관을 변경한 때에는 변경된 약관을 홈페이지에 1개월 이상 게시하고 회원에게 전자우편 등을 통하여 사후 통지합니다.
④ 회사는 제3항의 공지나 통지를 할 경우 “회원이 변경에 동의하지 아니한 경우 공지나 통지를 받은 날로부터 30일 이내에 계약을 해지할 수 있으며,계약해지의 의사표시를 하지 아니한 경우에는 변경에 동의한 것으로 본다.”라는 취지의 내용을 공지하거나 통지합니다.
⑤ 회원이 제4항의 공지나 통지를 받은 날로부터 30일 이내에 계약해지의 의사표시를 하지 아니한 경우에는 변경에 동의한 것으로 봅니다.


제4조 (전자금융거래서비스의 구성 및 내용)

① 회원은 행사 개설시 회사의 전자금융거래서비스 이용을 선택할 수 있습니다.
1. 전자지급결제대행서비스
② 전자금융거래서비스는 다음 각 호의 개별 서비스로 구성됩니다.
2. 선불전자지급수단 발행 및 관리서비스
3. 전자고지결제서비스
③ 전자금융거래서비스는 PG사를 통해 제공되며,개설자는 회사로부터 카드단말기를 유료 대여할 수 있습니다.
④ 전자금융거래서비스를 이용하는 경우,개설자는 추후 정산시 아래와 같은 수수료를 부담합니다.
              
결제 수단
수수료
신용카드(국내)    3.2 %
실시간 계좌이체    1.8%
무통장입금(가상계좌) 결제건당 300원
계속
⑤ 회원은 아래와 같은 결제증빙을 제공받습니다.
1. 신용카드매출전표:신용카드 결제 완료시 마이페이지에서 제공합니다.
2. 현금영수증:신청자가 발행을 희망한 경우 회사에서 발행합니다
※ 결제증빙 참고
회사는 개설자의 사업자 등록 여부,영리/비영리 여부를 구분하지 않습니다.
이에 결제서비스 이용 시 발행되는 증빙에 부가세를 분리하지 않고,‘총 결제금액’을 표기합니다.
※ 세금계산서 참고
회사는 별도의 세금계산서를 발급하지 않습니다. 세금계산서 발급이 필요하실 경우에는 개설자에게 직접 발급요청을 진행 하셔야합니다.
⑥ 회사와 개설자는 다음과 같이 유료행사를 정산합니다.
가. 정산 시기와 절차
1) 전자금융거래서비스를 이용하는 유료행사의 정산은 개설자가 설정한 행사기간의 종료일을 기준합니다.
2) 정산 일정과 절차는 개설자와 회사의 사정에 따라 변동될 수 있습니다.
나. 정산정보 전달
1) 정산을 위하여 개설자는 반드시 ‘회사’에 정산정보를 전달 합니다. 정산정보를 전달하지 않은 개설자에 대해서는 정산이 진행되지 않습니다.
(1) 개인:신분증 사본,통장 사본
(2) 사업자:사업자등록증 사본,통장 사본
(3) 비영리,면세사업자:사업자등록증 또는 고유번호증 사본,통장 사본
※ 전달할 연락처:cdo@stayjanda.com / 070-4128-8244
※ 정산정보는 개설자의 명의와 일치해야 합니다.
※ 등록한 정산정보는 직접 변경 등록할 수 없으니 신중히 선택하여 주시기 바랍니다.
※ 개설자가 잘못된 정산정보를 등록하여 발생하는 불이익에 대해 회사는 책임을 지지 않습니다.
다. 정산절차
1) 정산서의 전송
(1) 행사기간 종료 후 회사 영업일 기준 12일 이내 개설자의 이메일로 정산서를 전송합니다.
(2) 개설자는 수령한 정산서를 열람하여,정산내역의 이상 유무를 이메일,전화 등의 방법으로 회사에게 알려줘야 합니다.
☞ 이메일 cdo@stayjanda.com, 전화 070-4128-8244
2) 정산금액의 송금
(1) 정산금액의 송금은 행사기간 종료일로부터 회사 영업일 기준 12일 후에 진행됩니다.
(2) 송금은 회사에서 제공한 정산서에 대해 개설자로부터 이상 없음이 확인된 경우에 진행됩니다.
(3) 총 결제금액에서 본 조 제4항 기재 회사 수수료를 공제한 금액으로 송금합니다.
* 최종 정산금액 = 총 결제금액 – 회사 수수료
(4) 송금 시 회사는 개설자에게 공제한 회사 수수료에 대하여 세금계산서(또는 현금영수증)를 발행합니다.
3) 결제완료 대기자
(1) 결제완료 대기자가 있을 경우,개설자는 회사에게 대기자의 환불 또는 정산포함 여부를 알려줘야 합니다. 결제완료 대기자의 환불 또는 정산포함 여부가 확인되지 않을 경우 정산이 유보될 수 있습니다.
(2) 결제완료 대기자는 이용한 결제수단에 관계 없이 전액 환불됩니다.
(3) 개설자의 정산 안내 미확인,정산서 분실,정산절차의 숙지 부족 등으로 인한 정산 지연에 대하여 회사는 책임지지 않습니다.
라. 정산의 유보
1) 회사는 다음과 같은 사유가 발행하는 경우 정산을 유보할 수 있습니다.
(1) 개설자의 회원정보에 정산정보가 일부만 등록,또는 등록되지 않은 경우
(2) 개설자의 회원정보에 등록된 정산정보의 명의가 서로 일치하지 않을 경우
(3) 회사에서 제공한 정산내역에 대해 개설자가 이상 유무를 알려주지 않은 경우
(4) 개설자가 결제완료 대기자의 환불 또는 정산포함 여부를 회사로 알려주지 않은 경우
(5) 정산 진행 과정에 신청자의 환불,추가 결제 등 정산내역의 변동이 발생할 경우
(6) 개설자가 정산절차를 거부할 경우
(7) 상기 사유 외에 기타 합리적인 사유가 있는 경우
⑦ 결제금액의 국세청 신고는 다음과 같이 진행합니다.
가. 유의 사항
회사 전자금융거래서비스로 결제된 금액은 개설자와 신청자 간의 거래에 해당합니다. 개설자는 회사에서 제공한 정산서를 참고하여 국세청에 직접 결제금액에 대한 부가세 신고 또는 사업자 현황 신고를 해야 합니다.
회사는 국세청 신고에 참고할 정산서를 개설자에게 제공함으로써 사업장으로서 의무를 다하였으므로,미신고분에 대한 책임을 지지 않습니다.
나. 사업자 등록자
1) 행사기간 종료 후 회사에서 제공한 정산서를 참고하여 누락되지 않도록 국세청 신고를 진행하시기 바랍니다.
다. 사업자 미등록자
1) 개인 개설자는 행사 개설 횟수나 정산금액에 따라서 국세청에서 사업자로 판단할 수도 있습니다. 국세청 126 또는 관할 세무서 민원실 등 전문가의 상담을 통해 사업자 등록 여부를 판단하셔야 합니다.
2) 개설자 본인이 사업자 등록을 해야 함에도 불구하고 이를 이행하지 않아 발생하는 불이익에 대해 회사는 책임지지 않습니다.
⑧ 회사는 필요시 회원에게 사전 고지하고 전자금융거래서비스를 추가하거나 변경할 수 있습니다.


제5조 (이용시간)

① 회사는 회원에게 연중무휴 1일 24시간 전자금융거래서비스를 제공함을 원칙으로 합니다. 다만,금융회사 기타 결제수단 발행업자의 사정에 따라 달리 정할 수 있습니다.
② 회사는 정보통신설비의 보수,점검 기타 기술상의 필요나 금융회사 기타 결제수단 발행업자의 사정에 의하여 전자금융거래서비스 중단이 불가피한 경우,전자금융거래서비스 중단 3일 전까지 게시 가능한 전자적 수단을 통하여 전자금융거래서비스 중단 사실을 게시한 후 전자금융거래서비스를 일시 중단할 수 있습니다. 다만,시스템 장애복구,긴급한 프로그램 보수,외부요인 등 불가피한 경우에는 사전 게시 없이 전자금융거래서비스를 중단할 수 있습니다.

              
제6조 (거래내용의 확인)

① 회사는 개별 서비스 내 회원 정보 조회 화면을 통하여 회원의 거래내용(회원의 오류정정 요구사실 및 처리 결과에 관한 사항을 포함합니다)을 확인할 수 있도록 하며,회원이 거래내용에 대해 서면교부를 요청하는 경우에는 요청을 받은 날로부터 2주 이내에 모사전송,우편 또는 직접교부의 방법으로 거래내용에 관한 서면을 교부합니다.
② 회사는 제1항에 따른 회원의 거래내용 서면교부 요청을 받은 경우 전자적 장치의 운영장애,그 밖의 이유로 거래내용을 제공할 수 없는 때에는 즉시 회원에게 전자문서 전송(전자우편을 이용한 전송을 포함한다)의 방법으로 그러한 사유를 알려야 하며,전자적 장치의 운영장애 등의 사유로 거래내용을 제공할 수 없는 기간은 제1항의 거래내용에 관한 서면의 교부기간에 산입하지 아니합니다.
③ 제1항의 대상이 되는 거래내용 중 대상기간이 5년인 것은 다음 각호와 같습니다.
1. 거래계좌의 명칭 또는 번호
2. 전자금융거래의 종류 및 금액
3. 전자금융거래상대방을 나타내는 정보
4. 전자금융거래일시
5. 전자적 장치의 종류 및 전자적 장치를 식별할 수 있는 정보
6. 회사가 전자금융거래의 대가로 받은 수수료
7. 회원의 출금 동의에 관한 사항
8. 해당 전자금융거래와 관련한 전자적 장치의 접속기록
9. 전자금융거래의 신청 및 조건의 변경에 관한 사항
10. 건당 거래금액이 1만원을 초과하는 전자금융거래에 관한 기록
④ 제1항의 대상이 되는 거래내용 중 대상기간이 1년인 것은 다음 각 호와 같습니다.
1. 건당 거래금액이 1만원 이하인 전자금융거래에 관한 기록
2. 전자지급수단의 이용과 관련된 거래승인에 관한 기록
3. 회원의 오류정정 요구사실 및 처리결과에 관한 사항
4. 기타 금융위원회가 고시로 정한 사항
⑤ 회원이 제1항에서 정한 서면교부를 요청하고자 할 경우 다음의 주소 및 전화번호로 요청할 수 있습니다.
주소:부산광역시 남구 전포대로133 WEWORK BIFC 14층
사이트 주소:https://magency.kr
전화번호:070-4128-8244


제7조 (거래지시의 철회 등)

① 회원이 회사의 전자금융거래서비스를 이용하여 전자지급거래를 한 경우,회원은 지급의 효력이 발생하기 전까지 본 약관에서 정한 바에 따라 제6조 제5항에 기재된 주소,전화번호,전자우편주소를 이용한 우편,전화연락,전자문서 전송의 방법으로 또는 개별 서비스 내 철회에 의한 방법으로 거래지시를 철회할 수 있습니다. 단,각 서비스 별 거래지시 철회의 효력 발생시기는 본 약관 제17조,제27조에서 정한 바에 따릅니다.
② 회원은 전자지급의 효력이 발생한 경우에 전자상거래등에서의 소비자보호에 관한 법률 등 관련 법령상 청약의 철회의 방법에 따라 결제대금을 반환 받을 수 있습니다.


제8조 (오류의 정정 등)

① 회원은 전자금융거래서비스를 이용함에 있어 오류가 있음을 안 때에는 회사에 대해 그 정정을 요구할 수 있습니다.
② 회사는 전항의 규정에 따른 오류의 정정요구를 받은 때 또는 스스로 전자금융거래에 오류가 있음을 안 때에는 이를 즉시 조사하여 처리한 후 정정요구를 받은 날 또는 오류가 있음을 안 날부터 2주 이내에 그 결과를 회원에게 알려 드립니다.


제9조 (전자금융거래 기록의 생성 및 보존)

① 회사는 회원이 이용한 전자금융거래의 내용을 추적,검색하거나 그 내용에 오류가 발생한 경우에 이를 확인하거나 정정할 수 있는 기록을 생성하여 보존합니다.
② 제1항의 규정에 따라 회사가 보존하여야 하는 기록의 종류 및 보존방법은 제6조 제3항 및 제4항에 따릅니다.


제10조 (전자금융거래 정보의 제공금지)

① 회사는 전자금융거래서비스를 제공함에 있어서 취득한 회원의 인적사항,회원의 계좌,접근매체 및 전자금융거래의 내용과 실적에 관한 정보 또는 자료를 금융실명법 등 법령에 의하거나 회원의 동의를 얻지 아니하고 제3자에게 제공,누설하거나 업무 상 목적 외에 사용하지 아니합니다.
② 회사는 회원이 안전하게 전자금융거래서비스를 이용할 수 있도록 회원의 개인정보보호를 위하여 개인정보처리방침을 운용합니다. 회사의 개인정보처리방침은 회사의 홈페이지 또는 개별 서비스에 링크된 화면에서 확인할 수 있습니다.


제11조 (회사의 책임)

① 회사는 다음 각호의 사고로 인하여 회원에게 손해가 발생한 경우에는 그 손해를 배상할 책임을 부담합니다.
1. 접근매체의 위조나 변조로 발생한 사고
2. 계약체결 또는 거래지시의 전자적 전송이나 처리과정에서 발생한 사고
3. 전자금융거래를 위한 전자적 장치 또는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호에 따른 정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고
② 회사는 제1항에도 불구하고 다음 각호의 경우에는 그 책임의 전부 또는 일부를 회원이 부담하게 할 수 있습니다.
1. 회원이 접근매체를 제3자에게 대여하거나 그 사용을 위임한 경우 또는 양도나 담보의 목적으로 제공한 경우
2. 제3자가 권한 없이 회원의 접근매체를 이용하여 전자금융거래를 할 수 있음을 알았거나 쉽게 알 수 있었음에도 불구하고 접근매체를 누설하거나 노출 또는 방치한 경우
3. 법인(중소기업기본법제2조 제2항에 의한 소기업을 제외한다)인 회원에게 손해가 발생한 경우로서 회사가 사고를 방지하기 위하여 보안절차를 수립하고 이를 철저히 준수하는 등 합리적으로 요구되는 충분한 주의의무를 다한 경우
③ 회사는 회원으로부터 거래지시가 있음에도 불구하고 천재지변,회사의 귀책사유가 없는 기타의 불가항력적인 사유로 처리 불가능하거나 지연된 경우로서 회원에게 처리 불가능 또는 지연사유를 통지한 경우(금융기관 또는 결제수단발행업자나 통신판매업자가 통지한 경우를 포함합니다)에는 회원에 대해 이로 인한 책임을 부담하지 않습니다.


제12조 (분쟁처리 및 분쟁조정)

① 회원은 회사의 서비스 페이지 하단에 게시된 분쟁처리 담당자 또는 연락처를 통하여 전자금융거래와 관련한 의견 및 불만의 제기,손해배상의 청구 등의 분쟁처리를 요구할 수 있습니다.
② 회원이 회사에 대하여 분쟁처리를 신청한 경우 회사는 15일 이내에 이에 대한 조사 또는 처리 결과를 회원에게 안내합니다.
③ 회원은 회사의 분쟁처리결과에 대하여 이의가 있을 경우 금융위원회의 설치 등에 관한 법률 제51조의 규정에 따른 금융감독원의 금융분쟁조정위원회나 소비자기본법 제60조 제1항의 규정에 따른 한국소비자원의 소비자분쟁조정위원회에 회사의 전자금융거래서비스의 이용과 관련한 분쟁조정을 신청할 수 있습니다.


제13조 (회사의 안전성 확보 의무)

회사는 전자금융거래가 안전하게 처리될 수 있도록 전자금융거래의 종류별로 전자적 전송이나 처리를 위한 인력,시설,전자적 장치 등의 정보기술부문 및 전자금융업무에 관하여 금융위원회가 정하는 기준을 준수합니다.


제14조 (약관 외 준칙)

① 회사와 회원 사이에 개별적으로 합의한 사항이 본 약관에 정한 사항과 다를 때에는 그 합의사항을 본 약관에 우선하여 적용합니다.
② 전자금융거래에 관하여 본 약관에 정하지 않은 사항은 개별약관이 정하는 바에 따릅니다.
③ 본 약관과 전자금융거래에 관한 개별약관에 정하지 아니한 사항(용어의 정의 포함)에 대하여는 다른 합의사항이 없으면 전자금융거래법,여신전문금융업법,전자상거래 등에서의 소비자 보호에 관한 법률 등 관계 법령에서 정한 바에 따릅니다.
제15조 (관할)
회사와 회원 간에 발생한 분쟁에 관한 관할은 민사소송법에서 정한 바에 따릅니다.
제2장 전자지급결제대행 서비스


제16조 (정의)

본 장에서 정하는 용어의 정의는 아래와 같습니다.
1. ‘전자지급결제대행 서비스’라 함은 전자적 방법으로 재화 또는 용역(이하 '재화 등'이라고 합니다)의 구매에 있어서 지급결제 정보를 송신하거나 수신하는 것 또는 그 대가의 정산을 대행하거나 매개하는 서비스를 말합니다.
2. ‘회원’이라 함은 본 약관에 동의하고 회사가 제공하는 전자지급결제대행 서비스를 이용하는 자를 말합니다.


제17조 (거래지시의 철회)

① 회원이 전자지급결제대행 서비스를 이용한 경우 회원은 거래지시된 금액의 정보에 대하여 수취인의 계좌가 개설되어 있는 금융기관 또는 회사의 계좌의 원장에의 입금기록 또는 전자적 장치에의 입력이 끝나기 전까지 거래지시를 철회할 수 있습니다.
② 회사는 회원의 거래지시의 철회에 따라 지급거래가 이루어지지 않은 경우 수령한 자금을 회원에게 반환하여야 합니다.


제18조 (한도 등)

회사의 정책 및 결제업체(이동통신사,카드사 등)의 기준에 따라 회원의 결제수단 별 월 누적 결제액 및 결제한도가 제한될 수 있습니다.


제19조 (접근매체의 관리)

① 회사는 전자지급결제대행 서비스 제공 시 접근매체를 선정하여 회원의 신원,권한 및 거래지시의 내용 등을 확인합니다.
② 회원은 접근매체를 사용함에 있어서 다른 법률에 특별한 규정이 없는 한 다음 각 호의 행위를 하여서는 아니 됩니다.
1. 접근매체를 양도하거나 양수하는 행위
2. 접근매체를 대여하거나 사용을 위임하는 행위
3. 접근매체를 질권 기타 담보 목적으로 하는 행위
4. 1호부터 3호까지의 행위를 알선하는 행위
③ 회원은 자신의 접근매체를 제3자에게 누설 또는 노출하거나 방치하여서는 안되며,접근매체의 도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 합니다.
④ 회사는 회원으로부터 접근매체의 분실이나 도난 등의 통지를 받은 때에는 그 때부터 제3자가 그 접근매체를 사용함으로 인하여 회원에게 발생한 손해를 배상할 책임이 있습니다.
제3장 선불전자지급수단의 발행 및 관리


제20조 (정의)

본 장에서 사용하는 용어의 정의는 다음과 같습니다.
1. ‘선불전자지급수단’이라 함은 회사가 운영하는 웹사이트 및 제휴사 서비스 등에서 재화 또는 용역(이하 ‘재화 등’이라고 합니다)을 구매할 수 있는 이벤트머니 등과 같이 회사가 발행 당시 미리 회원에게 공지한 전자금융거래법 상 선불전자지급수단을 말합니다.
2. ‘충전’이라 함은 선불전자지급수단의 일정액을 확보하기 위해 회사가 지정한 지불수단을 통해 선불전자지급수단을 구매하거나,회사 또는 회사가 지정한 제3자의 서비스 등(이하 ‘서비스 등’이라 합니다)에서의 활동을 통해 선불전자지급수단을 적립 받는 것을 말합니다.
3. ‘회원’이라 함은 본 약관에 동의하고 판매자로부터 재화 등을 구매하고 선불전자지급수단을 결제수단으로 하여 그 대가를 지급하는 자를 말합니다.
4. ‘판매자’라 함은 선불전자지급수단에 의한 거래에 있어서 회원에게 재화 등을 판매하는 자를 말합니다.


제21조 (접근매체의 관리)

① 회사는 회원으로부터 접근매체의 분실 또는 도난 등의 통지를 받기 전에 발생하는 선불전자지급수단에 저장된 금액에 대한 손해에 대하여는 책임지지 않습니다.
② 제2장 결제대행서비스 제19조 제1항 내지 제4항은 본 장에 준용합니다.


제22조 (회원의 자격상실 및 선불전자지급수단 사용제한)

① 회사는 회원이 아래 각 호의 사유에 해당하는 경우 해당 회원에게 전자우편 또는 기타 유효한 수단을 통해 통보하고,회원 자격을 박탈하거나 선불전자지급수단의 사용을 일시적으로 제한할 수 있습니다.
1. 회원 가입시 등록한 개인정보의 전부 또는 일부가 허위임이 밝혀지는 경우
2. 타인의 명의나 개인정보를 도용하여 회원 가입 후 선불전자지급수단을 이용하는 경우
3. 타인의 결제정보 등을 도용하거나 부정한 행위로 거래를 하는 경우
4. 회원의 접근매체를 매매하거나 양도하는 경우
5. 결제수단을 제공하는 사업자가 지정한 방식으로 이용요금을 납부하지 않고 장기 연체하는 경우
6. 다른 회원의 선불전자지급수단 사용을 방해하거나,회사의 선불전자지급수단 제공에 지장을 초래하는 경우
7. 회사가 정한 기간 내에 사용제한 사유를 해소하지 못한 경우
8. 기타 선불전자지급수단 관련한 법령을 위반하는 경우
② 제1항에 해당하는 회원은 해당 사유를 해소한 이후 회사의 승낙에 따라 선불전자지급수단을 다시 사용할 수 있습니다.


제23조 (선불전자지급수단의 충전)

① 회원은 휴대폰,신용카드,무통장입금,기타 회사가 정하는 지불수단으로 선불전자지급수단을 구매하거나,서비스 등에서의 활동으로 회사 또는 회사의 제휴사로부터 적립 받아 선불전자지급수단을 충전할 수 있습니다.
② 회사가 지정한 지불수단을 통한 선불전자지급수단 구매는 제1항에서 규정하는 지불수단 별로 지정된 금액으로 충전을 할 수 있으며,지불수단에 따라 자체 제한금액이 있을 수 있습니다.
③ 무통장입금을 통해 선불전자지급수단 구매신청을 한 경우 회원은 입금신청일로부터 오(5)영업일 이내에 회사가 정한 은행계좌로 입금을 하여야 하며,회사는 입금확인이 된 시점에 선불전자지급수단을 충전합니다. 다만,회원이 해당 기간 내에 구매 금액을 입금하지 않을 경우 구매의사가 없는 것으로 간주하여 구매신청은 자동 취소됩니다.


제24조 (선불전자지급수단 이용 및 차감)

① 회원은 회사가 정한 기한 및 이용방법에 따라 선불전자지급수단을 이용할 수 있으며,회사는 그 구체적인 사항을 본 약관 또는 선불전자지급수단 관련 서비스 페이지를 통해 공지합니다.
② 회원은 서비스 등에서 재화 등을 구매할 때 선불전자지급수단을 지불 수단으로 사용할 수 있습니다.
③ 선불전자지급수단은 재화 등의 구매완료 시점에 즉시 차감됩니다.
④ 회원이 선불전자지급수단을 사용하는 경우 서비스 등에서 적립 받은 무상의 선불전자지급수단(이하 ‘적립선불’이라고 합니다),회원이 구매한 선불전자지급수단(이하 ‘구매선불’이라고 합니다)의 순서로 차감합니다.
⑤ 회원이 선불전자지급수단을 사용한 재화 등의 구매를 취소하는 경우 회사는 재화 등 구매시 사용한 선불전자지급수단을 재충전하는 것을 원칙으로 합니다.


제25조 (선불전자지급수단의 소멸)

① 개별 선불전자지급수단을 마지막으로 이용한 날로부터 육십(60)개월이 경과하는 동안 해당 선불전자지급수단을 한번도 적립하거나 사용하지 않은 경우 회원이 충전한 해당 선불전자지급수단은 자동소멸됩니다.
② 회사는 전항에 따른 선불전자지급수단의 자동소멸 전에 회원에게 소멸예정 사실을 전자우편 등의 방법으로 통지합니다.
③ 본 약관에 대한 동의를 철회하는 경우 적립선불은 소멸되어 환급이 불가능합니다.


제26조 (환급 등)

① 회원은 보유 중인 선불전자지급수단의 환급을 회사에 요구할 경우 구매선불 전액을 환급받을 수 있습니다. 다만,회사로부터 무상제공 받은 적립선불의 경우 환급 대상에서 제외됩니다.
② 다음 각 호의 경우에는 구매선불의 잔액 전부를 환급합니다.
1. 천재지변 등의 사유로 서비스 등에서 재화 또는 용역을 제공하기 곤란하여 선불전자지급수단을 사용하지 못하게 된 경우
2. 선불전자지급수단의 결함으로 서비스 등에서 재화 또는 용역을 제공하지 못하는 경우
3. 회원이 구매선불 잔액의 환급을 요청하는 경우
4. 본 약관에 대한 동의를 철회하는 경우
③ 현금 환급은 회원으로부터 환급 신청이 접수된 후 회원의 입금사실을 확인한 시점에서 제칠(7)영업일 이내에 회원이 지정한 계좌로 현금 입금됩니다.
④ 회원은 회사에서 정한 기한 및 이용방법에 따라 선불전자지급수단을 이용할 수 있으며,회사는 환급 등 구체적인 사항을 개별 선불전자지급수단의 고객센터 페이지를 통해 안내합니다.


제27조 (거래지시의 철회)

회원이 선불전자지급수단을 이용하여 자금을 지급하는 경우 회원은 거래 지시된 금액의 정보가 수취인이 지정한 전자적 장치에 도달하기 전까지 거래지시를 철회할 수 있습니다.


제28조 (선불전자지급수단의 양도금지)

회원은 선불전자지급수단을 양도,판매,담보제공 등의 처분행위를 할 수 없습니다.


제29조 (선불전자지급수단의 한도 등)

① 회사는 선불전자지급수단에 대해 실지명의 당 최고 200만원을 그 보유 한도로 합니다. 단 보유 한도는 회사의 정책에 따라 감액될 수 있습니다.
② 제2장 결제대행서비스 제18조는 본 장에 준용합니다.
부칙

본 약관은 2020년 1월 1일부터 적용됩니다.
`}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="policy">
        <div className="black_wrap_p">
          <div className="white_bg">
            <h3 className="title">개인정보 취급방침</h3>
            <button
              onClick={closeP}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.56 15.56">
                <defs>
                  <style
                    dangerouslySetInnerHTML={{ __html: ".cls-3{fill:#fff;}" }}
                  />
                </defs>
                <rect
                  className="cls-3"
                  x="325.11"
                  y="255.09"
                  width={2}
                  height={20}
                  transform="translate(-35.37 -410.26) rotate(45)"
                />
                <rect
                  className="cls-3"
                  x="325.11"
                  y="255.09"
                  width={2}
                  height={20}
                  transform="translate(425.81 -35.37) rotate(135)"
                />
              </svg>
            </button>
            <textarea
              readonly="readonly"
              data-autosize-on="true"
              className="con_txt"
              value={`메이전시(이하 “회사”)는 회원님의 개인정보를 중요시하며, 개인정보의 보호와 관련하여 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 개인정보 보호법 등 관련법 상의 개인정보 보호 규정을 준수하고 있습니다.

회사는 개인정보처리방침을 통하여 회원님의 개인정보가 남용되거나 유출되지 않도록 최선을 다할 것이며, 회원님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있고, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

회사는 개인정보 처리방침을 홈페이지 첫 화면에 공개함으로써 회원님이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.

단, 본 개인정보 처리방침은 정부의 법령 및 지침의 변경, 또는 보다 나은 서비스의 제공을 위하여 그 내용이 변경될 수 있으니, 회원님들께서는 홈페이지 방문 시 수시로 그 내용을 확인하여 주시기 바라며, 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

0. 개인정보 수집에 대한 동의
회사는 이용자들이 회사의 개인정보 취급방침 또는 이용약관의 내용에 대하여 「동의」버튼 또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.

1.개인정보의 수집 및 이용 목적
'개인정보'라 함은 생존하는 개인에 관한 정보로, 성명, 이메일 주소, 전화번호 등 개인을 식별할 수 있는 정보를 말합니다.

대부분의 메이전시 서비스는 별도의 사용자 등록이 없이 언제든지 볼 수 있습니다.

그러나 회사는 회원서비스등을 통하여 이용자들에게 맞춤 식 서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다.

회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.

첫째, 이용자들의 개인정보를 기반으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스개발이나 콘텐츠의 확충 시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 콘텐츠를 합리적으로 선택하여 제공할 수 있습니다.

둘째, 회사가 제공하는 서비스의 원활한 이용을 위하여 회원은 적법한 동의절차를 거쳐 SNS 업체가 연결을 위한 정보를 회사에 제공하도록 할 수 있습니다. 회사는 연결된 SNS 를 원활한 서비스 제공을 위해 사용자에게서 권한이 허락된 범위 안에서 이를 활용할 수 있으며, 허락되지 않은 범위에 대해서는 절대 활용하지 않습니다. 서비스 이용을 위하여 회원으로부터 추가적인 권한의 요청을 필요로 할 경우, 각 SNS의 인증서비스를 통하여 이에 대한 사전 동의를 반드시 구할 것 입니다.

세째, 회원구분에 따라서 다음의 목적을 위해서 회원정보를 수집, 이용하고 있습니다.

필수 : 성명, E-MAIL, 비밀번호, 휴대전화번호

선택 : 태그, 간단소개

네째, 기타 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.

-서비스 이용기록, 접속 로그, 쿠키, 접속IP 정보, 결제기록: 부정 이용 방지, 비인가 사용 방지 등

다섯째, 회원님의 기본적 인권 침해의 우려가 있는 민감정보 (범죄경력, 유전정보 등)를 수집하지 않습니다.

여섯째, 회원님이 제공하신 모든 정보는 상기 목적에 필요한 용도 이외로는 사용되지 않으며, 수집정보의 범위나 사용목적, 용도가 변경될 시에는 반드시 회원님들께 사전동의를 구할 것 입니다.

위 정보는 가입 당시 정보만 아니라 정보수정으로 변경된 정보를 포함 합니다.

2. 개인정보의 보유 및 이용기간
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 개인정보를 지체 없이 파기합니다.
단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존 합니다.
- 보존 항목 : 쿠키,세션
- 보존 근거 : 회사의 서비스이용약관 및 개인정보취급방침에 동의
- 보존 기간 : 로그아웃 시 삭제
그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
- 보존 항목 : 이름, E-MAIL, 휴대전화번호, 비밀번호, 이용정보, 정산정보, 기업정보
- 보존 근거 : 회사의 서비스이용약관 및 개인정보취급방침에 동의
- 보존 기간 : 회원으로서의 자격을 유지하는 동안

[기타]
1) 계약 또는 청약철회 등에 관한 기록
- 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률
- 보존기간: 5년
( 모임/행사 참가신청 정보는 계약 정보에 해당 합니다. )
2) 대금결제 및 재화 등의 공급에 관한 기록
- 보존근거: 전자상거래 등에서의 소비자보호에 관한 법률
- 보존기간: 5년
3) 소비자의 불만 또는 분쟁처리에 관한 기록
- 보존근거: 전자상거래등에서의 소비자보호에 관한 법률
- 보존기간: 3년
4) 웹사이트 방문기록
-보존근거: 통신비밀보호법
-보존기간: 3개월

3. 개인정보의 파기절차 및 방법
회원님의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
가. 파기절차
- 회원님이 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
- 별도DB로 옮겨진 개인정보는 법률에 의한 경우를 제외하고는 다른 목적으로 이용되지 않습니다.
나. 파기방법
- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
- 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.

4. 개인정보의 제3자 제공 및 공유
가. 회사는 회원님의 개인정보를 제1조에서 고지한 범위 내에서 사용하며, 회원님의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
- 이용자들이 사전에 공개 또는 제3자 제공에 동의한 경우
- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
나. 회사가 제공하는 서비스를 통하여 주문 및 결제가 이루어진 경우 상담 등 거래 당사자간 원활한 의사소통과 배송 및 모임 등 거래이행을 위하여 관련된 정보를 필요한 범위 내에서 거래 당사자에게 제공합니다.

5. 개인정보의 처리 위탁
회사는 서비스 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 현재 회사의 개인정보 위탁처리 기관 및 위탁업무 내용은 다음과 같습니다.

수탁자 | 위탁업무 | 개인정보 보유 및 이용기간
향후 지정예정 | 전자결제 대행 | 회원탈퇴 시 혹은 위탁계약 종료시 까지
향후 지정예정 | SMS 발송 | 회원탈퇴 시 혹은 위탁계약 종료시 까지

6. 회원의 권리와 그 행사방법
가. 회원님은 언제든지 등록되어 있는 본인의 개인정보를 조회하거나 수정할 수 있으며 회원 탈퇴 절차를 통하여 개인정보 이용에 대한 동의 등을 철회할 수 있습니다.
나. 개인정보의 조회/수정을 위해서는 사이트의[마이페이지]내의[회원정보수정] 항목에서 확인 가능하며, 가입 해지(동의철회)는[마이페이지] 상단 메뉴 '탈퇴하기'를 통하여 탈퇴하실 수 있습니다. 이 외에도 회사의 개인정보 보호책임자에게 서면, 전화 또는 이메일로 연락하여 열람/수정/탈퇴를 요청하실 수 있습니다.
다. 회원님이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 회사는 회원님의 요청에 의해 해지 또는 삭제된 개인정보는 제2조에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

7. 회원의 의무
가. 회원님은 자신의 개인정보를 보호할 의무가 있으며, 회원님 본인의 부주의나 인터넷 상의 문제 등으로 개인정보가 유출되어 발생한 문제에 대하여 회사는 일체의 책임을 지지 않습니다.
나. 회원님의 개인정보를 최신의 상태로 정확하게 입력하시기 바랍니다. 회원님의 부정확한 정보입력으로 발생하는 문제의 책임은 회원님 자신에게 있으며, 타인의 주민등록번호 등 개인정보를 도용하여 서비스 이용 시 회원자격 상실과 함께 주민등록법에 의거하여 처벌될 수 있습니다.
다. 회원님은 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 아이디, 비밀번호를 포함한 회원님의 개인정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.
라. 회원님은 『정보통신망이용촉진및정보보호등에관한법률』, 개인정보보호법, 주민등록법 등 기타 개인정보에 관한 법률을 준수하여야 합니다.

8. 링크사이트
회사는 회원님께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부웹사이트 및 자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 회사가 포함하고 있는 링크를 통하여 타 웹사이트의 페이지로 옮겨갈 경우 해당 웹사이트의 개인정보처리방침은 회사와 무관하므로 새로 방문한 웹사이트의 정책을 검토해보시기 바랍니다.

9. 개인정보 자동수집 장치(쿠키 등)의 설치, 운영 및 그 거부에 관한 사항
가. 회사는 회원님들에게 보다 적절하고 유용한 서비스를 제공하기 위하여 회원님의 정보를 수시로 저장하고 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 회원님의 컴퓨터로 전송하는 아주 작은 텍스트 파일로서 회원님의 컴퓨터 하드디스크에 저장됩니다. 회원님께서는 쿠키의 사용여부에 대하여 선택하실 수 있습니다. 단, 쿠키를 사용하지 않아 생기는 서비스 사용의 문제및 제한은 회사가 책임 지지 않습니다.
나. 쿠키 설정 거부 방법
- 회원님은 사용하시는 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키의 저장을 거부할 경우 로그인이 필요한 일부 서비스의 이용에 제한이 생길 수 있음을 양지하시기 바랍니다.
- 쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)
1) [도구] 메뉴에서[인터넷 옵션]을 선택
2) [개인정보]를 클릭
3) [고급]을 클릭
4) 쿠키 허용여부를 선택

10. 개인정보의 기술적/관리적 보호 대책
회사는 회원님의 개인정보를 보호하기 위하여 다음과 같은 보호 대책을 시행하고 있습니다.
가. 비밀번호의 암호화
회원님의 비밀번호는 암호화되어 저장 및 관리되고 있습니다. 비밀번호는 오직 회원 본인만이 알 수 있으며 개인정보를 확인 및 변경할 경우에도 비밀번호를 알고 있는 본인에 의해서만 가능합니다. 따라서 회원님의 비밀번호가 타인에게 알려지지 않도록 각별히 주의하시기 바랍니다.
나. 해킹 및 컴퓨터 바이러스 등에 대비
회사는 해킹이나 컴퓨터 바이러스에 의하여 회원님들의 개인정보가 유출되거나 훼손되는 것을 막기 위하여 필요한 보안조치를 이용하고 있으며, 더욱 향상된 보안조치를 확보할 수 있도록 가능한 모든 기술적 방법을 구비하기 위하여 노력하고 있습니다.
다. 개인정보 처리자의 제한 및 교육
회사는 개인정보를 처리하는 직원을 최소한으로 제한하고 있으며, 관련 직원들에 대한 교육을 수시로 실시하여 본 방침의 이행 및 준수여부를 확인하고 있습니다.

11. 개인정보보호책임자
회원님의 개인정보를 보호하고 개인정보와 관련된 불만 등을 처리하기 위하여 회사는 개인정보보호책임자를 두고 있습니다. 회원님의 개인정보와 관련한 문의사항은 아래의 개인정보보호책임자에게 연락하여 주시기 바랍니다.

고객서비스담당 부서

이메일: support@stayjanda.com

개인정보보호책임자 성명: 김홍찬
소속/직위: 기술전략이사
전화번호: 070-4128-8244
이메일: cdo@stayjanda.com

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
1. 개인분쟁조정위원회(www.1336.or.kr/1336)
2. 정보보호마크인증위원회(www.eprivacy.or.kr/02-580-0533~4)
3. 대검찰청 인터넷범죄수사센터(icic.sppo.go.kr/02-3480-3600)
4. 경찰청 사이버테러대응센터(www.ctrc.go.kr/02-392-0330)

12. 개인정보처리방침의 개정과 그 공지
본 방침은 2020년 1월 1일 부터 시행됩니다. 본 개인정보 처리방침이 변경될 경우 회사는 변경 내용을 그 시행일7일 전부터 홈페이지 ‘공지사항’을 통하여 공지할 예정입니다.`}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
