import toast from "react-hot-toast";

const generateURL = async (image) => {
    let loadingToast = toast.loading("Uploading...")

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qcymnoyp");
    data.append("cloud_name", "diwpoqqju");

    const res = await fetch('https://api.cloudinary.com/v1_1/diwpoqqju/image/upload', {
        method: "POST",
        body: data
    })

    const cloudData = await res.json();
    toast.dismiss(loadingToast)
    return cloudData.url;
}

export default generateURL;