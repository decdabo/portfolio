import React, { useState, useEffect, useRef } from 'react'

export const FilesForm = ({ location: { pathname } }) => {
  const [ component, setComponent ] = useState("");
  const [ preview, setPreview ] = useState()
  const [ pic, setPic ] = useState();
  const [ homePic, setHomePic ] = useState();
  const [ aboutPic, setAboutPic ] = useState();
  const [ skillsPic, setSkillsPic ] = useState();
  const [ contactPic, setContactPic ] = useState();
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const schemaImage = {
      email: 'email@example.com',
      imgBase64: preview
    }
    if (preview) {
      alert(JSON.stringify(schemaImage))
    } else {
      alert('preview null')
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
        setPic(homePic)
        return setComponent("Home Background") 
      case "/about":
        setPic(aboutPic)
        return setComponent("About Background") 
      case "/skills":
        setPic(skillsPic)
        return setComponent("Skills Background") 
      case "/contact":
        setPic(contactPic)  
        return setComponent("Contact Background") 
      default:
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
    <form className='form__routes' onSubmit={handleSubmit}>
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
      <button onClick={handleSubmit}>
        Update <br/> {component}
      </button>
    </form>
  ) 
} 
