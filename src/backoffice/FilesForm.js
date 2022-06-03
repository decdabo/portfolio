import React, { useState, useEffect, useRef, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uploadNewBackground } from "../reducers/actions/background";
import { imagesReducer, initialState } from './imagesReducer'
import { picTypes } from "./types";

export const FilesForm = ({ location: { pathname } }) => {
  const { auth: { email }, bg: { images } } = useSelector((state) => state);
  const [{ component, placeHolder, pic, preview }, dispatchDataImages ] = useReducer(imagesReducer, initialState);
  const [error, setError] = useState(false);
  const fileInputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const schemaImage = {
      email,
      image: {
        cloudinaryId: "",
        imageURL: preview,
      },
    };
    if (preview) {
      dispatch(uploadNewBackground(pathname, schemaImage));
      dispatchDataImages({ type: pic });

      return setError(false);
    } else {
      setError(true);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleSetComponentValue = (e) => {
    dispatchDataImages({
      type: pathname,
      payload: e.target.files[0],
    });
  };

  useEffect(() => {
    setError(false);
    dispatchDataImages({
      type: pathname,
      payload: {
        ...images
      },
    });

    // eslint-disable-next-line
  }, [pathname, images, placeHolder]);

  useEffect(() => {
    if (pic) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatchDataImages({
          type: picTypes.preview,
          payload: `${reader.result}`
        })
      };
      reader.readAsDataURL(pic);
    } else {
      dispatchDataImages({
        type: picTypes.preview,
        payload: placeHolder
      })
    }
  }, [pic, placeHolder]);

  return (
    <form
      className="form__routes animate__animated animate__fadeIn"
      onSubmit={handleSubmit}
    >
      <label>{component}</label>
      <div
        style={{ backgroundImage: `url(${preview ? `${preview}` : "none"})` }}
      />
      <input
        accept="image/*"
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleSetComponentValue}
      />
      <button type="button" onClick={handleUpload}>
        Upload Image
      </button>
      {error && <h5 className="form__text-alert">Select an image</h5>}
      <button onClick={handleSubmit}>
        Update <br /> {component}
      </button>
    </form>
  );
};
