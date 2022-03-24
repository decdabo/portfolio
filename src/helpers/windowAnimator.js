const windowAnimatior = (setWindow, setLine, name) => {
  const nameId = `#${name}`
  const nameDoc = document.querySelector(nameId)
  setTimeout(() => {
    setLine("showLine");
  }, 0);
  setTimeout(() => {
    setWindow("closeWindow");
  }, 500);
  setTimeout(() => {
    nameDoc.click();
  }, 800);
  setTimeout(() => {
    setWindow("");
  }, 1000);
  setTimeout(() => {
    setLine("");
  }, 1500);
};

export default windowAnimatior;
