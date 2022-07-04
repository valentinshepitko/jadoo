document.addEventListener("DOMContentLoaded", function(event) {

// ADD CLASSES FOR TAB START
    const tabs = document.querySelectorAll('.tab-nav-item');
    const tabsContent = document.querySelectorAll('.tab-container');

    for (let i =0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
                tabsContent[j].classList.remove('open');

                tabs[j].parentElement.classList.remove('active');
            }
            this.classList.add('active');

            this.parentElement.classList.add('active');

            tabsContent[i].classList.add('open');
        })
    }
    // ADD CLASSES FOR TAB THE END


    // RESET PLACEHOLDER INPUT ON CLICK START
    let form_input = document.querySelectorAll('.input_frm');

    if (form_input) {
        for (let i = 0; i < form_input.length; i++) {
            form_input[i].addEventListener('click', function () {
                let thisElement = this;

                let savePlaceholder = this.getAttribute('placeholder');

                this.setAttribute('placeholder', ' ');
                document.addEventListener('mouseup', function () {
                    thisElement.setAttribute('placeholder', savePlaceholder);
                });
            });
        }
    }
    // REST PLACEHOLDER INPUT ON CLICK THE END


});