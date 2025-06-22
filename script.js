 // Set launch date (60 days from now)
        const launchDate4 = new Date();
        launchDate4.setDate(launchDate4.getDate() + 60);
        
        // Update countdown every second
        const countdown4 = setInterval(function() {
            const now = new Date().getTime();
            const distance = launchDate4 - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById("days4").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours4").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes4").innerHTML = minutes.toString().padStart(2, '0');
            
            if (distance < 0) {
                clearInterval(countdown4);
                document.getElementById("days4").innerHTML = "00";
                document.getElementById("hours4").innerHTML = "00";
                document.getElementById("minutes4").innerHTML = "00";
            }
        }, 1000);
        
        // Form submission
        document.querySelector('.cta-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            // Show success state
            const btn = this.querySelector('button');
            btn.innerHTML = '<i class="fas fa-check"></i> Thank You!';
            btn.style.backgroundColor = '#4CAF50';
            
            // Reset after 3 seconds
            setTimeout(() => {
                btn.textContent = 'Get Priority Access';
                btn.style.backgroundColor = '';
                this.querySelector('input').value = '';
            }, 3000);
        });