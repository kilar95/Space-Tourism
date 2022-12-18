const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');



tabList.addEventListener("keydown", changeFocus);

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
});

let tabFocused = 0
function changeFocus(event) {
    const keydownRight = 39;
    const keydownLeft = 37;

    if (event.keyCode === keydownRight || event.keyCode === keydownLeft) {
        tabs[tabFocused].setAttribute("tabindex", -1);


        if (event.keyCode === keydownRight) {
            tabFocused++;
            if (tabFocused >= tabs.length) {
                tabFocused = 0;
            }
        } else if (event.keyCode === keydownLeft) {
            tabFocused--;
            if (tabFocused < 0) {
                tabFocused = tabs.length - 1;
            }
        }

        tabs[tabFocused].setAttribute("tabindex", 0);
        tabs[tabFocused].focus();
    }
}




function changeTabPanel(event) {
    const targetTab = event.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");


    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    /* switching panels */
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);

    // mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) => panel.setAttribute("hidden", true));
    // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");


    /* switching pictures */
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);

    // mainContainer.querySelectorAll('picture').forEach((pic) => pic.setAttribute('hidden', true));
    // mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");


    /* switching the active tab */
    tabContainer.querySelectorAll('[role="tab"]').forEach((tab) => tab.setAttribute('aria-selected', false));
    targetTab.setAttribute('aria-selected', true);



    /* refractoring */
    function hideContent(container, content) {
        container
            .querySelectorAll(content)
            .forEach((item) => item.setAttribute('hidden', true));
    }

    function showContent(container, target) {
        container
            .querySelector(target)
            .removeAttribute('hidden');
    }
}