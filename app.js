window.addEventListener('load', async e => {

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('/sw.js', {scope: '/'})
      console.log('SW Registered');
    } catch (error) {
      console.log('SW Registration Failed');
    }
  }

});
