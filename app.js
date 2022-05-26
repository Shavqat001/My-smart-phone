let phone = document.querySelector('.phone'),
    onOff = document.querySelector('.switch'),
    screen = document.querySelector('.screen'),
    camera = document.querySelector('.camera'),
    mainButton = document.querySelector('.main-button'),
    topClock = document.querySelector('.top-screen-part'),
    bool = true,
    canvasTrueFalse = true,
    f = 'flex',
    n = 'none',
    infl = 'inline-flex',
    b = 'block',
    video = document.querySelector('video'),
    canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    stopButton = document.querySelector('.stop-button'),
    captureButton = document.querySelector('.capture-button'),
    settings = document.querySelector('.settings'),
    listEl1 = document.querySelector('.LiEl1'),
    listEl2 = document.querySelector('.LiEl2'),
    listEl3 = document.querySelector('.LiEl3'),
    listEl4 = document.querySelector('.LiEl4'),
    listEl5 = document.querySelector('.LiEl5'),
    listEl6 = document.querySelector('.LiEl6'),
    firstBg = document.querySelector('.firstBg');
secondBg = document.querySelector('.secondBg'),
    thirdBg = document.querySelector('.thirdBg');


canvas.onclick = () => {
    if (!canvasTrueFalse == 0) {
        canvas.style.width = '340px';
        canvas.style.height = '480px';
        canvas.style.borderRadius = '0%';
        canvas.style.border = '0';
        canvas.style.left = 0;
        canvas.style.top = 0;
        canvas.style.zIndex = 2000;
        canvasTrueFalse = false;
    } else {
        canvas.style.width = '70px';
        canvas.style.height = '70px';
        canvas.style.borderRadius = '50%';
        canvas.style.left = '30px';
        canvas.style.top = '515px';
        canvas.style.border = '2px solid #fff';
        canvas.style.zIndex = 2;
        canvasTrueFalse = true;
    }

}
captureButton.onclick = () => {
    ctx.drawImage(video, 0, 0, 310, 610);
    let captureSound = document.createElement('audio');
    captureSound.src = './sounds/shut.mp3';
    captureSound.autoplay = true;
    document.body.append(captureSound);
    canvas.style.display = b;
}

let leftAnimationPart = document.querySelector('.left-block'),
    leftPhonePart = document.querySelector('.left-phone-part');
leftAnimationPart.onmouseover = () => {
    phone.style.transform = 'perspective(1000px) rotateY(20deg)';
    leftPhonePart.style.transform = 'perspective(500px) rotateY(-40deg)';
    leftPhonePart.style.left = '-19px';
    onOff.style.width = '2px';
    onOff.style.left = '345px';
}
leftAnimationPart.onmouseout = () => {
    phone.style.transform = 'perspective(1000px) rotateY(0deg)';
    leftPhonePart.style.transform = 'perspective(500px) rotateY(-90deg)';
    leftPhonePart.style.left = '-11px';
    onOff.style.width = '7px';
    onOff.style.left = '348px';
}
let rightAnimationPart = document.querySelector('.right-block'),
    rightPhonePart = document.querySelector('.right-phone-part');
rightAnimationPart.onmouseover = () => {
    phone.style.transform = 'perspective(1000px) rotateY(-20deg)';
    rightPhonePart.style.transform = 'perspective(500px) rotateY(40deg)';
    rightPhonePart.style.left = '180px';
    onOff.style.borderRadius = 0;
    onOff.style.left = '353px';
}
rightAnimationPart.onmouseout = () => {
    phone.style.transform = 'perspective(1000px) rotateY(0deg)';
    rightPhonePart.style.transform = 'perspective(500px) rotateY(90deg)';
    rightPhonePart.style.left = '170px';
    onOff.style.borderTopRightRadius = '5px';
    onOff.style.borderBottomRightRadius = '5px';
    onOff.style.left = '348px';
}

let data = new Date(),

    topMenu = document.querySelector('.top-screen-part');

let clockLock = document.querySelector('.locked-clock');
clockLock.textContent = data.getHours() + ":" + data.getMinutes();

