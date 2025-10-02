import { MuxPlayer } from "@mux/mux-player-react";

export default function VideoPlayer({ playbackId, token }) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      metadata={{
        video_id: "video123",
        video_title: "Course Video",
        viewer_user_id: "user123",
      }}
      hls={{
        lowLatencyMode: true,
        token,
      }}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
