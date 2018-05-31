exports.preloadImages = (array, waitForOtherResources, timeout) => {
  let loaded = false, list = [], imgs = array.slice(0), t = timeout || 15*1000, timer;

  const loadNow = () => {
    if (!loaded) {
      loaded = true;
      for (let i = 0; i < imgs.length; i++) {
        let img = new Image();

        img.onload = img.onerror = img.onabort = () => {
          let index = list.indexOf(this);
          if (index !== -1) {
            list.splice(index, 1);
          }
        };
        list.push(img);
        img.src = imgs[i];
      }
    }
  };

  if (!waitForOtherResources || document.readyState === 'complete') {
    loadNow();
  } else {
    window.addEventListener('load', function() {
      clearTimeout(timer);
      loadNow();
    });
    timer = setTimeout(() => {
      loadNow();
    }, t);
  }
};
exports.resizeSVG = (elDimension, containerDimension) => {
  const elW = elDimension.width;
  const elH = elDimension.height;
  const containerW = containerDimension.width;
  const containerH = containerDimension.height;

  const ratio = elH / elW;
  let w = containerW;
  let h = containerW * ratio;

  if (h < containerH) {
    h = containerH;
    w = h / ratio;
  }

  return {
    width: w,
    height: h,
    x: (containerW - w) / 2,
    y: (containerH - h) / 2
  };
};
