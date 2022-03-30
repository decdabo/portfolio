import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { uploadNewBackground } from '../reducers/actions/background';

export const FilesForm = ({ location: { pathname } }) => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth);
  const [ component, setComponent ] = useState("");
  const [ preview, setPreview ] = useState()
  const [ pic, setPic ] = useState();
  const [ homePic, setHomePic ] = useState();
  const [ aboutPic, setAboutPic ] = useState();
  const [ skillsPic, setSkillsPic ] = useState();
  const [ contactPic, setContactPic ] = useState();
  const [ error, setError ] = useState(false);
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const schemaImage = {
      email,
      image: {
        cloudinaryId: '',
        imageURL: preview,
      }
    }
    if (preview) {
      dispatch(uploadNewBackground(pathname, schemaImage));
      setError(false);
      switch (pic) {
        case homePic:
          setPreview(undefined)
          return setHomePic(undefined);
        case aboutPic:
          return setAboutPic(undefined);
        case skillsPic:
          return setSkillsPic(undefined);
        case contactPic: 
          return setContactPic(undefined)
        default:
          break;
      }
    } else {
      setError(true);
    }
  }

  const handleUpload = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  }

  const handleSetComponentValue = (e) => {
    switch (pathname) {
      case "/home":
        return setHomePic(e.target.files[0])
      case "/about":
        return setAboutPic(e.target.files[0])
      case "/skills":
        return setSkillsPic(e.target.files[0])
      case "/contact":
        return setContactPic(e.target.files[0])
      default:
        return null;
    }
  }

  useEffect(() => {
    switch (pathname) {
      case "/home":
        setError(false)
        setPic(homePic)
        return setComponent("Home Background") 
      case "/about":
        setError(false)
        setPic(aboutPic)
        return setComponent("About Background") 
      case "/skills":
        setError(false)
        setPic(skillsPic)
        return setComponent("Skills Background") 
      case "/contact":
        setError(false)
        setPic(contactPic)  
        return setComponent("Contact Background") 
      default:
        setError(false)
        setPic(homePic)
        return setComponent("Home Background")
    }
    // eslint-disable-next-line
  }, [pathname, homePic, aboutPic, skillsPic, contactPic]);

  useEffect(() => {
    if(pic) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(`${reader.result}`)
      }
      reader.readAsDataURL(pic)
    } else {
      setPreview(null)
    }
  }, [pic])

  return (
    <form className='form__routes animate__animated animate__fadeIn' onSubmit={handleSubmit}>
      <label>{component}</label>
      <div style={{ backgroundImage: `url(${preview ? `${preview}` : 'none'})`}} />
      <input 
        accept='image/*' 
        type="file" 
        ref={fileInputRef}
        style={{display: 'none'}}
        onChange={handleSetComponentValue}
      />
      <button type='button' onClick={handleUpload}>
        Upload Image
      </button>
      {error && <h5 className="form__text-alert">Seleccione una Imagen</h5>}
      <button onClick={handleSubmit}>
        Update <br/> {component}
      </button>
    </form>
  ) 
} 
