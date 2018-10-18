import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import css from "./assets/Contributor.css";
import ContributorTab from "./partial/ContributorTab";
import zhangzhen from "./assets/zhangzhen.png";
import zhiqiu from "./assets/zhiqiu.png";
import yanghongzhuang from "./assets/yanghongzhuang.jpg";
import lichong from "./assets/lichong.jpg";
import xiaolong from "./assets/xiaolong.jpg";
import lbay from "./assets/lbay.png";
import zhouxinyu from "./assets/zhouxingyu.png";
import left from "./assets/left.png";
import right from "./assets/right.png";

class Contributor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState(
      {
        title: formatMessage({ id: "contributor_title" }),
        data: [
          {
            pic: zhangzhen,
            name: formatMessage({ id: "contributorTab_1_name" }),
            gitid: "zxzxzczz",
            tips: [
              formatMessage({ id: "contributorTab_1_tip_1" }),
              formatMessage({ id: "contributorTab_1_tip_2" }),
              formatMessage({ id: "contributorTab_1_tip_3" })
            ]
          },
          {
            pic: zhiqiu,
            name: formatMessage({ id: "contributorTab_7_name" }),
            gitid: "zhiqiuxie",
            tips: [formatMessage({ id: "contributorTab_7_tip_1" })]
          },
          {
            pic: yanghongzhuang,
            name: formatMessage({ id: "contributorTab_2_name" }),
            gitid: "yanghongzhuang",
            tips: [
              formatMessage({ id: "contributorTab_2_tip_1" }),
              formatMessage({ id: "contributorTab_2_tip_2" }),
              formatMessage({ id: "contributorTab_2_tip_3" })
            ]
          },
          {
            pic: xiaolong,
            name: formatMessage({ id: "contributorTab_3_name" }),
            gitid: "xxxllluuu",
            tips: [formatMessage({ id: "contributorTab_3_tip_1" })]
          },
          {
            pic: lichong,
            name: formatMessage({ id: "contributorTab_4_name" }),
            gitid: "ieven",
            tips: [
              formatMessage({ id: "contributorTab_4_tip_1" }),
              formatMessage({ id: "contributorTab_4_tip_2" })
            ]
          },
          {
            pic: lbay,
            name: formatMessage({ id: "contributorTab_5_name" }),
            gitid: "lbay2015",
            tips: [
              formatMessage({ id: "contributorTab_5_tip_1" }),
              formatMessage({ id: "contributorTab_5_tip_2" })
            ]
          },
          {
            pic: zhouxinyu,
            name: formatMessage({ id: "contributorTab_6_name" }),
            gitid: "zxy0728",
            tips: [formatMessage({ id: "contributorTab_6_tip_1" })]
          }
        ]
      },
      () => {
        this.updateSwiper();
      }
    );
  }

  updateSwiper = () => {
    new Swiper(this.swiperID, {
      slidesPerView: 6,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: this.nextID,
        prevEl: this.pervID
      }
    });
  };

  render() {
    const { title, data } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>
          <div className={css.line} />
          <img
            className={css.left}
            ref={self => (this.pervID = self)}
            src={left}
            alt="left"
          />
          <div className={css.swiper}>
            <div
              className="swiper-container"
              ref={self => (this.swiperID = self)}
            >
              <div className="swiper-wrapper">
                {data.map((item, key) => (
                  <ContributorTab key={key} data={item} />
                ))}
              </div>
            </div>
          </div>
          <img
            className={css.right}
            ref={self => (this.nextID = self)}
            src={right}
            alt="right"
          />
        </div>
      </div>
    );
  }
}

export default injectIntl(Contributor);
