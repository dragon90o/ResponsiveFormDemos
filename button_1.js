let isSwitched = false;

function toggleSwitch() {
    const container = document.querySelector('.Container2');

    if (isSwitched) {
        container.style.transform = 'translateX(0)';
        isSwitched = false;
    } else {
        container.style.transform = 'translateX(100px)';
        isSwitched = true;
    }
}