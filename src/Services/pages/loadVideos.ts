// import "../../Components/assets/background video/video"
const videoContext = (require as any).context('../../Components/assets/background video/images', false, /\.(mp4|webm|ogg)$/);

const loadVideoPaths = () => {
    const paths = videoContext.keys().map(videoContext);
    return paths;
};

export default loadVideoPaths;
