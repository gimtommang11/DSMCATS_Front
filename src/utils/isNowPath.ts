const isNowPath = (pathName: string) => {
  const currentPathName: string = window.location.pathname;

  if (pathName === currentPathName) {
    return true;
  } else {
    return false;
  }
};

export default isNowPath;
