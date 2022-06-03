import { navTypes } from "../reducers/types/navtypes";

export const globalWindowAnimatior = (setWindowState, name) => {
  const nameId = `#${name}`
  const nameDoc = document.querySelector(nameId)
  setWindowState(navTypes.setDisplay);

  setTimeout(() => {
    setWindowState(navTypes.setLine);
  }, 100);

  setTimeout(() => {
    setWindowState(navTypes.setWindow);
  }, 500);

  setTimeout(() => {
    nameDoc.click();
  }, 800);
  setTimeout(() => {
    setWindowState(navTypes.setWindow);
  }, 1000);

  setTimeout(() => {
    setWindowState(navTypes.setLine);
  }, 1500);

  setTimeout(() => {
    setWindowState(navTypes.setDisplay);
  }, 1600)
};


export const windowAnimatior = (setWindow, setLine, name) => {
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

