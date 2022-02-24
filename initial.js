function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
  
include('https://cdn.jsdelivr.net/gh/bmzgm/js@main/l1.js');
include('https://cdn.jsdelivr.net/gh/bmzgm/js@main/l2.js');
include('https://cdn.jsdelivr.net/gh/bmzgm/js@main/l3.js');
include('https://cdn.jsdelivr.net/gh/bmzgm/js@main/l4.js');
include('https://cdn.jsdelivr.net/gh/bmzgm/js@main/l5.js');
include('https://cdn.jsdelivr.net/gh/bmzgm/js@main/l6.js');
