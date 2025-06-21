 // Set the date we're counting down to (45 days from now)
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 45);
        
        // Update the count down every 1 second
        const countdown = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        }, 1000);
        
        // Form submission
        document.getElementById('notifyForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.notify-input').value;
            if (email && email.includes('@')) {
                alert('Thank you for your interest in Godrej Prestige Oceanview!\nWe will notify you when we launch.');
                this.querySelector('.notify-input').value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
        
        // Create floating elements
        const floatingContainer = document.getElementById('floatingElements');
        const elementCount = 15;
        
        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            
            // Random properties
            const size = Math.random() * 20 + 5;
            const posX = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 10;
            const opacity = Math.random() * 0.3 + 0.1;
            
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.left = `${posX}%`;
            element.style.bottom = `-${size}px`;
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
            element.style.opacity = opacity;
            
            floatingContainer.appendChild(element);
        }
        
        // Background image slideshow
        const backgroundImages = document.querySelectorAll('.background-image');
        let currentImage = 0;
        
        function changeBackground() {
            backgroundImages[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % backgroundImages.length;
            backgroundImages[currentImage].classList.add('active');
        }
        
        setInterval(changeBackground, 5000);