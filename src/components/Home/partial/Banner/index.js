import React, { Component } from "react";
import { injectIntl, intlShape } from "react-intl";
import Header2 from "../../../shared/Header4";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import BannerTag from "./partial/BannerTag";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import bg4 from "./assets/bg4.jpg";
import bg5 from "./assets/bg5.jpg";
import bg6 from "./assets/bg6.jpg";
import bg7 from "./assets/bg7.jpg";

class Banner extends Component {
  componentDidMount() {
    this.setState(() => {
      this.updateSwiper();
    });
  }

  updateSwiper = () => {
    new Swiper(this.swiperID, {
      slidesPerView: 1,
      autoplay: {
        delay: 6000
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      autoplayDisableOnInteraction: false
    });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const data = [
      {
        bg: bg1,
        title: [formatMessage({ id: "banner_1_title" })],
        word: [
          { title: formatMessage({ id: "banner_1_word_1" }) },
          { title: formatMessage({ id: "banner_1_word_2" }) },
          { title: formatMessage({ id: "banner_1_word_3" }) },
          { title: formatMessage({ id: "banner_1_word_4" }) },
          { title: formatMessage({ id: "banner_1_word_5" }) }
        ]
      },
      {
        bg: bg2,
        title: [formatMessage({ id: "banner_2_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_2_word_1" }),
            desc: [
              formatMessage({ id: "banner_2_word_1_desc_1" }),
              formatMessage({ id: "banner_2_word_1_desc_2" })
            ]
          },
          { title: formatMessage({ id: "banner_2_word_2" }) },
          {
            title: formatMessage({ id: "banner_2_word_3" }),
            desc: [
              formatMessage({ id: "banner_2_word_3_desc_1" }),
              formatMessage({ id: "banner_2_word_3_desc_2" })
            ]
          }
        ]
      },
      {
        bg: bg3,
        title: [formatMessage({ id: "banner_3_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_3_word_1" })
          },
          { title: formatMessage({ id: "banner_3_word_2" }) },
          {
            title: formatMessage({ id: "banner_3_word_3" })
          }
        ]
      },
      {
        bg: bg4,
        title: [formatMessage({ id: "banner_4_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_4_word_1" })
          },
          {
            title: formatMessage({ id: "banner_4_word_2" }),
            desc: [
              formatMessage({ id: "banner_4_word_2_desc_1" }),
              formatMessage({ id: "banner_4_word_2_desc_2" })
            ]
          },
          {
            title: formatMessage({ id: "banner_4_word_3" })
          }
        ]
      },
      {
        bg: bg5,
        title: [
          formatMessage({ id: "banner_5_title" }),
          formatMessage({ id: "banner_5_title_2" })
        ],
        word: [
          {
            title: formatMessage({ id: "banner_5_word_1" })
          },
          { title: formatMessage({ id: "banner_5_word_2" }) },
          {
            title: formatMessage({ id: "banner_5_word_3" })
          },
          {
            title: formatMessage({ id: "banner_5_word_4" })
          },
          {
            title: formatMessage({ id: "banner_5_word_5" })
          },
          {
            title: formatMessage({ id: "banner_5_word_6" })
          }
        ]
      },
      {
        bg: bg6,
        title: [
          formatMessage({ id: "banner_6_title" }),
          formatMessage({ id: "banner_6_title_2" })
        ],
        word: [
          {
            title: formatMessage({ id: "banner_6_word_1" })
          },
          {
            title: formatMessage({ id: "banner_6_word_2" })
          },
          {
            title: formatMessage({ id: "banner_6_word_3" })
          },
          {
            title: formatMessage({ id: "banner_6_word_4" })
          },
          {
            title: formatMessage({ id: "banner_6_word_5" })
          },
          {
            title: formatMessage({ id: "banner_6_word_6" })
          },
          {
            title: formatMessage({ id: "banner_6_word_7" })
          },
          {
            title: formatMessage({ id: "banner_6_word_8" })
          }
        ]
      },
      {
        bg: bg7,
        title: [
          formatMessage({ id: "banner_7_title" }),
          formatMessage({ id: "banner_7_title_2" }),
          formatMessage({ id: "banner_7_title_3" })
        ],
        word: [
          {
            title: formatMessage({ id: "banner_7_word_1" })
          },
          {
            title: formatMessage({ id: "banner_7_word_2" })
          },
          {
            title: formatMessage({ id: "banner_7_word_3" })
          },
          {
            title: formatMessage({ id: "banner_7_word_4" })
          },
          {
            title: formatMessage({ id: "banner_7_word_5" })
          },
          {
            title: formatMessage({ id: "banner_7_word_6" })
          }
        ]
      }
    ];
    return (
      <div
        className="swiper-container"
        style={{ height: "650px", minWidth: "1200px" }}
        ref={self => (this.swiperID = self)}
      >
        <Header2 position="absolute" />
        <div className="swiper-wrapper">
          {data.map((item, key) => (
            <BannerTag key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Banner);
