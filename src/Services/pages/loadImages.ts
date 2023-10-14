// import images from "../../Components/assets/background video/images"
const imageContext = (require as any).context('../../components/assets/background video/images', false, /\.(jpg|jpeg|png)$/);


const loadImagePaths = () => {
    const paths = imageContext.keys().map(imageContext);
    return paths;
};

export default loadImagePaths;
