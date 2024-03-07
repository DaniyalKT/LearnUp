import React from "react";
import "./Features.css";
import { IoIosInfinite } from "react-icons/io";
import { TfiMedall } from "react-icons/tfi";
import { TfiVideoCamera } from "react-icons/tfi";

export default function Features() {
  return (
    <div className="featurs">
      <div className="featurItem">
        <div className="featurIcon">
          <IoIosInfinite />
        </div>
        <div className="descriptionSection">
          <h4 className="featurTitle">دوره آموزشی آنلاین</h4>
          <span className="featurText">
            کلاس تدریس خصوصی با معلم خصوصی با امکانات کامل را امتحان کنید.
          </span>
        </div>
      </div>

      <div className="featurItem">
        <div className="featurIcon">
          <TfiMedall />
        </div>
        <div className="descriptionSection">
          <h4 className="featurTitle">ارائه مدرک معتبر</h4>
          <span className="featurText">
            این موارد کاملاً ساده هستند و به راحتی قابل تشخیص هستند.
          </span>
        </div>
      </div>

      <div className="featurItem">
        <div className="featurIcon">
          <TfiVideoCamera />
        </div>
        <div className="descriptionSection">
          <h4 className="featurTitle">100,000 مدرس با تجربه</h4>
          <span className="featurText">
            با بیست درصد تخفیف تدریس را در کلاس آنلاین تجربه کنید.
          </span>
        </div>
      </div>
    </div>
  );
}
