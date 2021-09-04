import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";


import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { RFANavbar } from "./pages/RFANavbar";
// Base Pages
import { RFAHomePage } from "./pages/RFAHomePage";
import { RFAFooter } from "./pages/RFAFooter";
//Enroll
import { RFAIndLearners } from "./pages/Enroll/RFAIndLearners";
import { RFASchools } from "./pages/Enroll/RFASchools";
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
import { RFAMeetTheTeam } from "./pages/About/RFAMeetTheTeam";
import { RFANewsletter } from "./pages/About/RFANewsletter";
import { RFAPastNewsletter } from "./pages/About/RFAPastNewsletter";

//News
import { RFANews } from "./pages/News/RFANews";
//More
import { RFACorpBylaws } from "./pages/More/RFACorpBylaws";
import { RFAMeetingRecords } from "./pages/More/RFAMeetingRecords";
import { RFAWebsiteTOS } from "./pages/More/RFAWebsiteTOS";
import { RFAPrivacyPolicy } from "./pages/More/RFAPrivacyPolicy";
//Contact
import { RFAContact } from "./pages/Contact/RFAContact";
//Donate
import { RFADonate } from "./pages/Donate/RFADonate";

//Page Redirect
import { RFAPageNotFound } from "./pages/RFAPageNotFound";

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

{/* Enroll Pages */}
                <Route
                  exact
                  path="/enroll/individlearners"
                  component={RFAIndLearners}
                />
                <Route exact path="/enroll/schools" component={RFASchools} />
                <Route exact path="/enroll/register" component={RFARegister} />

{/* Volunteer Pages */}
                <Route exact path="/volunteer/overview" component={RFAVolOverview} />

                <Route
                  exact path="/volunteer/volunteerfaq"
                  component={RFAVolunteerFAQ}
                />
                <Route exact path="/volunteer/teacherpos" component={RFATeacherPos} />
                <Route
                  exact path="/volunteer/publicitypos"
                  component={RFAPublicityInternPos}
                />
                <Route
                  exact path="/volunteer/volunteerapp"
                  component={RFAVolunteerApp}
                />

{/* About Pages */}

                <Route exact path="/about/overview" component={RFAAbtOverview} />
                <Route exact path="/about/afforgs" component={RFAAffOrgs} />
                <Route exact path="/about/newsletter" component={RFANewsletter} />
                <Route exact path="/about/pastnewsletter" component={RFAPastNewsletter} />
                <Route exact path="/about/meettheteam" component={RFAMeetTheTeam} />

{/* Contact Page */}

                <Route exact path="/contact" component={RFAContact} />

{/* News Page */}

                <Route exact path="/news" component={RFANews} />

{/* More Pages */}

                <Route
                  exact path="/more-privacypolicy"
                  component={RFAPrivacyPolicy}
                />
                <Route exact path="/more-websitetos" component={RFAWebsiteTOS} />
                <Route exact path="/more-bylaws" component={RFACorpBylaws} />
                <Route
                  exact path="/more-meetingrecords"
                  component={RFAMeetingRecords}
                />

{/* Donate Pages */}

                <Route exact path="/donate" component={RFADonate} />
                <Route component = {RFAPageNotFound}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <RFAFooter />
    </Router>
  );
};
