import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "@/pages/Navbar";
import { Update } from "@/pages/Update";
import ScrollToTop from "@/pages/ScrollToTop";
// Base Pages
import { HomePage } from "@/pages/HomePage";
import { Footer } from "@/pages/Footer";
//Enroll
import { IndLearners } from "@/pages/Enroll/IndLearners";
import { Schools } from "@/pages/Enroll/Schools";
import { Register } from "@/pages/Enroll/Register";
//Volunteer
import { VolOverview } from "@/pages/Volunteer/VolOverview";
import { TeacherPos } from "@/pages/Volunteer/TeacherPos";
import { InternOverview } from "@/pages/Volunteer/InternOverview";
import { PublicityPositions } from "@/pages/Volunteer/PublicityPositions";
import { TechnicalPositions } from "@/pages/Volunteer/TechnicalPositions";
import { BusinessPositions } from "@/pages/Volunteer/BusinessPositions";
import { CurricDevPositions } from "@/pages/Volunteer/CurricDevPositions";
import { VolunteerApp } from "@/pages/Volunteer/VolunteerApp";
//About
import { AffOrgs } from "@/pages/About/AffOrgs";
import { AbtOverview } from "@/pages/About/AbtOverview";
import { MeetTheTeam } from "@/pages/About/MeetTheTeam";
import { Newsletter } from "@/pages/About/Newsletter";
import { PastNewsletter } from "@/pages/About/PastNewsletter";

//News
import { News } from "@/pages/News/News";
//More
import { CorpBylaws } from "@/pages/More/CorpBylaws";
import { MeetingRecords } from "@/pages/More/MeetingRecords";
import { WebsiteTOS } from "@/pages/More/WebsiteTOS";
import { PrivacyPolicy } from "@/pages/More/PrivacyPolicy";
//Contact
import { Contact } from "@/pages/Contact/Contact";
//Donate
import { Donate } from "@/pages/Donate/Donate";

//Page Redirect
import { PageNotFound } from "@/pages/PageNotFound";

export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Update />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />

                {/* Enroll Pages */}
                <Route
                  exact
                  path="/enroll/individlearners"
                  component={IndLearners}
                />
                <Route exact path="/enroll/schools" component={Schools} />
                <Route exact path="/enroll/register" component={Register} />

                {/* Volunteer Pages */}
                <Route
                  exact
                  path="/volunteer/overview"
                  component={VolOverview}
                />

                <Route
                  exact
                  path="/volunteer/teacherpos"
                  component={TeacherPos}
                />
                <Route
                  exact
                  path="/volunteer/internoverview"
                  component={InternOverview}
                />
                <Route
                  exact
                  path="/volunteer/publicitypositions"
                  component={PublicityPositions}
                />
                <Route
                  exact
                  path="/volunteer/technicalpositions"
                  component={TechnicalPositions}
                />
                <Route
                  exact
                  path="/volunteer/businesspositions"
                  component={BusinessPositions}
                />
                <Route
                  exact
                  path="/volunteer/curricdevpositions"
                  component={CurricDevPositions}
                />
                <Route
                  exact
                  path="/volunteer/volunteerapp"
                  component={VolunteerApp}
                />

                {/* About Pages */}

                <Route exact path="/about/overview" component={AbtOverview} />
                <Route exact path="/about/afforgs" component={AffOrgs} />
                <Route exact path="/about/newsletter" component={Newsletter} />
                <Route
                  exact
                  path="/about/pastnewsletter"
                  component={PastNewsletter}
                />
                <Route
                  exact
                  path="/about/meettheteam"
                  component={MeetTheTeam}
                />

                {/* Contact Page */}

                <Route exact path="/contact" component={Contact} />

                {/* News Page */}

                <Route exact path="/news" component={News} />

                {/* More Pages */}

                <Route
                  exact
                  path="/more-privacypolicy"
                  component={PrivacyPolicy}
                />
                <Route exact path="/more-websitetos" component={WebsiteTOS} />
                <Route exact path="/more-bylaws" component={CorpBylaws} />
                <Route
                  exact
                  path="/more-meetingrecords"
                  component={MeetingRecords}
                />

                {/* Donate Pages */}

                <Route exact path="/donate" component={Donate} />
                <Route component={PageNotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <Footer />
    </Router>
  );
};
