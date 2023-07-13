import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as components from "@/pages/Imports";

export const App: React.FC = () => {
  return (
    <Router>
      <components.Update />
      <components.Navbar />
      <components.ScrollToTop />
      <Route
        render={({ location }) => (
          <div id="wrapper" role="main">
            <Switch location={location}>
              <Route exact path="/" component={components.HomePage} />
              <Route
                path="/admin"
                component={() => {
                  window.location.href =
                    "https://rfa-cms-007dbe0be65c.herokuapp.com/";
                  return null;
                }}
              />
              {/* Enroll Pages */}
              <Route
                exact
                path="/enroll/individlearners"
                component={components.IndLearners}
              />
              <Route
                exact
                path="/enroll/schools"
                component={components.Schools}
              />

              {/* Volunteer Pages */}
              <Route
                exact
                path="/volunteer/overview"
                component={components.VolOverview}
              />

              <Route
                exact
                path="/volunteer/teacherpos"
                component={components.TeacherPos}
              />
              <Route
                exact
                path="/volunteer/leadershippositions"
                component={components.LeadershipPositions}
              />
              <Route
                exact
                path="/volunteer/internoverview"
                component={components.InternOverview}
              />
              <Route exact path="/volunteer/publicitypositions">
                <components.PositionsOverviewAll path="/volunteer/publicitypositions" />
              </Route>
              <Route exact path="/volunteer/technicalpositions">
                <components.PositionsOverviewAll path="/volunteer/technicalpositions" />
              </Route>
              <Route exact path="/volunteer/businesspositions">
                <components.PositionsOverviewAll path="/volunteer/businesspositions" />
              </Route>
              <Route exact path="/volunteer/curricdevpositions">
                <components.PositionsOverviewAll path="/volunteer/curricdevpositions" />
              </Route>

              {/* About Pages */}

              <Route
                exact
                path="/about/overview"
                component={components.AbtOverview}
              />
              <Route
                exact
                path="/about/afforgs"
                component={components.AffOrgs}
              />
              <Route
                exact
                path="/about/pastnewsletter"
                component={components.PastNewsletter}
              />
              <Route
                exact
                path="/about/meettheteam"
                component={components.MeetTheTeam}
              />

              {/* Contact Page */}

              <Route exact path="/contact" component={components.Contact} />

              {/* News Page */}

              <Route exact path="/news" component={components.News} />

              {/* More Pages */}

              <Route
                exact
                path="/more-privacypolicy"
                component={components.PrivacyPolicy}
              />
              <Route
                exact
                path="/more-websitetos"
                component={components.WebsiteTOS}
              />
              <Route
                exact
                path="/more-bylaws"
                component={components.CorpBylaws}
              />
              <Route
                exact
                path="/more-meetingrecords"
                component={components.MeetingRecords}
              />

              {/* Donate Pages */}

              <Route exact path="/donate" component={components.Donate} />
              <Route component={components.PageNotFound} />
            </Switch>
          </div>
        )}
      />
      <components.Footer />
    </Router>
  );
};
