Package.describe({
  summary: "Easy background image silders."
});

Package.on_use(function (api, where) {
  api.use(['cycle', 'jquery', 'bootstrap-3'], 'client');
  api.add_files(
    ['lib/js/jquery.maximage.js', 
      'lib/css/jquery.maximage.css'], 'client');
});
