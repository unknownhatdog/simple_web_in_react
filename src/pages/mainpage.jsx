import Foot from "../components/footer";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { DashBoard } from "./dashboard";
import { LearningMaterial } from "./learingmaterial";
import { PracticeTestAndQuiz } from "./practicetestandquiz";
import { LearningResources } from "./learningresources";

import { whatIsClickedTemp } from "../feature/opensidebarSlice";
import { useSelector } from 'react-redux';

export const MainPage = () => {

    const whatIsClicked = useSelector(whatIsClickedTemp);

    var container = '';
    if (whatIsClicked == 'dashboard') container = <DashBoard />;
    if (whatIsClicked == 'practicetestandquiz') container = <PracticeTestAndQuiz />;
    if (whatIsClicked == 'learningresources') container = <LearningResources />;
    if (whatIsClicked == 'learningmaterial') container = <LearningMaterial />;
    
    return (
        <>
            <Navbar />
            <Sidebar />
            {container}
        </>

    );
}
