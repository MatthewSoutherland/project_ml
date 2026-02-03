
document.addEventListener("DOMContentLoaded", async function() {
    console.log("js read");
    const listItem1 = document.getElementById("item-1");
    listItem1.addEventListener("click", function() {
        runPictures.openModal();
    });
    document.getElementById('stop-btn').addEventListener('click', () => runPictures.stopPictures());
    document.getElementById('play-btn').addEventListener('click', () => runPictures.run());
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
        this.isPlaying = true;
        const modal = document.getElementById('pictures-one-modal');
        const pictures = document.getElementById('pictures-one-div').children;

        modal.style.display = 'block';
        
        while (this.isPlaying) {
            for (const pic of pictures) {
                pic.style.display = 'none';
            }

            pictures[this.currentIndex].style.display = 'block';
            await this.sleep(1000);

            if (this.currentIndex + 1 == pictures.length) {
                this.currentIndex = 0;
            } else {
                this.currentIndex += 1;
            }
        }
    },

    stopPictures: function() {
        this.isPlaying = false;
    },

    openModal: function() {
        document.getElementById('pictures-one-modal').style.display='block';
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
