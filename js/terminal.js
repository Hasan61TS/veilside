class AudioController {
    constructor() {
        this.audio = document.getElementById('briefing');
        this.playButton = document.querySelector('.play-button');
        this.progress = document.querySelector('.progress');
        this.progressBar = document.querySelector('.progress-bar');
        this.timeDisplay = document.querySelector('.time-display');
        this.isPlaying = false;
        
        this.initializeEvents();
    }

    initializeEvents() {
        this.playButton.addEventListener('click', () => this.togglePlay());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.progressBar.addEventListener('click', (e) => this.seek(e));
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false;
            this.playButton.textContent = '▶';
            // When audio ends, trigger navigation to next page
            setTimeout(() => {
                window.location.href = '/truth.html'; // Next page we'll create later
            }, 2000);
        });
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.playButton.textContent = '▶';
        } else {
            this.audio.play();
            this.playButton.textContent = '⏸';
        }
        this.isPlaying = !this.isPlaying;
    }

    updateProgress() {
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        this.progress.style.width = percent + '%';
        
        const minutes = Math.floor(this.audio.currentTime / 60);
        const seconds = Math.floor(this.audio.currentTime % 60);
        this.timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    seek(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = percent * this.audio.duration;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const vhsEffect = new VHSEffect();
    const glitchText = new GlitchText();
    const audioController = new AudioController();
}); 