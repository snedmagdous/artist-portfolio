// gatsby-browser.js
export const shouldUpdateScroll = () => {
  // Force immediate scroll to top on every navigation
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 0);
  
  return false; // Disable Gatsby's scroll restoration
};