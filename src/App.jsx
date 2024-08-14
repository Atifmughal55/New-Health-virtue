import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SignIn from "./pages/SignIn";
import ForgetPass from "./pages/ForgetPass";
import EmailNoti from "./pages/EmailNoti";
import CreatePassword from "./pages/CreatePassword";
import OTPVerify from "./pages/OTPVerify";
import ResetPassword from "./pages/ResetPassword";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import SignUpStart from "./pages/SignUpStart";
import SignUp from "./pages/SignUp";
import Privacy from "./pages/Privacy";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import AddRoutine from "./pages/AddRoutine";
import Exercise from "./pages/Exercise";
import Report from "./pages/Report";
import GuardianDashboard from "./pages/GuardianDashboard";
import AddPatient from "./pages/AddPatient";
import SelectLanguage from "./pages/SelectLanguage";
import UserProfile from "./pages/UserProfile";
import ReminderSettings from "./pages/ReminderSettings";
import Tutorial from "./pages/Tutorial";
import { Profile } from "./pages/Profile";
import Alarm from "./pages/Alarm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up-start" element={<SignUpStart />} />
        <Route path="/forgot-password" element={<ForgetPass />} />
        <Route path="/open-mail" element={<EmailNoti />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/new-password" element={<CreatePassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/my-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/add-daily-routine" element={<AddRoutine />} />
        <Route path="/my-exercise" element={<Exercise />} />
        <Route path="/my-report" element={<Report />} />
        <Route path="/guardian-dashboard" element={<GuardianDashboard />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/languages" element={<SelectLanguage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/reminder-settings" element={<ReminderSettings />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/patient-profile" element={<Profile />} />
        <Route path="/alarm" element={<Alarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
