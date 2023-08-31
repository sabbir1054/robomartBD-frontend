import React from "react";
import ImageUploading from "react-images-uploading";
import styles from "./ImageUploader.module.scss";
const ImageUploader = ({ images, setImages }) => {
  let imageBase64 = images[0]?.data_url;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit

    setImages(imageList);
  };
  return (
    <>
      <ImageUploading
        // multiple
        value={images}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              className={styles.uploadBtn}
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              {imageList.length > 0 ? (
                <img
                  src={imageBase64}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                `Click or Drop here `
              )}
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div className="image-item__btn-wrapper">
                  <button
                    onClick={() => onImageUpdate(index)}
                    className={styles.imageChangeBtn}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onImageRemove(index)}
                    className={styles.imageChangeBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default ImageUploader;
