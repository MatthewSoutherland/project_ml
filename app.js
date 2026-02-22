
document.addEventListener("DOMContentLoaded", async function() {
    const el = document.getElementById("device-size");

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr2 = window.devicePixelRatio || 1; //DPR = physical pixels ÷ CSS pixels

    const dpr = dpr2.toFixed(3)

    el.textContent = `Viewport: ${width} × ${height} (DPR: ${dpr})`;
    const listItem1 = document.getElementById("item-1");
    document.getElementById("item-2").addEventListener('click', () => runPictures2.run());
    listItem1.addEventListener("click", function() {
        runPictures.openModal();
    });
    document.getElementById('play-btn').addEventListener('click', () => runPictures.run());
    document.getElementById('next-btn').addEventListener('click', () => runPictures.next());
    document.getElementById('stop-btn').addEventListener('click', () => runPictures.stopPictures());
    document.getElementById('close-pictures-one').addEventListener('click', () => runPictures.closeModal());
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const runPictures2 = {
    currentIndex: 0,
    cycleCount: 0,

    run: async function() {
        this.openModal();
        const pictures = document.getElementById('pictures-two-div').children;
        
        while (this.cycleCount < 4) {
            for (const pic of pictures) {
                pic.style.display = 'none';
            }
            
            pictures[this.currentIndex].style.display = 'block';
            const slp = this.calculateSpeed();
            await sleep(slp);
            
            if (this.currentIndex + 1 == pictures.length) {
                this.currentIndex = 0;
                this.cycleCount += 1;
            } else {
                this.currentIndex += 1;
            }
        }
        this.closeModal();
    },
    
    calculateSpeed: function() {
        const speedSlider = document.getElementById('speedSlider').value;
        const speed = 3300 - speedSlider * 300
        console.log(`speedSlider: ${speed}`);
        return speed;
    },

    openModal: function() {
        runPictures.closeModal();
        document.getElementById('pictures-two-modal').style.display='block';
        const pictures = document.getElementById('pictures-two-div').children;
        for (const pic of pictures) {
            pic.style.display = 'none';
        }
        pictures[0].style.display = 'block';
    },
    closeModal: function() {
        this.currentIndex = 0;
        this.cycleCount = 0;
        document.getElementById('pictures-two-modal').style.display='none';    
    },
}

const runPictures = {
    isPlaying: false,
    currentIndex: 0,

    sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }, 

    run: async function(){
        if (this.isPlaying == true) return; // prevent calling twice and doubling speed
        this.isPlaying = true;
        const pictures = document.getElementById('pictures-one-div').children;

        
        while (this.isPlaying) {
            for (const pic of pictures) {
                pic.style.display = 'none';
            }

            pictures[this.currentIndex].style.display = 'block';
            await this.sleep(800);

            if (this.currentIndex + 1 == pictures.length) {
                this.currentIndex = 0;
            } else {
                this.currentIndex += 1;
            }
        }
    },

    next: async function() {
        this.isPlaying = false;
        const pictures = document.getElementById('pictures-one-div').children;

        for (const pic of pictures) {
                pic.style.display = 'none';
            }

        if (this.currentIndex + 1 == pictures.length) {
            this.currentIndex = 0;
        }  else {
            this.currentIndex += 1;
        }
        pictures[this.currentIndex].style.display = 'block';
    },

    stopPictures: function() {
        this.isPlaying = false;
    },

    openModal: function() {
        runPictures2.closeModal();
        document.getElementById('pictures-one-modal').style.display='block';
        const pictures = document.getElementById('pictures-one-div').children;
        for (const pic of pictures) {
            pic.style.display = 'none';
        }
        pictures[0].style.display = 'block';
    },

    closeModal: function() {
        this.isPlaying = false;
        this.currentIndex = 0;
        document.getElementById('pictures-one-modal').style.display='none';
    }
}


// let isPlaying = false;
// let currentIndex = 0;

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runPictures() {
//     const modal = document.getElementById('pictures-modal');
//     const pictures = document.getElementById('pictures-div').children;

//     modal.style.display = 'block';

//     // hide all
//     for (const pic of pictures) {
//         pic.style.display = 'none';
//     }

//     isPlaying = true;

//     while (isPlaying) {
//         // show current picture
//         pictures[currentIndex].style.display = 'block';

//         await sleep(1000);

//         // hide it before moving on
//         pictures[currentIndex].style.display = 'none';

//         // next index (loop)
//         currentIndex = (currentIndex + 1) % pictures.length;
//     }
// }

// function stopPictures() {
//     isPlaying = false;
// }
