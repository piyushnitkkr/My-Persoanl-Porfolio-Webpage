
  var typeData = new Typed(".role", {
    strings: [
      "Frontend Developer",
      "Web Developer",
      "Backend Developer",
      "Coder",
      "Software Developer"
    ],
    loop: true,
    typeSpeed: 110,
    backSpeed: 90,
    backDelay: 1000,
  });

  function showSlides(slidesClass, slideIndex) {
    const slides = document.getElementsByClassName(slidesClass);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => showSlides(slidesClass, slideIndex), 2000); // Change image every 2 seconds
  }

  showSlides('mySlides', 0);
  showSlides('mySlides1', 0);
  showSlides('mySlides2', 0);
  showSlides('mySlides3', 0);

  const shareButton = document.getElementById('share-button');
  const sharePopup = document.getElementById('share-popup');
  const Contactme = document.getElementById('share-section');
  const hireme =document.querySelector('.hireme-popup');
  const hirePopup = document.getElementById('hire-popup');
  const hirebutton = document.getElementById('btn');

  hirebutton.addEventListener('click',() =>{
    hirePopup.classList.add('active');
    hireme.classList.add('active1');
  })

  shareButton.addEventListener('click', () => {
    sharePopup.classList.add("active");
  });
  
  function closePopup() {
    sharePopup.classList.remove("active");
    hirePopup.classList.remove("active");
    hireme.classList.remove("active1");
  }

  function closeShare() {
    Contactme.style.transform = "scale(0)";
  }

  function shareOnFacebook() {
    const facebookProfileUrl = `https://www.facebook.com/profile.php?id=100028453747859`;
    window.open(facebookProfileUrl, 'blank');
    console.log('Visit Facebook Profile');
  }

  function shareOnTwitter() {
    const twitterProfileUrl = `https://twitter.com/Piyush_Mittal_p`;
    window.open(twitterProfileUrl, 'blank');
    console.log('Visit Twitter Profile');
  }

  function shareOnInstagram() {
    const instagramProfileUrl = `https://www.instagram.com/piyush_mittal__pm`;
    window.open(instagramProfileUrl, 'blank');
    console.log('Visit Instagram Profile');
  }

  function shareOnWhatsapp() {
    const whatsappUrl = `https://wa.me/7988124907`;
  window.open(whatsappUrl, 'blank');
  console.log('Share on WhatsApp');
  }

  function shareOnLinkedIn() {
    const linkedInProfileUrl = `https://www.linkedin.com/in/piyush-m-79a993280`;
    window.open(linkedInProfileUrl, 'blank');
    console.log('Visit LinkedIn Profile');
  }

  function viewResume() {
    const resumeUrl = 'https://drive.google.com/drive/folders/1snRoGk0fhvF0R38HCx1RPp7UU_1zCW9o?usp=drive_link'; // replace with your resume URL
    window.open(resumeUrl, 'blank');
    console.log('Viewing resume...');
  }

  function mailMe() {
    const mailtoUrl = `mailto:piyushmittal78551@gmail.com`;
    window.open(mailtoUrl, 'blank');
    console.log('Mail me at piyushmittal78551@gmail.com');
  }

  function shareSection(){
    Contactme.style.transform = 'scale(1)'; 
  }

  const overlay = document.querySelector('.overlay');
  
  overlay.addEventListener('click',() =>{
    sharePopup.classList.remove("active");
    hirePopup.classList.remove("active");
    hireme.classList.remove("active1");
  })
