import React, { useContext, useState } from "react";
import Styles from "./_profile.module.css";
import { toast } from "react-toastify";
import { storage } from "../../apis/Firebase";
import { updateProfile } from "firebase/auth";
import {ref as photoRef,getDownloadURL,uploadBytesResumable} from "firebase/storage";
import { AuthContext } from "../../apis/AuthContextApi";

const UploadPhoto = () => {
  let { authUser } = useContext(AuthContext);

  let [photo, setPhoto] = useState("");
  let [photoView, setPhotoView] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  let [progressBar, setProgressBar] = useState(0);
  let [statusBar, setStatusBar] = useState(false);

  // ! to store image data
  let handleChange = e => {
    let files = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = function (e) {
      setPhotoView(e.target.result);
    };
    setPhoto(files);
  };
  //   console.log(photoView);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      // ! set storage location in firebase
      let storageLocation = photoRef(storage, "profile-photo/" + photo.name);
      let uploadImageTask = uploadBytesResumable(storageLocation, photo);
      // firebase events
      //!on function accepts one event name then three callback functions 1.progress bar 2.error handling 3.task completion
      uploadImageTask.on(
        "state_changed",
        snapshot => {
          let progressBarData =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //progress bar
          setProgressBar(progressBarData);
          setStatusBar(true);
          setIsLoading(true);
          setPhotoView(null);
        },
        err => {
          toast.error(err.code);
          //error handling
        },
        async () => {
          //task completion
          let DownloadUrl = await getDownloadURL(storageLocation);
          updateProfile(authUser, { photoURL: DownloadUrl });
          setIsLoading(false);
          setStatusBar(false);
          toast.success("Successfully profile photo updated");
          window.location.assign("/profile");
        }
      );
      console.log(uploadImageTask);
    } catch (error) {
      toast.error(error.code);
    }
  };

  let ProgressUI = () => {
    return (
      <div className={Styles.progress}>
        <p className="bar" style={{ width: `${progressBar} %` }}>
          {progressBar} %
        </p>
      </div>
    );
  };

  return (
    <section className={Styles.profilePhotoBlock}>
      <h1>Upload Profile Photo</h1>
      <article>
        {statusBar === true ? <ProgressUI /> : ""}
        <figure>
          {photoView === null ? "" : <img src={photoView} alt="photoView" />}
        </figure>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Upload Photo</label>
            <input
              type="file"
              name="uploadPhoto"
              id="uploadPhoto"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button>upload</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UploadPhoto;
