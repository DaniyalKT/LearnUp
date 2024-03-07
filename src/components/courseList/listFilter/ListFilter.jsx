import React, { useId } from "react";
import "./ListFilter.css";
import { RxCross2 } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";

export default function ListFilter(props) {
  const filterID = useId()
  return (
    <div
      className={
        props.showFilterList == "block"
          ? "filterContainer openFillter"
          : "filterContainer"
      }
    >
      <div className="fillterWrapper">
        <div className="filterHeader">
          <h4 className="filterTitle">جستجوی پیشرفته</h4>
          <RxCross2
            className="closeFilterIcon"
            onClick={() => props.setShowFilterList("")}
          />
        </div>

        <form className="fillterSearchBox">
          <button>
            <IoSearchSharp />
          </button>
          <input type="text" placeholder="جستجو دوره" />
        </form>

        <h4>دسته بندی دوره</h4>
        <ul className="checkFilter">
          <li>
            <input id={filterID + 'programming'} type="checkbox" />
            <label for={filterID + 'programming'}>برنامه نویسی (3)</label>
          </li>
          <li>
            <input id={filterID + 'web-developer'} type="checkbox" />
            <label for={filterID + 'web-developer'}>طراحی سایت (2)</label>
          </li>
          <li>
            <input id={filterID + 'General'} type="checkbox" />
            <label for={filterID + 'General'}>عمومی (2)</label>
          </li>
          <li>
            <input id={filterID + 'it'} type="checkbox" />
            <label for={filterID + 'it'}>فناوری اطلاعات</label>
          </li>
          <li>
            <input id={filterID + 'graphics'} type="checkbox" />
            <label for={filterID + 'graphics'}>گرافیک (2)</label>
          </li>
          <li>
            <input id={filterID + 'network'} type="checkbox" />
            <label for={filterID + 'network'}>شبکه و امنیت</label>
          </li>
        </ul>

        <h4>مدرسین</h4>
        <ul className="checkFilter">
          <li>
            <input id={filterID + 'teacher1'} type="checkbox" />
            <label for={filterID + 'teacher1'}>حسام موسوی (4)</label>
          </li>
          <li>
            <input id={filterID + 'teacher2'} type="checkbox" />
            <label for={filterID + 'teacher2'}>مهرداد عظیمی (2)</label>
          </li>
          <li>
            <input id={filterID + 'taeacher3'} type="checkbox" />
            <label for={filterID + 'taeacher3'}>الهام کریمی (2)</label>
          </li>
          <li>
            <input id={filterID + 'teacher4'} type="checkbox" />
            <label for={filterID + 'teacher4'}>مسعود راد</label>
          </li>
          <li>
            <input id={filterID + 'teacher5'} type="checkbox" />
            <label for={filterID + 'teacher5'}>مهدی کشاورز (2)</label>
          </li>
          <li>
            <input id={filterID + 'teacher6'} type="checkbox" />
            <label for={filterID + 'teacher6'}>شادی عبدی</label>
          </li>
        </ul>

        <h4>نوع دوره</h4>
        <ul className="checkFilter">
          <li>
            <input id={filterID + 'allCourse'} type="checkbox" />
            <label for={filterID + 'allCourse'}>همه (75)</label>
          </li>
          <li>
            <input id={filterID + 'feeCourse'} type="checkbox" />
            <label for={filterID + 'feeCourse'}>رایگان (15)</label>
          </li>
          <li>
            <input id={filterID + 'cachCourse'} type="checkbox" />
            <label for={filterID + 'cachCourse'}>نقدی (60)</label>
          </li>
        </ul>
        <button className="fillterSubmit">فیلتر کن</button>
      </div>
    </div>
  );
}
