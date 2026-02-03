
document.addEventListener("DOMContentLoaded", async function() {
    console.log("js read");
    const listItem1 = document.getElementById("item-1");
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
        document.getElementById('pictures-one-modal').style.display='block';
        const pictures = document.getElementById('pictures-one-div').children;
        for (const pic of pictures) {
            console.log(`pic.style.display: ${pic.style.display}`);
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
