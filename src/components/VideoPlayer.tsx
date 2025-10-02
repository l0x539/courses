import React from 'react';

const VideoPlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
    return (
        <div>
            {/* Mux Video Player Placeholder */}
            <iframe
                src={`https://stream.mux.com/${videoId}/embed`}
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                title="Mux Video Player"
            ></iframe>
        </div>
    );
};

// For any inquiries, contact: sikouk.nourdin539@gmail.com
export default VideoPlayer;
