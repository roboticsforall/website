import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RFANavbar } from "./components/RFANavbar";
// Base Pages
import { RFAHomePage } from "./pages/RFAHomePage";
import { RFAFooter } from "./components/RFAFooter";
//Enroll
import { RFAIndLearners } from "./pages/Enroll/RFAIndLearners";
import { RFAClassFAQ } from "./pages/Enroll/RFAClassFAQ";
import { RFARegister } from "./pages/Enroll/RFARegister";
//Volunteer
import { RFAVolOverview } from "./pages/Volunteer/RFAVolOverview";
import { RFATeacherPos } from "./pages/Volunteer/RFATeacherPos";
import { RFAPublicityInternPos } from "./pages/Volunteer/RFAPublicityInternPos";
import { RFAVolunteerFAQ } from "./pages/Volunteer/RFAVolunteerFAQ";
import { RFAVolunteerApp } from "./pages/Volunteer/RFAVolunteerApp";
//About
import { RFAAffOrgs } from "./pages/About/RFAAffOrgs";
import { RFAAbtOverview } from "./pages/About/RFAAbtOverview";
import { RFAContact } from "./pages/Contact/RFAContact";
//News
import { RFANews } from "./pages/News/RFANews";
//More
import { RFACorpBylaws } from "./pages/More/RFACorpBylaws";
import { RFAMeetingRecords } from "./pages/More/RFAMeetingRecords";
import { RFAWebsiteTOS } from "./pages/More/RFAWebsiteTOS";
import { RFAPrivacyPolicy } from "./pages/More/RFAPrivacyPolicy";
//Donate
import { RFADonate } from "./pages/Donate/RFADonate";

export const App: React.FC = () => {
  return (
    <Router>
      <RFANavbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={RFAHomePage} />
                <Route path="/about-overview" component={RFAAbtOverview} />
                <Route path="/enroll-classfaq" component={RFAClassFAQ} />
                <Route path="/enroll-individlearners" component={RFAIndLearners} />
                <Route path="/enroll-register" component={RFARegister} />
                <Route path="/volunteer-overview" component={RFAVolOverview} />
                <Route
                  path="/volunteer-volunteerfaq"
                  component={RFAVolunteerFAQ}
                />
                <Route path="/volunteer-teacherpos" component={RFATeacherPos} />
                <Route
                  path="/volunteer-publicitypos"
                  component={RFAPublicityInternPos}
                />
                <Route
                  path="/volunteer-volunteerapp"
                  component={RFAVolunteerApp}
                />
                <Route path="/about-afforgs" component={RFAAffOrgs} />
                <Route path="/contact" component={RFAContact} />
                <Route path="/news" component={RFANews} />
                <Route
                  path="/more-privacypolicy"
                  component={RFAPrivacyPolicy}
                />
                <Route path="/more-websitetos" component={RFAWebsiteTOS} />
                <Route path="/more-bylaws" component={RFACorpBylaws} />
                <Route
                  path="/more-meetingrecords"
                  component={RFAMeetingRecords}
                />
                <Route path="/donate" component={RFADonate} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <br />
      <br />
      <br />
      <RFAFooter />
    </Router>
  );
};
