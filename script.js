//rendring Gallery of image 
const imgGal = [
    {
      image: "./Image/IMG_0427.jpg",
      caption: "Traditional handloom weaving"
    },
    {
      image: "./Image/pexels-rachel-fernandes-407276623-14953193.jpg",
      caption: "Silk thread preparation"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZqNEA_pyhul8ayMCRVChGSl_uTlts477jQ&s",
      caption: "Silkworm"
    }, 
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc4dL-WlMiMacgAsfYnCH8Wo2rT27PSQdgQ&s",
      caption: "Handloom"
    },
    {
      image: "./Image/free-photo-of-elegant-woman-in-traditional-indian-saree.jpeg",
      caption: "Intricate design work"
    },
    {
      image: "./Image/yarnprep.jpeg",
      caption: "Yarn prepration"
    },
    {
      image: "./Image/pexels-photo-28943579.webp",
      caption: "Finished Banarasi saree"
    }
  ];
const renderGalleryItems=()=> {
    const galleryContainer = document.querySelector('#imageGallery');
    let innerHTML = '';

    imgGal.forEach(item => {
        innerHTML += `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.caption}">
            <div class="gallery-caption">${item.caption}</div>
        </div>
        `;
    });
    galleryContainer.innerHTML = innerHTML;
}

//rendering service
const services = [
    {
        title: "Infotainment",
        description: "Stay updated with the latest saree trends, fashion shows, and industry news from across India.",
        image: "./Image/DALL·E 2024-12-20 10.23.28 - Design a sleek and modern logo for an app called 'Eaver's'. The logo should feature a girl in a traditional saree operating a saree weaving machine, s.webp",
        buttonText: "Explore",
        link:"../components/infotainment.html"
    },
    {
        title: "Technicians",
        description: "Connect with expert saree weavers, dyers, and artisans for custom work or repairs.",
        image: "data:image/jpeg;base64,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",
        buttonText: "Find Experts",
        link:"../components/technician.html"
    },
    {
        title: "Saree Collection",
        description: "Handpicked Sarees by India’s Finest Weavers.",
        image: "./Image/DALL·E 2025-03-16 15.38.06 - A royal, luxurious, and elegant logo design for 'CiraSari' with a minimalist touch. The design should use a simple yet refined color palette — featuri.webp",
        buttonText: "Shop Sarees",
        link:"../components/collections.html"
    }
  ];
const renderServices=()=> {
    const servicesContainer = document.querySelector('.services-grid');
    let innerHTML = '';

    services.forEach(item => {
      innerHTML += `
            <div class="service-card">
                <img src="${item.image}" alt="Infotainment">
                <div class="service-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.link}"><button class="btn btn-primary">${item.buttonText}</button></a>
                    
                </div>
            </div>
      `;
    });
    servicesContainer.innerHTML = innerHTML;
}


//rendering saree collection 3(item)
const sareeCollections = [
    {
        title: "Banarasi Silk",
        description: "Handwoven pure silk sarees from Varanasi with intricate zari work.",
        image: "/Image/pexels-photo-28943579.webp",
        rating: 4.5,
        videoUrl: "/Image/aba1f3b3-4a84-4f05-8b79-1626079eafc6.MP4"
    },
    {
        title: "Kanjivaram Silk",
        description: "Traditional Tamil Nadu silk sarees with temple borders and rich colors.",
        image: "https://www.vastranand.in/cdn/shop/files/2_83a6990c-082a-4e19-83a0-87c1a4e48a42.jpg?v=1743078800",
        rating: 4,
        videoUrl: "/Image/8849054-uhd_2560_1440_30fps.mp4"
    },
    {
      title: "Chanderi Cotton",
      description: "Lightweight cotton sarees from Madhya Pradesh with delicate motifs.",
      image: "./Image/free-photo-of-elegant-woman-in-traditional-saree-with-gold-jewelry.jpeg",
      rating: 5,
      videoUrl: "/Image/a5a6be66-9d20-4f19-8bd0-c503ce49953d.MP4"
  },
  ];
  
const renderSareeCollections=()=>{
    const sellersContainer = document.querySelector('.sellers-grid');

    let innerHTML = '';

    sareeCollections.forEach(item => {
      innerHTML += `
        <div class="seller-card">
            <div class="seller-media">
                <img src="${item.image}" alt="${item.title}">
                <div class="play-icon" onclick="openModal('${item.videoUrl}')">
                    <i class="fas fa-play"></i>
                </div> 
            </div>
            <div class="seller-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="rating">
                    ${renderStars(item.rating)}
                </div>
                <a href="./components/collections.html">
                    <button class="btn btn-primary">View Collection</button>
                </a>
            </div>
        </div>
    `;
    });
    sellersContainer.innerHTML = innerHTML;
}
  
//render Stars
function renderStars(rating) {
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;
let stars = '';

for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
}

if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
}

const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
}

return stars;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderGalleryItems();
  renderServices();
  renderSareeCollections();
  
  // Initialize gallery navigation
  initGalleryNavigation();
  
  // Navigation active link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
      });
  });
});

// Gallery Navigation Functions
function initGalleryNavigation() {
  const gallery = document.getElementById('imageGallery');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  const scrollAmount = () => {
      const item = gallery.querySelector('.gallery-item');
      return (item.offsetWidth + 16) * 3;
  };
            
  nextBtn.addEventListener('click', () => {
      gallery.scrollBy({
          left: scrollAmount(),
          behavior: 'smooth'
      });
  });
  
  prevBtn.addEventListener('click', () => {
      gallery.scrollBy({
          left: -scrollAmount(),
          behavior: 'smooth'
      });
  });
            
            gallery.addEventListener('scroll', () => {
                prevBtn.disabled = gallery.scrollLeft <= 10;
                nextBtn.disabled = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 10;
            });
            
            gallery.dispatchEvent(new Event('scroll'));
            
            // Touch support for mobile devices
            let isDown = false;
            let startX;
            let scrollLeft;
            
            gallery.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - gallery.offsetLeft;
                scrollLeft = gallery.scrollLeft;
            });
            
            gallery.addEventListener('mouseleave', () => {
                isDown = false;
            });
            
            gallery.addEventListener('mouseup', () => {
                isDown = false;
            });
            
            gallery.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - gallery.offsetLeft;
                const walk = (x - startX) * 2;
                gallery.scrollLeft = scrollLeft - walk;
            });
        }

        // Video Modal Functions
        function openModal(videoUrl) {
            const modal = document.getElementById('videoModal');
            const videoFrame = document.getElementById('modalVideo');
            videoFrame.src = videoUrl;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            const modal = document.getElementById('videoModal');
            const videoFrame = document.getElementById('modalVideo');
            modal.style.display = 'none';
            videoFrame.src = '';
            document.body.style.overflow = 'auto';
        }
        
        window.onclick = function(event) {
            const modal = document.getElementById('videoModal');
            if (event.target == modal) {
                closeModal();
            }
        }



  document.querySelector(".explore-btn").addEventListener("click", function () {
    window.location.href = "./components/collections.html";
  });

