// Part 3 JS - All functionality
function toggleMenu(){ document.querySelector('nav').classList.toggle('active'); }

function toggleAccordion(id){
  const c = document.getElementById(id);
  c.style.display = c.style.display==='block' ? 'none' : 'block';
}

function openModal(cost){
  document.getElementById('modal-text').innerText = `Estimated Cost: R${cost}. Availability will be emailed.`;
  document.getElementById('costModal').style.display='block';
}
function closeModal(){ document.getElementById('costModal').style.display='none'; }

function openLightbox(src){
  document.getElementById('lightbox-img').src=src;
  document.getElementById('lightbox').style.display='flex';
}
function closeLightbox(){ document.getElementById('lightbox').style.display='none'; }

const services=[
  {name:"Basic Wash", price:150},
  {name:"Full Grooming", price:350},
  {name:"Nail Clipping", price:80},
  {name:"Cat Grooming", price:300}
];
function loadServices(){
  const list=document.getElementById('service-list');
  if(!list) return;
  list.innerHTML='';
  services.forEach(s=>{
    const div=document.createElement('div');
    div.className='service-card';
    div.innerHTML=`<h3>${s.name}</h3><p>R${s.price}</p><button onclick="openModal(${s.price})">Enquire</button>`;
    list.appendChild(div);
  });
}
function searchServices(){
  const q=document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.service-card').forEach(card=>{
    card.style.display=card.innerText.toLowerCase().includes(q)?'block':'none';
  });
}

function validateEnquiry(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const msg=document.getElementById('message').value.trim();
  const err=document.getElementById('formError');
  err.innerText='';
  if(name.length<3){err.innerText='Name must be 3+ letters'; return false;}
  if(!email.includes('@')){err.innerText='Invalid email'; return false;}
  if(!/^\d{10}$/.test(phone)){err.innerText='Phone must be 10 digits'; return false;}
  if(msg.length<10){err.innerText='Message min 10 chars'; return false;}
  err.style.color='green';
  err.innerText='Sending...';
  setTimeout(()=>{
    openModal(350);
    err.innerText=`Thank you ${name}! Info sent to ${email}`;
    const mailto=`mailto:info@pretoriapetgrooming.co.za?subject=Enquiry&body=${msg}`;
    window.location.href=mailto;
  },800);
  return false;
}
function validateContact(e){
  e.preventDefault();
  const err=document.getElementById('contactError');
  err.style.color='green';
  err.innerText='Thank you! Your message was received.';
  return false;
}
function initMap(){
  if(!document.getElementById('map')) return;
  const map=L.map('map').setView([-25.7479, 28.2293], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([-25.7479, 28.2293]).addTo(map).bindPopup('Pretoria Pet Grooming').openPopup();
}
document.addEventListener('DOMContentLoaded',()=>{loadServices(); initMap();});