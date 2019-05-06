import fs from 'fs-extra';

// Clean vendor folders
fs.emptyDirSync('assets/plugins');
fs.emptyDirSync('_sass/bootstrap');

// jQuery
fs.copySync('node_modules/jquery/dist/jquery.min.js',
    'assets/plugins/jquery.min.js');

// Popper.js
fs.copySync('node_modules/popper.js/dist/popper.min.js',
    'assets/plugins/popper.min.js');

// Bootstrap
fs.copySync('node_modules/bootstrap/scss', '_sass/bootstrap/scss');
fs.copySync('node_modules/bootstrap/dist/js', 'assets/plugins/bootstrap/js');

// Flickity
fs.copySync('node_modules/flickity/dist/flickity.min.css',
    'assets/plugins/flickity/flickity.min.css');
fs.copySync('node_modules/flickity/dist/flickity.pkgd.min.js',
    'assets/plugins/flickity/flickity.pkgd.min.js');

// Font Awesome
fs.copySync('node_modules/@fortawesome/fontawesome-free/js/all.min.js',
    'assets/plugins/fontawesome.min.js');