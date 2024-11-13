import React from "react";
import "./Portfolio.scss";
import { useState, useEffect } from "react";

import VideoEditing from "../../components/VideoEditing/VideoEditing";
import MotionGraphics from "../../components/MotionGraphics/MotionGraphics";
import GraphicDesign from "../../components/GraphicDesign/GraphicDesign";
import VisualEffects from "../../components/VisualEffects/VisualEffects";
import ThreedAnimation from "../../components/ThreedAnimation/ThreedAnimation";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function Portfolio(props) {
    // Animation Initiation
    useEffect(() => {
        tsParticles.load("particles", particles);
    }, []);

    // State to switch between Categories
    const [tab, setTab] = useState("videoEditing");

    return (
        <>
            <div className="portfolio">
                <div className="portfolio__header padding" id="particles">
                    <h1 className="portfolio__header__heading">OUR WORKS</h1>

                    <div className="category-menu">
                        <div
                            className={`btn-category ${
                                tab === "videoEditing" ? "btn-active" : ""
                            }`}
                            onClick={() => setTab("videoEditing")}
                        >
                            Video Editing
                        </div>
                        <div
                            className={`btn-category ${
                                tab === "motionGraphics" ? "btn-active" : ""
                            }`}
                            onClick={() => setTab("motionGraphics")}
                        >
                            Motion Graphics
                        </div>
                        <div
                            className={`btn-category ${
                                tab === "graphicDesign" ? "btn-active" : ""
                            }`}
                            onClick={() => setTab("graphicDesign")}
                        >
                            Graphic Design
                        </div>
                        <div
                            className={`btn-category ${
                                tab === "visualEffects" ? "btn-active" : ""
                            }`}
                            onClick={() => setTab("visualEffects")}
                        >
                            Visual Effects
                        </div>
                        <div
                            className={`btn-category ${
                                tab === "threedAnimation" ? "btn-active" : ""
                            }`}
                            onClick={() => setTab("threedAnimation")}
                        >
                            3D Design & Animation
                        </div>
                    </div>
                </div>

                <div className="cat-display padding">
                    {tab === "videoEditing" && <VideoEditing />}
                    {tab === "motionGraphics" && <MotionGraphics />}
                    {tab === "graphicDesign" && <GraphicDesign />}
                    {tab === "visualEffects" && <VisualEffects />}
                    {tab === "threedAnimation" && <ThreedAnimation />}
                    {tab === "websiteDesign" && <WebsiteDesign />}
                </div>
            </div>
        </>
    );
}

import "./Portfolio.scss";

export default Portfolio;