import React from "react";
import SectionSpacer from "./SectionSpacer";
import PheonixLogoParticles from "./PheonixLogoParticles";
import VideoMask from "./VideoMask";
import YouTubeVideoMask from "./YouTubeVideoMask";

const LandingPage = () => (
    <div className="bg-black w-full">
        <SectionSpacer size="small" />
        <PheonixLogoParticles />
        <SectionSpacer size="none" />
        
        {/* YouTube VideoMask Component with PHOENIX CYBERSEC */}
        <div className="h-screen bg-black flex items-center justify-center">
            <YouTubeVideoMask 
                youtubeId="SCr0Yk65hi4"
                startTime={2}
                endTime={91}
                className="w-full h-full"
                fontSize={10}
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
            >
                PHOENIX{'\n'}CYBERSEC
            </YouTubeVideoMask>
        </div>
    </div>
);

export default LandingPage;