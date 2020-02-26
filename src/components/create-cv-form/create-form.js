import React from "react";
import MultiStep from './multistep';
import PrimaryForm from './step-primary-info';
import Objectives from './step-objectives';
import Education from './step-education';
import Experience from './step-experience';
import Skills from './step-skills';
import Projects from './step-projects';
import CoCurricular from './step-co-curriculam';
import References from './step-references';
import '../../assets/css/multistep.css';
import '../../assets/css/validation.css';

const CreateCVForm = () => {
    const steps = [
        {name: 'Personal', component: <PrimaryForm/>},
        {name: 'Objectives', component: <Objectives/>},
        {name: 'Education', component: <Education/>},
        {name: 'Experience', component: <Experience/>},
        {name: 'Skills', component: <Skills/>},
        {name: 'Projects', component: <Projects/>},
        {name: 'CoCurricular', component: <CoCurricular/>},
        {name: 'References', component: <References/>}
    ];

    return (
        <div className="cf-steps">
            <MultiStep steps={steps} />
        </div>
    )
}
export default CreateCVForm;