let bottomMenu = document.querySelector('.bottom-screen-part'),
    mainClock = document.querySelector('.main-clock'),
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
mainClock.textContent = data.getHours() + ":" + data.getMinutes() + '\n' + dayNames[data.getDay()];
let nullOfClocks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
if (data.getMinutes() < nullOfClocks.length) {
    clockLock.textContent = data.getHours() + ":" + '0' + data.getMinutes();
    mainClock.textContent = data.getHours() + ":" + '0' + data.getMinutes() + '\n' + dayNames[data.getDay()];
}
else if (data.getHours() < nullOfClocks.length) {
    clockLock.textContent = '0' + data.getHours() + ":" + data.getMinutes();
    mainClock.textContent = '0' + data.getHours() + ":" + data.getMinutes() + '\n' + dayNames[data.getDay()];
}
else {
    clockLock.textContent = data.getHours() + ":" + data.getMinutes();
    mainClock.textContent = data.getHours() + ":" + data.getMinutes() + '\n' + dayNames[data.getDay()];
}
let apps = document.getElementsByClassName("apps"),
    input = document.querySelector('input'),
    nums = document.getElementsByClassName('numbers');
for (let i = 0; i < apps.length; i++) {
    apps[i].onclick = () => {
        input.value = '';
    }
}

for (let t = 0; t < nums.length; t++) {
    nums[0].onclick = () => { input.value += 1; }
    nums[1].onclick = () => { input.value += 2; }
    nums[2].onclick = () => { input.value += 3; }
    nums[3].onclick = () => { input.value += 4; }
    nums[4].onclick = () => { input.value += 5; }
    nums[5].onclick = () => { input.value += 6; }
    nums[6].onclick = () => { input.value += 7; }
    nums[7].onclick = () => { input.value += 8; }
    nums[8].onclick = () => { input.value += 9; }
    nums[10].onclick = () => { input.value += 0; }
    nums[11].onclick = () => { input.value = ''; }
    nums[9].onclick = () => {
        if (input.value == 2807) {
            input.style.display = n;
            clockLock.style.display = n;
            nums[0].style.display = n;
            nums[1].style.display = n;
            nums[2].style.display = n;
            nums[3].style.display = n;
            nums[4].style.display = n;
            nums[5].style.display = n;
            nums[6].style.display = n;
            nums[7].style.display = n;
            nums[8].style.display = n;
            nums[9].style.display = n;
            nums[10].style.display = n;
            nums[11].style.display = n;
            if (!bool == 0) {
                screen.style.background = '#111';
                bool = true;
            } else {
                screen.style.background = "url('./img/gallery/soldier.jpg') 50%";
                screen.style.backgroundSize = '125%';
                topMenu.style.opacity = 0.6;
                topMenu.style.display = f;
                bottomMenu.style.display = f;
                mainClock.style.display = f;
                for (let i = 0; i < apps.length; i++) {
                    apps[i].style.display = infl;
                    apps[i].style.width = '50px';
                    apps[i].style.height = '50px';
                    apps[6].onclick = () => {
                        mainClock.style.display = n;
                        apps[0].style.display = n;
                        apps[1].style.display = n;
                        apps[2].style.display = n;
                        apps[3].style.display = n;
                        apps[4].style.display = n;
                        apps[5].style.display = n;
                        apps[6].style.display = n;
                        apps[7].style.display = n;
                        apps[8].style.display = n;
                        apps[9].style.display = n;
                        apps[10].style.display = n;
                        apps[11].style.display = n;
                        apps[12].style.display = n;
                        apps[13].style.display = n;
                        apps[14].style.display = n;
                        apps[15].style.display = n;

                        settings.style.display = f;
                    }
                    let liBool = true;
                    listEl1.onclick = () => {
                        if (!liBool == 0) {
                            listEl2.style.display = n;
                            listEl3.style.display = n;
                            listEl4.style.display = n;
                            listEl5.style.display = n;
                            listEl6.style.display = n;
                            firstBg.style.display = f;
                            secondBg.style.display = f;
                            thirdBg.style.display = f;
                            liBool = false;
                        } else {
                            listEl2.style.display = b;
                            listEl3.style.display = b;
                            listEl4.style.display = b;
                            listEl5.style.display = b;
                            listEl6.style.display = b;
                            firstBg.style.display = n;
                            secondBg.style.display = n;
                            thirdBg.style.display = n;
                            liBool = true;
                        }
                    }
                    firstBg.onclick = () => {
                        screen.style.background = 'url(./img/gallery/road.jpg) 50%';
                        screen.style.backgroundSize = '190%';
                    }
                    secondBg.onclick = () => {
                        screen.style.background = 'url(./img/gallery/soldier.jpg) 50%';
                        screen.style.backgroundSize = '125%';
                    }
                    thirdBg.onclick = () => {
                        screen.style.background = 'url(./img/gallery/front.jpg) 50%';
                        screen.style.backgroundSize = '190%';
                    }
                    apps[11].onclick = () => {
                        video.style.display = b;
                        stopButton.style.display = b;
                        captureButton.style.display = b;
                        topMenu.style.zIndex = 1000;
                        topMenu.style.background = '#000';
                        topMenu.style.height = '180px';
                        navigator.mediaDevices.getUserMedia({
                            video: true
                        }).then(stream => {
                            window.localStream = stream;
                            video.srcObject = stream;
                        }).catch((err) => { console.log(err); });
                    }
                }

                mainButton.onclick = () => {
                    video.style.display = n;
                    stopButton.style.display = n;
                    captureButton.style.display = n;
                    settings.style.display = n;
                    mainClock.style.display = infl;
                    apps[0].style.display = infl;
                    apps[1].style.display = infl;
                    apps[2].style.display = infl;
                    apps[3].style.display = infl;
                    apps[4].style.display = infl;
                    apps[5].style.display = infl;
                    apps[6].style.display = infl;
                    apps[7].style.display = infl;
                    apps[8].style.display = infl;
                    apps[9].style.display = infl;
                    apps[10].style.display = infl;
                    apps[11].style.display = infl;
                    apps[12].style.display = infl;
                    apps[13].style.display = infl;
                    apps[14].style.display = infl;
                    apps[15].style.display = infl;
                    localStream.getVideoTracks()[0].stop();
                    video.src = '';
                    canvas.style.display = n;
                    topMenu.style.zIndex = 0;
                    topMenu.style.background = 'transparent';
                    topMenu.style.height = '23px';
                }
                stopButton.onclick = () => {
                    if (!bool == 0) {
                        video.style.display = b;
                        stopButton.style.display = b;
                        captureButton.style.display = b;
                        navigator.mediaDevices.getUserMedia({
                            video: true
                        }).then(stream => {
                            window.localStream = stream;
                            video.srcObject = stream;
                        }).catch((err) => { console.log(err); });
                        bool = false;
                    } else {
                        localStream.getVideoTracks()[0].stop();
                        video.src = '';
                        bool = true;
                    }
                }
                bool = false;
            }
            let sound = document.createElement('audio');
            sound.src = './sounds/screen-lock.mp3';
            sound.autoplay = true;
            document.body.append(sound);
        } else {
            alert('Uncorrect password. Try again');
            input.value = '';
        }
    }
}

