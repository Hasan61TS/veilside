// VHS Effects Controller
class VHSEffects {
    constructor() {
        this.overlay = document.querySelector('.vhs-overlay');
        this.initializeEffects();
    }

    initializeEffects() {
        // Random glitch effect
        setInterval(() => {
            this.triggerGlitch();
        }, 5000);

        // Add tracking noise on mouse move
        document.addEventListener('mousemove', () => {
            this.addTrackingNoise();
        });
    }

    triggerGlitch() {
        const glitchDuration = Math.random() * 200 + 100;
        this.overlay.style.transform = `translateX(${Math.random() * 10 - 5}px)`;
        
        setTimeout(() => {
            this.overlay.style.transform = 'none';
        }, glitchDuration);
    }

    addTrackingNoise() {
        this.overlay.style.opacity = '0.8';
        setTimeout(() => {
            this.overlay.style.opacity = '1';
        }, 100);
    }
}

// Initialize VHS effects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new VHSEffects();
}); 