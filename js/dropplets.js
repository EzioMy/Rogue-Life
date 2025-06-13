  // Create magical dust particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 25;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 4 + 's';
                particle.style.animationDuration = (3 + Math.random() * 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Add some interactivity
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
    
        });
        
        // CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);