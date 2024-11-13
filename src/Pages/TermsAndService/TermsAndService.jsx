import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
    <div className="tos">
        <div className="tos__header padding" id="particles">
            <h1 className="tos__header__heading">Terms of Service</h1>
        </div>
        <div className="tos__body padding">
            <p className="document">
                Welcome to Rhembow Labs! By using our services, you agree to the following terms. Please read them carefully.
                <br /><br />
                <span className="bold-head">DEFINITIONS</span><br /><br />
                1.1 The following definitions apply to this Contract:
                <br /><br />
                <span className="bold">"Rhembow Labs"</span> refers to Rhembow Labs, a creative studio offering video editing, motion graphics, graphic design, visual effects, 3D design and animation, and website design services.
                <br /><br />
                <span className="bold">"Client"</span> refers to any individual or organization that engages Rhembow Labs for its services.
                <br /><br />
                <span className="bold">"Services"</span> refers to the creative services provided by Rhembow Labs as detailed on our website.
                <br /><br />
                <span className="bold-head">AGREEMENT</span> <br /><br />
                2.1 By engaging our services, you agree to comply with the terms outlined in this agreement. 
                <br /><br /> 
                2.2 All projects are subject to the availability of resources and scheduling.
                <br /><br />
                2.3 Clients will receive a detailed proposal before project commencement, outlining the scope of work, timelines, and costs.
                <br /><br />
                2.4 Rhembow Labs reserves the right to use completed work in our portfolio and for promotional purposes unless otherwise agreed in writing.
                <br /><br />
                2.5 All payments are due according to the terms outlined in the project proposal.
                <br /><br />
                2.6 Late payments may result in project delays or additional fees.
                <br /><br />
                2.7 Revisions to projects must be requested within the revision period specified in the project proposal.
                <br /><br />
                2.8 Additional revisions or changes requested after the agreed revision period may incur additional charges.
                <br /><br />
                2.9 Clients are responsible for providing all necessary materials and information required for the completion of the project.
                <br /><br />
                2.10 Rhembow Labs is not liable for any delays or issues caused by the failure of the client to provide necessary information.
                <br /><br />
                <span className="bold-head">REFUND POLICY</span>
                <br /><br />
                3.1 Due to the nature of our services, all sales are final. We do not offer refunds for completed work.
                <br /><br />
                3.2 If the project does not meet the specifications outlined in the proposal, clients must notify Rhembow Labs within 14 days of project delivery to discuss possible resolutions.
                <br /><br />
                3.3 Rhembow Labs will work with the client to resolve any issues with the delivered work within the scope of the original agreement.
            </p>
        </div>
    </div>
</>
	)
}
import "./TermsAndService.scss";

export default TermsAndService;
