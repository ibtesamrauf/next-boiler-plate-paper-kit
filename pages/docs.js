// doc Link
// https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar

import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "../components/index-sections/SectionButtons.js";
import SectionNavbars from "../components/index-sections/SectionNavbars.js";
import SectionNavigation from "../components/index-sections/SectionNavigation.js";
import SectionProgress from "../components/index-sections/SectionProgress.js";
import SectionNotifications from "../components/index-sections/SectionNotifications.js";
import SectionTypography from "../components/index-sections/SectionTypography.js";
import SectionJavaScript from "../components/index-sections/SectionJavaScript.js";
import SectionCarousel from "../components/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "../components/index-sections/SectionNucleoIcons.js";
import SectionDark from "../components/index-sections/SectionDark.js";
import SectionLogin from "../components/index-sections/SectionLogin.js";
import SectionExamples from "../components/index-sections/SectionExamples.js";
import SectionDownload from "../components/index-sections/SectionDownload.js";



// for redux
import { getCoursesData } from "../redux/actions/main"
import { connect } from "react-redux"

import { toast } from 'react-toastify';

function Docs(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    props.getCoursesData();
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const { postcode } = props;
  console.log(postcode);
  toast("Wow so easy docs!");

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  postcode: state.form.userData.postcode,
})

const mapDispatchToProps = {
  getCoursesData: getCoursesData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Docs)

