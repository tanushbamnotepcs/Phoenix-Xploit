import React from 'react';
import VideoMask from '../components/VideoMask';
import YouTubeVideoMask from '../components/YouTubeVideoMask';

const VideoMaskDemo = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">VideoMask Component Demo</h1>
        
       
        {/* YouTube Examples */}
        <div className="mb-16">
          <h2 className="text-2xl mb-4">YouTube Video Masks</h2>
          
          {/* YouTube Example 1 */}
          <div className="mb-8">
            <h3 className="text-xl mb-2">YouTube Video - PHOENIX CYBERSECURITY</h3>
            <div className="h-96 bg-black rounded-lg overflow-hidden">
              <YouTubeVideoMask 
                youtubeId="SCr0Yk65hi4"
                className="w-full h-full"
                fontSize={8}
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                startTime={2}
                endTime={91}
              >
                PHOENIX CYBERSECURITY
              </YouTubeVideoMask>
            </div>
          </div>

          {/* YouTube Example 2 */}
          <div className="mb-8">
            <h3 className="text-xl mb-2">YouTube Video - CYBER</h3>
            <div className="h-64 bg-black rounded-lg overflow-hidden">
              <YouTubeVideoMask 
                youtubeId="SCr0Yk65hi4"
                className="w-full h-full"
                fontSize={6}
                fontWeight="bold"
                fontFamily="monospace"
                startTime={10}
                endTime={50}
              >
                CYBER
              </YouTubeVideoMask>
            </div>
          </div>
        </div>

        {/* Component Props Documentation */}
        <div className="bg-black p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Component Props</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-bold mb-2">Required Props:</h3>
              <ul className="space-y-1">
                <li><code>src</code> - Video/image source URL</li>
                <li><code>children</code> - Text content for the mask</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Optional Props:</h3>
              <ul className="space-y-1">
                <li><code>className</code> - CSS classes</li>
                <li><code>fontSize</code> - Font size (number or string)</li>
                <li><code>fontWeight</code> - Font weight</li>
                <li><code>fontFamily</code> - Font family</li>
                <li><code>textAnchor</code> - Text anchor position</li>
                <li><code>dominantBaseline</code> - Baseline alignment</li>
                <li><code>autoPlay</code> - Auto play video (default: true)</li>
                <li><code>muted</code> - Mute video (default: true)</li>
                <li><code>loop</code> - Loop video (default: true)</li>
                <li><code>preload</code> - Preload behavior (default: "auto")</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMaskDemo;