onOff.onclick = () => {
    if (!bool == 0) {
        leftAnimationPart.style.display = n;
        rightAnimationPart.style.display = n;
        screen.style.background = "url('./img/gallery/dog.jpg') 50%";
        screen.style.backgroundSize = '110%';
        input.style.display = f;
        clockLock.style.display = f;
        nums[0].style.display = infl;
        nums[1].style.display = infl;
        nums[2].style.display = infl;
        nums[3].style.display = infl;
        nums[4].style.display = infl;
        nums[5].style.display = infl;
        nums[6].style.display = infl;
        nums[7].style.display = infl;
        nums[8].style.display = infl;
        nums[9].style.display = infl;
        nums[10].style.display = infl;
        nums[11].style.display = infl;
        bool = false;
    } else {
        leftAnimationPart.style.display = f;
        rightAnimationPart.style.display = f;
        screen.style.background = '#111';
        topMenu.style.display = n;
        screen.style.backgroundSize = '70%';
        bottomMenu.style.display = n;
        mainClock.style.display = n;
        clockLock.style.display = n;
        input.value = '';
        input.style.display = n;
        nums[0].style.display = n;
        nums[1].style.display = n;
        nums[2].style.display = n;
        nums[3].style.display = n;
        nums[4].style.display = n;
        nums[5].style.display = n;
        nums[6].style.display = n;
        nums[7].style.display = n;
        nums[8].style.display = n;
        nums[9].style.display = n;
        nums[10].style.display = n;
        nums[11].style.display = n;
        stopButton.style.display = n;
        captureButton.style.display = n;
        video.style.display = n;
        canvas.style.display = n;
        topMenu.style.zIndex = 0;
        topMenu.style.background = 'transparent';
        topMenu.style.height = '23px';
        for (let i = 0; i < apps.length; i++) {
            apps[i].style.display = n;
            apps[i].style.width = '50px';
            apps[i].style.height = '50px';
        }
        let sound = document.createElement('audio');
        sound.src = './sounds/screen-lock.mp3';
        sound.autoplay = true;
        document.body.append(sound);
        bool = true;
        localStream.getVideoTracks()[0].stop();
    }
}
