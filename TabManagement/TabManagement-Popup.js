
// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

//mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));

//var testField = d3.select("#test-field");

var tabsData='[{ "title": "Content Security Policy (CSP) - Google Chrome", "url": "https://developer.chrome.com/extensions/contentSecurityPolicy", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "Develop Extensions - Google Chrome", "url": "https://developer.chrome.com/extensions/devguide", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "chrome.storage - Google Chrome", "url": "https://developer.chrome.com/extensions/storage#property-sync", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "chrome.commands - Google Chrome", "url": "https://developer.chrome.com/extensions/commands", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "chrome.windows - Google Chrome", "url": "https://developer.chrome.com/extensions/windows#method-getCurrent", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "chrome.tabs - Google Chrome", "url": "https://developer.chrome.com/extensions/tabs#type-Tab", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "Design User Interface - Google Chrome", "url": "https://developer.chrome.com/extensions/user_interface#popup", "favicon": "https://www.google.com/images/icons/product/chrome-32.png" }, { "title": "Extensions", "url": "chrome://extensions/", "favicon": "" }, { "title": "$mdc-theme-primary: #fcb8ab; - Google Search", "url": "https://www.google.com/search?newwindow=1&rlz=1C1CHBD_enJP867JP867&sxsrf=ACYBGNS84yT2Set5kQ4SrCB6broIkGNFRg%3A1570862128575&ei=MHShXY7jIuuymAX_xpj4Bg&q=%24mdc-theme-primary%3A+%23fcb8ab%3B&oq=%24mdc-theme-primary%3A+%23fcb8ab%3B&gs_l=psy-ab.3..33i160.150350.150350..150736...0.2..0.185.185.0j1......0....2j1..gws-wiz.......0i71.9w9o2EuvEDw&ved=0ahUKEwiOu6i5jZblAhVrGaYKHX8jBm8Q4dUDCAs&uact=5", "favicon": "https://www.google.com/favicon.ico" }, { "title": "html - How to set primary and secondary colors in Material Design Components for Web? - Stack Overflow", "url": "https://stackoverflow.com/questions/52380559/how-to-set-primary-and-secondary-colors-in-material-design-components-for-web", "favicon": "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d" }, { "title": "Figure out how to call Sass mixins from other components, within the baseline of a parent component · Issue #2415 · material-components/material-components-web", "url": "https://github.com/material-components/material-components-web/issues/2415", "favicon": "https://github.githubassets.com/favicon.ico" }, { "title": "material-components-web/theming.md at master · material-components/material-components-web", "url": "https://github.com/material-components/material-components-web/blob/master/docs/theming.md", "favicon": "https://github.githubassets.com/favicon.ico" }, { "title": "ID selectors - CSS: Cascading Style Sheets | MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors", "favicon": "https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png" }, { "title": "D3.js - Data-Driven Documents", "url": "https://d3js.org/", "favicon": "https://d3js.org/favicon.png" }, { "title": "d3-selection/README.md at v1.4.0 · d3/d3-selection", "url": "https://github.com/d3/d3-selection/blob/v1.4.0/README.md#selection_select", "favicon": "https://github.githubassets.com/favicon.ico" }, { "title": "CSS Selectors Reference", "url": "https://www.w3schools.com/cssref/css_selectors.asp", "favicon": "https://www.w3schools.com/favicon.ico" }, { "title": "material-components-web/getting-started.md at master · material-components/material-components-web", "url": "https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md", "favicon": "https://github.githubassets.com/favicon.ico" }, { "title": "material-components-web/scripts at master · material-components/material-components-web", "url": "https://github.com/material-components/material-components-web/tree/master/scripts", "favicon": "https://github.githubassets.com/favicon.ico" }, { "title": "Material Components Web | Catalog", "url": "https://material-components.github.io/material-components-web-catalog/#/component/list", "favicon": "https://material-components.github.io/material-components-web-catalog/static/media/mdc_web_48dp.png" }, { "title": "Lists - Material Components for the Web", "url": "https://material.io/develop/web/components/lists/", "favicon": "https://material.io/develop/images/app-icons/material-logo-app-icon-72x72.png" }, { "title": "Material Components Web | Catalog", "url": "https://material-components.github.io/material-components-web-catalog/#/component/button", "favicon": "https://material-components.github.io/material-components-web-catalog/static/media/mdc_web_48dp.png" }, { "title": "Theme - Material Components for the Web", "url": "https://material.io/develop/web/components/theme/", "favicon": "https://material.io/develop/images/app-icons/material-logo-app-icon-72x72.png" }, { "title": "Theme - Material Components for the Web", "url": "https://material.io/develop/web/components/theme/", "favicon": "https://material.io/develop/images/app-icons/material-logo-app-icon-72x72.png" }, { "title": "TabManagement Popup", "url": "file:///C:/Users/wanghan/GitDir/Tab-Savior/TabManagement/TabManagement-Popup.html" }]'

var tabsList = JSON.parse(tabsData);

//d3.selectAll("p").style("color", "blue");

//console.log(tabsList);

function displayTabList(tabList)
{
    var currentTabList = d3.selectAll("#currentTabList");
    
    currentTabList.html("");
    currentTabList.append('ul')
        .selectAll('li')
        .data(tabList)
        .enter()
        .append('li')
        .text(function (item) { return JSON.stringify(item); })

    // console.log(ul);

    // var temp = ul.selectAll('li');
    // console.log(temp);
    // ul.selectAll('li')
    //     .data(names)
    //     .enter()
    //     .append('li')
    //     .html(String);
}
